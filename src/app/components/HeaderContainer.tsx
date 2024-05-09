import {HeaderButton} from "../utils/HeaderButton";

export const HeaderContainer = () => {
	function getRandomColor(): string {
		return "#" + Math.floor(Math.random() * 16777215).toString(16);
	}

	return (
		<div className="w-full flex justify-center items-center bg-[#23A094] border-b-8 border-black py-[152px]">
			<div className="max-w-screen-xl flex flex-col gap-[57px]">
				<div className="bg-[#FFC900] rounded-[70px] border-4 text-[34px] text-center font-semibold border-black px-8 py-2 shadow-right-bottom">
					Sveiki atvykę! Pasirinkite Jus dominančią temą:
				</div>
				<div className="flex justify-center items-center flex-wrap gap-8">
					<HeaderButton color={getRandomColor()} text="Reikalinga konsultacija" />
					<HeaderButton color={getRandomColor()} text="Nauja svetainė" />
					<HeaderButton color={getRandomColor()} text="Pateikti užduoti" />
					<HeaderButton color={getRandomColor()} text="Nauja el.parduotuvė" />
					<HeaderButton color={getRandomColor()} text="Svetainės atnaujinimas" />
					<HeaderButton color={getRandomColor()} text="Priežiūros paslauga" />
					<HeaderButton color={getRandomColor()} text="Skubi pagalba" />
					<HeaderButton color={getRandomColor()} text="Klausimynas" />
				</div>
			</div>
		</div>
	);
};
