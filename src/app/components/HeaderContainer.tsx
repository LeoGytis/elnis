import {HeaderButton} from "../utils/HeaderButton";

export const HeaderContainer = () => {
	return (
		<div className="w-full flex justify-center items-center bg-[#23A094] border-b-8 border-black py-[152px]">
			<div className="max-w-screen-xl flex flex-col gap-[57px]">
				<div className="bg-[#FFC900] rounded-[70px] border-4 text-[34px] text-center font-semibold border-black px-8 py-2 shadow-big">
					Sveiki atvykę! Pasirinkite Jus dominančią temą:
				</div>
				<div className="flex justify-center items-center flex-wrap gap-8">
					<HeaderButton color={"#F67B0980"} text="Reikalinga konsultacija" />
					<HeaderButton color={"#3ADA2080"} text="Nauja svetainė" />
					<HeaderButton color={"#4C16C180"} text="Pateikti užduoti" />
					<HeaderButton color={"#F50F0F80"} text="Nauja el.parduotuvė" />
					<HeaderButton color={"#5A643880"} text="Svetainės atnaujinimas" />
					<HeaderButton color={"#10111180"} text="Priežiūros paslauga" />
					<HeaderButton color={"#F67B0980"} text="Skubi pagalba" />
				</div>
			</div>
		</div>
	);
};
