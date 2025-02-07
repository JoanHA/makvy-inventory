import React  from "react";
type Props = React.ButtonHTMLAttributes<HTMLButtonElement>
export function Button({ children, ...props }: Props) {
  return (

    <button  {...props}  className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 ">
        {children}
    </button>




  );
}


