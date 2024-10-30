"use server";
import { NextResponse } from "next/server";
import db from "@/app/api/lib/prisma";
import path from "path";

import { writeFileSync } from "fs";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME || "",
  api_key: process.env.API_KEY || "",
  api_secret: process.env.API_SECRET || "",
});
export async function POST(req: Request) {
  try {
    const product = await req.formData();
    //Creacion del producto
    const result = await db.products.create({
      data: {
        name: product.get("name")?.toString() ?? "",
        reference: product.get("reference")?.toString() ?? "",
        description: product.get("description")?.toString() ?? "",
        price: parseInt(product.get("price")!.toString()) ?? 0,
        boughtPrice: parseInt(product.get("boughtPrice")!.toString()) ?? 0,
        status: parseInt(product.get("status")!.toString()) ?? 1,
        categoryId: parseInt(product.get("categoryId")!.toString()) ?? 1,
      },
    });

    //Array con las imagenes que se guardaron
    const savedImages = [];
    //Cantidad de imagenes a gaurdar
    const qty = parseInt(product.get("qty")!.toString());

    if (qty > 0) {
      for (let i = 0; i < qty; i++) {
        const image: File = product.get(`images${i}`) as File;
        const bytes = await image.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const filePath = path.join(
          process.cwd(),
          "public",
          `${image.lastModified}-${image.name}`
        );
        //Guardar el archivo localmente
        writeFileSync(filePath, buffer);
        //guardar el archivo en la nube
        const response = await cloudinary.uploader.upload(filePath);
        savedImages.push({
          productId: result.id,
          name: image.name,
          type: image.type,
          imageUrl: response.secure_url,
        });
      }
    }
    //Guardar informacion de las imagenes en la base de datos 
     await db.images.createManyAndReturn({
      data: savedImages.map((image) => ({
        productId: image.productId,
        type: image.type,
        imageUrl: image.imageUrl,
        status: 1, 
      })),
    });

    return NextResponse.json({
      msg: "Producto guardado con exito!",
      status:200,
    });
  } catch (error) {
    return NextResponse.json({
      error,
      msg:"Hubo un error inesperado, intenta mas tarde...",
      status:500
    });
  }
}
