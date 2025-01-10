import React from "react";
import { CgProfile,CgMenuCheese  } from "react-icons/cg";
import { BsBag } from "react-icons/bs";
import { VscSearch } from "react-icons/vsc";

function Header() {
  const size =25;
	return (
		<header  className=" fixed w-full">
			<nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 ">
				<div className="flex flex-wrap justify-between  mx-auto max-w-screen-xl">
					<div className="flex items-center ">
						<a
							href="#"
							className="flex items-center justify-center   flex-1 self-center text-gray-800">
							{/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
							<span className="self-center  whitespace-nowrap text-gray  text-sm">
								La mejor opcion para tu outfit
							</span>
						</a>
					</div>
					<a
						href="#"
						className="flex items-center justify-center  flex-1 self-center text-gray-800">
						{/* <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" /> */}
						<span className="self-center text-xl font-semibold whitespace-nowrap text-gray ">
							Makvy Store
						</span>
					</a>

					<div
						className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1 self-end justify-self-end w-full"
						id="mobile-menu-2">
						<div className="justify-self-end flex  gap-2">
							<a
								href="#"
								className="text-gray-800  mx-1 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2 lg:py-2.5 mr-2 focus:outline-none ">
	              <	VscSearch size={size-1}/>
							</a>
							<a
								href="#"
								className="text-gray-800 bg-primary-700 mx-1 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm py-2 lg:py-2.5 mr-2  focus:outline-none ">
							<BsBag size={size-3}/>
							</a>
            
              <a
								href="#"
								className="text-gray-800 bg-primary-700 mx-1 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm py-2 lg:py-2.5 mr-2  focus:outline-none ">
							<CgProfile size={size-1}/>
							</a>
              <a
								href="#"
								className="text-gray-800 bg-primary-700 mx-1 flex items-center hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm+ py-2 lg:py-2.5 mr-2  focus:outline-none ">
							<CgMenuCheese size={size}/> Menu
							</a>
						</div>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;
