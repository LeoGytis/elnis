import {IoIosArrowRoundForward} from "react-icons/io";

export const SubscribeContainer = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center bg-[#FFD300] pt-[72px] pb-[65px]">
			<h1 className="text-[34px] font-bold p-8">Užsiprenumeruokit ELNIS naujienlaiškį</h1>
			<div className="w-[776px] relative pb-6">
				<input
					placeholder="Įveskite savo el pašto adresą"
					className="w-full h-16 text-[15px] placeholder-[#333333]  border-8 border-black rounded-full shadow-right-bottom-small p-[36px]"
				/>
				<button className="absolute top-2 right-[-80px] bg-[#FF4911] text-white text-lg font-bold p-2 px-8 shadow-right-bottom-small">
					<div className="flex gap-4 items-center ">
						Prenumeruoti
						<IoIosArrowRoundForward className="text-4xl" />
					</div>
				</button>
			</div>
			<p className="w-[663px] text-center text-[15px]">
				Užsiprenumeruokite elnis.lt naujienlaiškį ir gaukite informaciją apie naujausius straipsnius, naujas
				darbo pozicijas ir kt. aktualią informaciją.
			</p>
		</div>
	);
};
