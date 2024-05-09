import {HeaderButton} from "../utils/HeaderButton";

export const HeaderContainer = () => {
	function getRandomColor(): string {
		return "#" + Math.floor(Math.random() * 16777215).toString(16);
	}

	return (
		<div className="w-full flex justify-center bg-[#23A094] py-16 border-b-4 border-black">
			<div className="max-w-screen-xl flex flex-col gap-4">
				<div>
					<div className="bg-[#FFC900] rounded-[70px] border-4 text-[34px] font-semibold border-black px-8 py-2 shadow-right-bottom">
						Sveiki atvykę! Pasirinkite Jus dominančią temą:
					</div>
				</div>
				<div className="w-[500px] flex flex-wrap gap-4">
					<HeaderButton color={getRandomColor()} text="Labas rytas" />
					<div>Reikalinga konsultacija</div>
					<div>Nauja svetainė</div>
					<div>Pateikti užduoti</div>
					<div>Nauja el.parduotuvė</div>
					<div>Svetainės atnaujinimas</div>
					<div>Priežiūros paslauga</div>
					<div>Skubi pagalba</div>
					<div>Klausimynas</div>
				</div>
				ciaa viskas
			</div>
		</div>
	);
};
