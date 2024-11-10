import { NextRequest, NextResponse } from "next/server";
import db from "@/app/api/lib/prisma";
import { Products } from "../../interfaces/product.interface";
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const id = (await params).id;
  try {
    const product: Array<Products> = await db.$queryRaw`
    SELECT p.*, i."imageUrl", categories.name as categoryName FROM products p 
    LEFT JOIN images i on i."productId" = p.id
    LEFT JOIN categories on categories.id = p."categoryId" where p.id = ${parseInt(id)} 
    `;
   if(product.length <=0)
    throw new Error('Product not found');

    return NextResponse.json({ status: 200, product: product[0] });
  } catch (error) {
    // @ts-expect-error The error is expected here because we are catching a specific error type (NotFoundError)
    return NextResponse.json({ status: 404, message: error.message });
  }
}
