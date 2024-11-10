
import Link from "next/link";
import React from "react";
import { Products } from "../api/interfaces/product.interface";
import Image from "next/image";

export default function Product({product}: {product:Products}) {

  return (
  
      <Link href={`product/${product?.id}`}  className="product-container">
      <div className="cursor-pointer">
        <div>
          <div className="relative">
            <div>
              <div className="product-image">
                <div className="image-wrapper">
                  <Image src={product?.imageUrl} alt="Imagen del producto" fill={true}    sizes="(max-width: 600px) 100vw, (max-width: 100px) 50vw, 33vw"  objectFit="contain"/>
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 ">
            <div className="product-content">
              <div className="product-top-content">
                <div className="product-title-container flex flex-col ">
                  <div className="">
                    <div className="product-title ">{product?.name} </div>
                  </div>
                  <div className="flex  flex-row  product-sub-title">
                    <div className="grow">{product?.categoryname}</div>
                    <div>{product?.reference}</div>
                  </div>
                </div>
                <div className="product-price-container mt-2">
                  <h4>{product?.price} COP</h4>
                </div>
              </div>
              <div className="product-desc">
                <p className="max-h-[90px]">{product?.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
    
    
  
  );
}

