import {HeaderButton} from "../utils/HeaderButton";

export const HeaderContainer = () => {
	return (
		<div className="w-full flex justify-center bg-[#23A094] py-16 border-b-4 border-black">
			<div className="max-w-screen-xl flex flex-col gap-4">
				<div>
					<div className="bg-[#FFC900] rounded-[70px] border-4 text-[34px] font-semibold border-black px-8 py-2 shadow-right-bottom">
						Sveiki atvykę! Pasirinkite Jus dominančią temą:
					</div>
				</div>
				<div className="w-[500px] flex flex-wrap gap-4">
					<div>Reikalinga konsultacija</div>
					<div>Nauja svetainė</div>
					<div>Pateikti užduoti</div>
					<div>Nauja el.parduotuvė</div>
					<div>Svetainės atnaujinimas</div>
					<div>Priežiūros paslauga</div>
					<div>Skubi pagalba</div>
					<div>Klausimynas</div>
					{/* <HeaderButton text="Labas rytas" /> */}
				</div>
				ciaa viskas
			</div>
		</div>
	);
};
