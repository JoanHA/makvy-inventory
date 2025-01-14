import HomePage from "@/pages/HomePage";
import Header from "@/app/_ui/Header";
import Footer from "./_ui/Footer";
export default function Home() {
	return (
		<div className="flex flex-col">
			<Header></Header>
			<main className="block">
				<HomePage></HomePage>
			</main>
			<Footer></Footer>
		</div>
	);
}
