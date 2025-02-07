import React from "react";
type Props = React.LabelHTMLAttributes<HTMLLabelElement>
export function SubLabel({ children, ...props }: Props) {
  return (
    <label
      className="block mb-2 text-sm  text-gray-600 "
    {...props}
    >
      {children}
    </label>
  );
}


