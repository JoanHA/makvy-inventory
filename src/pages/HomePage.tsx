import Catalog from "@/app/_ui/Catalog";
import MainCarrusel from "@/app/_ui/components/MainCarrusel";
import HomeCategory from "@/app/_ui/HomeCategory";

import React from "react";

function HomePage() {
	return (
		<div>
			<section className="flex  flex-col  bg-slate-300">
				<MainCarrusel></MainCarrusel>
			</section>
				<HomeCategory></HomeCategory>
				<Catalog></Catalog>
		</div>
	);
}

export default HomePage;
