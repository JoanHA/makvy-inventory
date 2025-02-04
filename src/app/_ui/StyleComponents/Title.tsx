import React from "react";
type Props = React.LabelHTMLAttributes<HTMLLabelElement>
export function Title({ children, ...props }: Props) {
  return (
    <label
      className="block mb-2 text-2xl font-bold text-gray-900 "
    {...props}
    >
      {children}
    </label>
  );
}


