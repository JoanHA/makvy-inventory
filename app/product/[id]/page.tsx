import Header from "@/app/components/Header";
import { Button, ButtonGroup, Divider } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { IoChevronBackSharp } from "react-icons/io5";

export default function page() {
  const description = ` Medidas: 14 cm de alto x 8 cm de ancho x 22 cm de longitud✨💜.
                      Color: Blanco .
                      Tipo de tirantes: ajustables, Asa superior 
                      Tipo de Estampado: Acolchado 
                      Tipo: Bolso cuadrado 
                      Composición: 100% Poliéster 
                       Material: Cuerina`;
  return (
    <div>
      <Header>
        <Link href="/catalog">
          <div>
            <Button variant="text" className="flex gap-2">
              <IoChevronBackSharp />
              Volver
            </Button>
          </div>
        </Link>
      </Header>
      <div>
        <div
          className="flex flex-row gap-1 justify-center p-5"
          style={{ margin: "0 auto" }}
        >
          <div className="p-4 mx-2">
            <div>
              <div>
                <Image
                  sizes="100vw"
                  src={
                    "https://firebasestorage.googleapis.com/v0/b/kyte-7c484.appspot.com/o/sTMnt7vy0ZWE0Nue3CEDtjCyy183%2FDF43B882-54D4-4683-B4A7-C40432039EC4.jpg?alt=media"
                  }
                  alt="Product image"
                  width={555}
                  height={555}
                ></Image>
              </div>
            </div>
          </div>

          <div className="w-[30%] mt-4">
            <div
              style={{ background: "rgb(247, 247, 248)" }}
              className=" w-[100%] h-[97%] rounded-lg p-8 gap-4 flex flex-col"
            >
              <div className="flex flex-col ">
                <div className="flex gap-1">
                  <div>
                    <p className="m-0">BLANCOS🤍</p>
                  </div>
                  <span>•</span>
                  <div>
                    <p className="m-0"> COD. LB0049</p>
                  </div>
                </div>
                <div>
                  <h2 className="m-0">Bolso acolchado blanco🤍</h2>
                </div>
                <div>
                  <h4 className="m-0">$ 75.000,00</h4>
                </div>
              </div>
              <Divider />
              <div className="description-container flex-1">
                <p
                  dangerouslySetInnerHTML={{
                    __html: description.replace(/\n/g, "<br/>"),
                  }}
                ></p>
              </div>
              <Divider />
              {/*div separador*/}
              <div>
                <div className="flex flex-col gap-2">
                  <div>
                    <Button
                      variant="contained"
                      size="large"
                      style={{ background: "var(--secondary-color)" }}
                      className="w-full flex justify-center"
                    >
                      <FaWhatsapp size={20} />
                      <p className="flex-1"> Pedir al whatsapp</p>
                    </Button>
                  </div>
                  <div>
                    <Button
                      variant="outlined"
                      size="large"
                      color="success"
                      className="w-full"
                    >
                      Agregar al carrito
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
