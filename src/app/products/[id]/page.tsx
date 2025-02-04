import ImageItem from "@/app/_ui/components/ImageItem";
import RelatedProducts from "@/app/_ui/components/RelatedProducts";
import { Button } from "@/app/_ui/StyleComponents/Button";
import { Label } from "@/app/_ui/StyleComponents/Label";
import { StandarButton } from "@/app/_ui/StyleComponents/StandarButton";
import { SubLabel } from "@/app/_ui/StyleComponents/SubLabel";
import { Title } from "@/app/_ui/StyleComponents/Title";
import React from "react";
import { CiHeart } from "react-icons/ci";

function page() {
	const desc: string = `*ASPECTOS A TENER EN CUENTA:* 
1. Nuestras garantías únicamente son por defectos de
fabricación, imperfecciones en cierres y herrajes,
además el producto debe estar con su respectivo empaque.
2. La garantía no cubre daños en el producto por uso
inadecuado del cliente y/o desgaste natural del
material. 
3. Podemos hacer efectiva la garantía
reparando los imperfectos que cubran los términos y
condiciones o haciendo entrega de un nuevo bolso por el
mismo valor del comprado.`;
	return (
		<div className=" w-full">
			<div className="flex justify-center w-full">
				<div className="flex gap-4 justify-center">
					<div className="grow-3">
						<ul className="flex flex-col gap-6 image-list-container">
							<ImageItem src="https://frutocuatro.com/wp-content/uploads/2018/05/camiseta-64000-royal-frente-897x1102.jpg" />
							<ImageItem
								src={
									"https://frutocuatro.com/wp-content/uploads/2018/05/camiseta-64000-rojo-frente-897x1102.jpg"
								}
							/>
							<ImageItem
								src={
									"https://frutocuatro.com/wp-content/uploads/2018/05/64000-blanco-frente-897x1102.jpg"
								}
							/>
						</ul>
					</div>
					<div className=" ">
						<div className="bg-red-500 grow-8  h-[70%]">
							<div className="overflow-hidden w-full h-full">
								<img
									className="w-full h-full object-cover object-fill "
									src="https://frutocuatro.com/wp-content/uploads/2018/05/camiseta-5000-verde-militar-frente-897x1102.jpg"
									alt=""
								/>
								.
							</div>
						</div>
					</div>
					<div className="grow-0 flex flex-col max-w-[25%]">
						<div className="">
							<Title>Camiseta Verde sencilla</Title>
						</div>
						<div>
							<SubLabel className="text-gray-600 text-xs">
								Camisetas
							</SubLabel>
						</div>
						<div>
							<Label className="mt-2 font-bold text-3xl text-red-400">
								$ 500.000
							</Label>
						</div>
						<hr className="w-full my-5" />

						<div className="product-desc">
							<p>{desc}</p>
						</div>

						<div className="flex flex-wrap w-full  items-center gap-2 my-4">
							<div className="grow">
								<StandarButton type="button">
									Agregar al carrito
								</StandarButton>
							</div>
							<div className="">
								<Button>
									{" "}
									<CiHeart size={20} />
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center flex-col  gap-5  items-center ">
				<h1 className="text-4xl font-bold">Productos Relacionados</h1>
				<div>
					<RelatedProducts></RelatedProducts>
				</div>
			</div>
		</div>
	);
}

export default page;
