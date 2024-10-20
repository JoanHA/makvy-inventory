import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProductsContainer from "../components/ProductsContainer";

export default function Page() {
  return (
    <div className="w-full flex flex-col ">
      <Header></Header>
      <div className="max-w-[1140px] self-center">
        <div className=" flex  justify-center gap-2">
          <div className="h-full w-[25%] p-4">
            <Sidebar></Sidebar>
          </div>
          {/* Productos */}
          <div className="w-[75%]">
            <ProductsContainer></ProductsContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
