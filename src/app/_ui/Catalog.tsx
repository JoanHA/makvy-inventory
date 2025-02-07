import React from "react";

function Catalog() {
	return (
		<div className="my-2 h-[500px]">
			<div>
				<div className="w-full flex justify-center items-center">
					<h1 className="text-5xl font-bold text-center">
						Tus Categorias favoritas
					</h1>
				</div>
				<div className="flex justify-center gap-14 py-5 flex-wrap image-container">
					<div className="cursor-pointer bg-red-400 w-[300px] h-[300px] py-2 flex flex-col   justify-between items-center ">
						<div>
							<img
								src="https://img.kwcdn.com/product/fancy/5a19d541-d9bd-4fe2-84c8-de2c4ba13f2a.jpg?imageView2/2/w/800/q/70/format/webp"
     
								alt=""
							/>
						</div>
						<div className="text-2xl font-bold">
							<p>Bolsos</p>
						</div>
					</div>
					<div className="cursor-pointer bg-red-400 w-[300px] h-[300px] py-2 flex flex-col   justify-between items-center ">
						<div>
							<img
								src="https://img.kwcdn.com/product/fancy/1dbac682-2459-4184-bff1-8afa28b1c3cf.jpg?imageView2/2/w/800/q/70/format/webp"
								alt=""
							/>
						</div>
                        <div className="text-2xl font-bold">
							<p>Carteras</p>
						</div>
					</div>
					<div className="cursor-pointer bg-red-400 w-[300px] h-[300px] py-2 flex flex-col   justify-between items-center ">
						<div className="">
							<img
								src="https://img.kwcdn.com/product/fancy/6bcc5f76-e79b-48e7-b3c0-a3917999f0df.jpg?imageView2/2/w/800/q/70/format/webp"
								alt=""
                                   
							/>
						</div>
                        <div className="text-2xl font-bold">
							<p>Blusas</p>
						</div>
					</div>
					<div className="cursor-pointer bg-red-400 w-[300px] h-[300px] py-2 flex flex-col   justify-between items-center ">
						<div>
							<img
								src="https://img.kwcdn.com/product/fancy/6bcc5f76-e79b-48e7-b3c0-a3917999f0df.jpg?imageView2/2/w/800/q/70/format/webp"
								alt=""
							/>
						</div>
						<div className="text-2xl font-bold">
							<p>Morrales</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Catalog;
