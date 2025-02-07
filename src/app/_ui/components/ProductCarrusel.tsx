"use client";
import { useRef, useState } from "react";
import ProductSingleView from "./ProductSingleView";
import "@/static/css/Products.css";

const ProductCarrusel = () => {
	const containerRef = useRef(null);
	const [marginQty, SetMarginQty] = useState<number>(350);
//ESTO ES TEMPORAL
	const moveForward = () => {
		if (containerRef.current) {
      if(marginQty <2000){
        containerRef.current.style.margin = ` 0px  -${marginQty}px 0   `;
        SetMarginQty(marginQty + 350);
        console.log(containerRef.current.style.margin);
      }

		}
	};
	const moveBackwards = () => {
		if (containerRef.current) {
			if (marginQty <= 350) {
				return;
			}
			containerRef.current.style.margin = ` 0px  -${marginQty - 700}px 0   `;
			SetMarginQty(marginQty - 350);
			console.log(containerRef.current.style.margin);
		}
	};
	return (
		<div className="relative product-slider-box">
			{/* Contenedor del carrusel */}
			<div ref={containerRef} className="product-slider-container ">
				<ProductSingleView number={1} />
				<ProductSingleView number={2} />
				<ProductSingleView number={3} />
				<ProductSingleView number={4} />
				<ProductSingleView number={5} />
				<ProductSingleView number={6} />
				<ProductSingleView number={7} />
				<ProductSingleView number={8} />
				<ProductSingleView number={9} />
				<ProductSingleView number={10} />
			</div>
			{/* Botón de retroceso */}
			<button
				onClick={() => moveBackwards()}
				className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-900 focus:outline-none"
				aria-label="Retroceder">
				&#8592;
			</button>

			{/* Botón de avance */}
			<button
				onClick={() => moveForward()}
				className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white rounded-full p-2 hover:bg-gray-900 focus:outline-none"
				aria-label="Avanzar">
				&#8594;
			</button>
		</div>
	);
};

export default ProductCarrusel;
