'use client'

import Sidebar from "../../components/Sidebar";
import ProductsContainer from "../../components/ProductsContainer";
import SecondaryHeader from "../../components/ui/AppBar";



export default function Page() {
 
  return (
    <div className="w-full flex flex-col ">
      <SecondaryHeader></SecondaryHeader>

      <div className="max-w-[1140px] self-center">
        <div className=" flex  justify-center gap-2">
          <div className="h-full w-[25%] p-4">
            <Sidebar></Sidebar>
          </div>
          {/* Productos */}
          <div className="w-[75%]">
            <ProductsContainer  ></ProductsContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
