import React from "react";
type Props = {
	src: string;
};
function ImageItem({ src }: Props) {
	return (
		<li className="bg-red-400 w-[100px] h-[100px]">
			<img
				className="w-full h-full object-cover object-fill "
				src={src}
				alt=""
			/>
		</li>
	);
}

export default ImageItem;
