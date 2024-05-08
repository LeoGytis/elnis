interface HeaderButtonProps {
	text: string;
	color?: string;
	link?: string;
}

export const HeaderButton = ({text, color, link}: HeaderButtonProps) => {
	return (
		<div className="flex flex-wrap justify-center gap-4 border-4 border-red rounded-full bg-white text-black p-4">
			{text}
		</div>
	);
};
