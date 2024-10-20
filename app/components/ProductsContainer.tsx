import React from "react";
import Product from "./Product";
import "@/app/static/CSS/Products.css"
export default function ProductsContainer() {
  return (
    <div className="flex flex-wrap p-5 ">
      <div className="main-columns-container p-2">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </div>
  );
}
