import {FiHexagon} from "react-icons/fi";

interface HeaderButtonProps {
	text: string;
	color?: string;
	link?: string;
}

export const HeaderButton = ({text, color, link}: HeaderButtonProps) => {
	return (
		<div className="flex gap-[13px] items-center text-black text-lg bg-white rounded-[30px] border-[3px] border-[#333333] p-3 px-6 hover-shadow">
			<FiHexagon fill={color} />
			<div>{text}</div>
		</div>
	);
};
