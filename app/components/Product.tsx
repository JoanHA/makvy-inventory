import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Product() {
  return (
  
      <Link href={"product/1"}  className="product-container">
      <div className="cursor-pointer">
        <div>
          <div className="relative">
            <div>
              <div className="product-image">
                <div className="image-wrapper">
                  <img src="https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/sTMnt7vy0ZWE0Nue3CEDtjCyy183%2Fthumb_280_37C3194F-9F41-48A6-B854-3A8141FA445D.jpg?alt=media" />
                </div>
              </div>
            </div>
          </div>
          <div className="px-3 ">
            <div className="product-content">
              <div className="product-top-content">
                <div className="product-title-container flex flex-col ">
                  <div className="">
                    <div className="product-title ">Gafas </div>
                  </div>
                  <div className="flex  flex-row  product-sub-title">
                    <div className="grow">Accessorios</div>
                    <div>COD LN011</div>
                  </div>
                </div>
                <div className="product-price-container mt-2">
                  <h4>30.000 COP</h4>
                </div>
              </div>
              <div className="product-desc">
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
    
    
  
  );
}

