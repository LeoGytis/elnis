import Image from "next/image";
import {HeaderButton} from "../utils/HeaderButton";
import {getRandomColor} from "./HeaderContainer";

export const InfoContainer = () => {
	return (
		<div className="w-full flex bg-black text-white pt-[160px] pb-[189px] px-[100px]">
			<div className="w-1/3 flex flex-col gap-8 border border-pink-400 p-16">
				<Image src="/images/elnis_logo.png" alt="Logo" width={200} height={400} priority />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in libero justo. Interdum et
					Phasellus in libero justo.{" "}
				</p>
				<p>@ELNIS, 2024</p>
			</div>

			<div className="w-1/3 flex flex-col gap-8 border border-red-400 p-16">
				<h1 className="text-[32px] font-semibold pb-[92px]">Naujausi straipsniai</h1>
				<div className="flex gap-4">
					<Image src="/images/straipsniai01.png" alt="Logo" width={120} height={120} priority />
					<div>
						<h3>SSL SERTIFIKATAS</h3>
						<p>2023 12 15</p>
					</div>
				</div>
				<div className="flex gap-4">
					<Image src="/images/straipsniai02.png" alt="Logo" width={120} height={120} priority />
					<div>
						<h3>Pavadinimas gali būti ilgesnis bet ne daugiau dvi eilutės</h3>
						<p> Data 12px</p>
					</div>
				</div>
				<div className="flex gap-4">
					<Image src="/images/straipsniai03.png" alt="Logo" width={120} height={120} priority />
					<div>
						<h3>Pavadinimas 15px</h3>
						<p>Data 12px</p>
					</div>
				</div>
			</div>
			<div className="w-1/3 flex justify-center">
				<div className="flex flex-col justify-center items-center ">
					<h1 className="text-[32px] font-semibold pb-[92px]">Žymų debesis</h1>
					<div className="w-1/2 flex flex-wrap gap-6">
						<HeaderButton color={getRandomColor()} text="El.parduotuvė" />
						<HeaderButton color={getRandomColor()} text="SSL" />
						<HeaderButton color={getRandomColor()} text="Atnaujinimas" />
						<HeaderButton color={getRandomColor()} text="Skaičiuoklė" />
						<HeaderButton color={getRandomColor()} text="El. svetainė" />
						<HeaderButton color={getRandomColor()} text="Priežiūra" />
						<HeaderButton color={getRandomColor()} text="Pagalba" />
						<HeaderButton color={getRandomColor()} text="Kontaktai" />
						<HeaderButton color={getRandomColor()} text="Klausimynas" />
						<HeaderButton color={getRandomColor()} text="Straipsniai" />
					</div>
				</div>
			</div>
		</div>
	);
};
