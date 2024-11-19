import React from "react";
type Props = React.LabelHTMLAttributes<HTMLLabelElement>
export function Label({ children, ...props }: Props) {
  return (
    <label
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
    {...props}
    >
      {children}
    </label>
  );
}


