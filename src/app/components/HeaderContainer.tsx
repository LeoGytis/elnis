import {HeaderButton} from "../utils/HeaderButton";

export const HeaderContainer = () => {
	return (
		<div className="w-full flex justify-center bg-emerald-600 py-16 border-b-4 border-black">
			<div className="max-w-screen-xl flex flex-col gap-4">
				<div>
					<div className="p-8 bg-yellow-600 rounded-full border-y-4 border-black">
						Sveik atvyke pasirinkite dominnancia temą:
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
