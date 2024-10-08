import Image from "next/image";
import "@/app/static/CSS/home.css";
import Link from "next/link";
import logo from "@/app/static/Img/Logo.jpeg";
import { ImWhatsapp } from "react-icons/im";
import { SlOptionsVertical } from "react-icons/sl";
import { ICON_WIDTH } from "./constants/constants";
import { LiaStoreAltSolid } from "react-icons/lia";
import { FaInstagram, FaTiktok, FaWhatsapp, FaStore } from "react-icons/fa6";
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 ">
      <main className="flex flex-col gap-8 row-start-2 items-center  h-100  w-[50%] max-md:w-[100%]">
        <div
          id="title-container"
          className="flex justify-center content-center  flex-wrap  flex-col items-cente  "
        >
          <div className="rounded">
            <Image
              src={logo}
              alt="Page logo"
              height={100}
              className="object-cover rounded-full "
            ></Image>
          </div>
          <div className="flex flex-col items-center main-title-container">
            <h2 className="main-title">Makvy_acccesorios</h2>
            <p className="text-center">Tu tienda favorita</p>
          </div>
        </div>
        <div className="w-full ">
          <div
            id="options-container"
            className="grid  md:grid-cols-1 sm:w-100 sm:h-90 grid-cols-2 gap-6 w-full p-0 h-full"
          >
            <div className="+ link-container max-md:h-[170px] ">
              <Link
                href={"/catalog"}
                className="home-options w-full h-full text-center flex  md:h-[70px] "
              >
                <FaStore size={ICON_WIDTH} />
                Catálogo
                <SlOptionsVertical />
              </Link>
            </div>
            <div className="link-container max-md:h-[170px]   ">
              <Link
                href={"/catalog"}
                className="home-options w-full h-full text-center md:h-[70px]"
              >
                <FaWhatsapp size={ICON_WIDTH} />
                Whatsapp
                <SlOptionsVertical />
              </Link>
            </div>
            <div className="link-container max-md:h-[170px] ">
              {" "}
              <Link
                href={"/catalog"}
                className="home-options w-full h-full text-center md:h-[70px]"
              >
                <FaInstagram size={ICON_WIDTH} />
                Instagram
                <SlOptionsVertical />
              </Link>
            </div>
            <div className="link-container max-md:h-[170px] ">
              {" "}
              <Link
                href={"/catalog"}
                className="home-options w-full h-full text-center md:h-[70px]" 
              >
                <FaTiktok size={ICON_WIDTH} />
                Tik tok
                <SlOptionsVertical />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
