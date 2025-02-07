
import Link from "next/link";
import React from "react";
// import { Products } from "../api/interfaces/product.interface";
import Image from "next/image";

export default function Product() {

  return (
  
      <Link href={`product/`}  className="product-container">
      <div className="cursor-pointer">
        <div>
          <div className="relative">
            <div>
              <div className="product-image">
                <div className="image-wrapper">
                  <Image src={"https://hips.hearstapps.com/hmg-prod/images/461870755-427070643754133-8970751094928382055-n-67864ff5529bb.jpg?crop=1xw:1xh;center,top&resize=980:*"} alt="Imagen del producto"fill={true}    sizes="(max-width: 600px) 100vw, (max-width: 100px) 50vw, 33vw"  objectFit="contain"/>
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 ">
            <div className="product-content">
              <div className="product-top-content">
                <div className="product-title-container flex flex-col ">
                  <div className="">
                    <div className="product-title ">Camiseta cafe</div>
                  </div>
                  <div className="flex  flex-row  product-sub-title">
                    <div className="grow">camisetas</div>
                    <div>CMK109</div>
                  </div>
                </div>
                <div className="product-price-container mt-2">
                  <h4> 80.000,00 COP</h4>
                </div>
              </div>
              <div className="related-produc-desc">
                <p className="max-h-[90px]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam aut explicabo quia hic similique quod placeat eum quae nulla. Fugit iusto error nulla ad sequi suscipit voluptatibus, nisi beatae eligendi!sdvsdveew Lorem ipsum dolor, sit amet consectetur adipisicing elit. A veritatis nobis quae eius sapiente ut mollitia culpa et vel, perferendis optio distinctio sunt error sequi laudantium rerum ex nemo debitis!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
    
    
  
  );
}

