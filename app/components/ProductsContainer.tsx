"use client";
import { cache } from 'react'
import React, { useEffect, useState } from "react";
import Product from "./Product";
import "@/app/static/CSS/Products.css";

import axios from "axios";
import { Products } from "../api/interfaces/product.interface";
export default function ProductsContainer() {
  const [products, setProducts] = useState<Array<Products>>([]);

  const getProducts =  cache( async() => {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data.products);
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
        ) : (
          <div>menor</div>
        )}
      </div>
    </div>
  );
}
