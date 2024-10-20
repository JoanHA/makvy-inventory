import React from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Image from "next/image";
import logo from "@/app/static/Img/Logo.jpeg";
export default function Header({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className=" w-full  shadow h-[90px] p-3 flex items-center justify-center gap-3">
      <div className="flex items-center justify-center">
        {children ? (
          children
        ) : (
          <Box sx={{ display: "flex", alignItems: "flex-end" }}>
            <SearchIcon
              sx={{ color: "action.active", mr: 1, my: 0.5 }}
              className=" scale-x-[-1]"
            />
            <TextField
              className="text-gray-300"
              id="search-input"
              label="Que estas buscando?"
              variant="standard"
            />
          </Box>
        )}
      </div>
      <div>
        <div className="">
          <Image
            src={logo}
            alt="Page logo"
            height={60}
            className="object-cover  "
          ></Image>
        </div>
      </div>
    </div>
  );
}
