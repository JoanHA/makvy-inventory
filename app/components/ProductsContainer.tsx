"use client";
import { cache } from 'react'
import React, { useEffect, useState } from "react";
import Product from "./Product";
import "@/app/static/CSS/Products.css";

import axios from "axios";
import { Products } from "../api/interfaces/product.interface";
import ProductsSkeleton from './ProductsSkeleton';
export default function ProductsContainer() {
  const [products, setProducts] = useState<Array<Products>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const getProducts =  cache( async() => {
    try {
      const response = await axios.get("/api/products");
         setProducts(response.data.products);
         setLoading(false);
    } catch (error) {
      console.error(error);
    }
  });
  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);
  return (
    <div className="flex flex-wrap p-5 ">
      <div className="main-columns-container p-2">
        {products?.length > 0 ? (
           products.map((p) => <Product product={p} key={p.id}></Product>)
        ) : loading ?  (
          <div>
                 <ProductsSkeleton></ProductsSkeleton>
          </div>
        ):(
        //TODO: hacer la vista de no hay productos
        <div>
          <div> No hay productos para mostrar</div>
        </div>)
        }
      </div>
    </div>
  );
}
