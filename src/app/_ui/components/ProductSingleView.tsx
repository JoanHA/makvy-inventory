import React from "react";

function ProductSingleView() {
	return (
		<div>
			<div className="w-56 mr-[12px] flex-col flex gap-8">
				<div className="flex w-full flex-col justify-center gap-4 ">
					<div className="image">
						<img
							src="https://www.kikocosmetics.com/_next/image/?url=https%3A%2F%2Fassets.joqhl8w6.on-eva.io%2Fblob%2F7705d7a5-111e-36f8-08b3-97aeb0ae2b9c&w=1200&q=80"
							alt="Imagen del producto"
							className="flex-1"
						/>
					</div>
					<div className="description text-xs text-gray-500 text-center">
						Base de maquillaje y corrector 2 en 1, alta cobertura
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
				<div className="w-full">
					<div className="flex flex-row gap-2 justify-center w-full">
                    <button type="button" className="px-3 me-2 mb-2 text-xs text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Añadir al carrito</button>

                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-xs px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Croa</button>

					</div>
				</div>
			</div>
		</div>
	);
}

export default ProductSingleView;
