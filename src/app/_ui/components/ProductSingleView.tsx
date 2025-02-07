import React from "react";
import { CiHeart } from "react-icons/ci";

function ProductSingleView({number}:{number:number}) {
	return (
		<div className="px-4 my-2 w-[370px]">
			<div className="w-full mr-[12px] flex-col flex gap-8 px-3">
				<div className="flex w-full flex-col justify-center gap-4 ">
					<div className="image">
						<img
							src="https://www.kikocosmetics.com/_next/image/?url=https%3A%2F%2Fassets.joqhl8w6.on-eva.io%2Fblob%2F7705d7a5-111e-36f8-08b3-97aeb0ae2b9c&w=1200&q=80"
							alt="Imagen del producto"
							className="flex-1"
						/>
					</div>
					<div className="description text-xs text-gray-500 text-center">
						Base de maquillaje y corrector 2 en 1, alta cobertura producto {number}
					</div>
					<div className="title text-center text-sm">
						<p className="m-0">
							Full Coverage 2-In-1 Foundation & Concealer 37 - Cr05
						</p>
					</div>
					<div className="price text-center">
						<p className="m-0">88.000,00 COP</p>
					</div>
				</div>
				<div className="w-full px-3">
					<div className="flex flex-row gap-2 justify-center w-full">
						<button
							type="button"
							className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-xs  py-2.5  px-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
							Añadir al carrito
						</button>
						<button
							type="button"
							className="text-dark bg-white  focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-xs px-3 py-2 text-center  border-black   border hover:bg-black">
							<CiHeart size={20}  className="text-red-900"/>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductSingleView;
