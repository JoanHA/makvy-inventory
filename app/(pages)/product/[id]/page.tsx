"use client";
import { Products } from "@/app/api/interfaces/product.interface";

import SecondaryHeader from "@/app/components/ui/AppBar";
import { Button, Divider } from "@mui/material";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoChevronBackSharp } from "react-icons/io5";

export default function Page() {
  const [product, setProduct] = useState<Products>();
  const {id} = useParams()
  const getProduct = async () => {
    const res = await axios.get(`/api/products/${id}`);
    setProduct(res.data.product);
    console.log(res.data.product);
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
        <SecondaryHeader>
        <Link href="/catalog">
          <div>
            <Button variant="text" className="flex gap-2">
              <IoChevronBackSharp />
              Volver
            </Button>
          </div>
        </Link>
        </SecondaryHeader>
      <div>
        <div
          className="flex flex-row gap-1 justify-center p-5"
          style={{ margin: "0 auto" }}
        >
          <div className="p-4 mx-2">
            <div className="max-w-[300px]">
              <div className="image-wrapper">
                <Image
                  sizes="100vw"
                  src={product?.imageUrl || ""}
                  alt="Product image"
                  width={555}
                  height={555}
                  className=" rounded-lg"
                ></Image>
              </div>
            </div>
          </div>

          <div className="w-[30%] mt-4">
            <div
              style={{ background: "rgb(247, 247, 248)" }}
              className=" w-[100%] h-[97%] rounded-lg p-8 gap-4 flex flex-col"
            >
              <div className="flex flex-col ">
                <div className="flex gap-1">
                  <div>
                    <p className="m-0">{product?.categoryname}</p>
                  </div>
                  <span>•</span>
                  <div>
                    <p className="m-0">{product?.reference}</p>
                  </div>
                </div>
                <div>
                  <h2 className="m-0">{product?.name}</h2>
                </div>
                <div>
                  <h4 className="m-0">$ {product?.price} COP</h4>
                </div>
              </div>
              <Divider />
              <div className="description-container flex-1">
                <p
                  dangerouslySetInnerHTML={{
                    __html: product?.description.replace(/\n/g, "<br/>") || "",
                  }}
                ></p>
              </div>
              <Divider />
              {/*div separador*/}
              <div>
                <div className="flex flex-col gap-2">
                  <div>
                    <Button
                      variant="contained"
                      size="large"
                      style={{ background: "var(--secondary-color)" }}
                      className="w-full flex justify-center"
                    >
                      <FaWhatsapp size={20} />
                      <p className="flex-1"> Pedir al whatsapp</p>
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="outlined"
                      size="large"
                      color="success"
                      className="w-full"
                    >
                      Agregar al carrito
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
