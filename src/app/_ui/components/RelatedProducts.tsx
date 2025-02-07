"use client";
import React from "react";
import ProductsSkeleton from "./ProductsSkeleton";
import Product from "./Product";

function RelatedProducts() {
	// const [products, setProducts] = useState<Array<Products>>([]);
	// const [loading, setLoading] = useState<boolean>(true);
	// const getProducts =  cache( async() => {
	//   try {
	//     const response = await axios.get("/api/products");
	//        setProducts(response.data.products);
	//        setLoading(false);
	//   } catch (error) {
	//     console.error(error);
	//   }
	// });
	// useEffect(() => {
	//   getProducts();
	// }, []);

	// console.log(products);
	return (
		<div className="flex flex-wrap p-5 ">
			<div className="main-columns-container p-2">
				{true ? (
					<Product></Product>
				) : (
					<div>
						<ProductsSkeleton></ProductsSkeleton>
					</div>
				)}
			</div>
		</div>
	);
}

export default RelatedProducts;
