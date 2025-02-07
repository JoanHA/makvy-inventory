"use client";
import React from "react";
import ProductsSkeleton from "./ProductsSkeleton";
import Product from "./Product";

function RelatedProducts() {
	return (
		// 
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 justify-center">
				{true ? (<>
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
					</>
				) : (
					<div>
						<ProductsSkeleton></ProductsSkeleton>
					</div>
				)}
			</div>

	);
}

export default RelatedProducts;
