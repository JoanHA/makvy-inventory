import {  Skeleton } from "@mui/material";
import React from "react";

const MiniSkeleton = () => {
  return (
    <div className="">
      <Skeleton
        variant="rectangular"
        width={190}
        height={200}
        className="rounded-md"
      ></Skeleton>
      <Skeleton width={190}></Skeleton>
      <Skeleton width={180}></Skeleton>
      <Skeleton width={190}></Skeleton>
      <Skeleton width={150}></Skeleton>
    </div>
  );
};
function ProductsSkeleton() {
  return (
    <div className="flex flex-wrap p-5 ">
      <div className="main-columns-container p-2  flex gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>
            <MiniSkeleton />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductsSkeleton;
