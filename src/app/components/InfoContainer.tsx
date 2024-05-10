import Image from "next/image";
import {HeaderButton} from "../utils/HeaderButton";
import elnis_logo from "../../../public/images/elnis_logo.png";
import str01 from "../../../public/images/straipsniai01.png";
import str02 from "../../../public/images/straipsniai02.png";
import str03 from "../../../public/images/straipsniai03.png";
import {getRandomColor} from "../utils/functions";

export const InfoContainer = () => {
	return (
		<section className="w-full flex gap-32 bg-black text-white pt-[160px] pb-[189px] px-[100px]">
			<article className="w-1/3 h-[552px] flex flex-col justify-between">
				<Image src={elnis_logo} alt="elnis_logo" width={225} height={330} priority />
				<p className="text-lg">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in libero justo. Interdum et
					Phasellus in libero justo.{" "}
				</p>
				<p className="text-lg">@ELNIS, 2024</p>
			</article>
			<article className="w-1/3 h-[552px] flex flex-col justify-between">
				<h1 className="text-[32px] font-semibold">Naujausi straipsniai</h1>
				<div className="flex flex-col gap-8">
					<div className="flex gap-4">
						<Image src={str01} alt="Logo" width={120} height={120} priority />
						<div>
							<h3 className="text-[15px] font-bold pb-4">SSL SERTIFIKATAS</h3>
							<p className="text-xs">2023 12 15</p>
						</div>
					</div>
					<div className="flex gap-4">
						<Image src={str02} alt="Logo" width={120} height={120} priority />
						<div>
							<h3 className="text-[15px] font-bold pb-4">
								Pavadinimas gali būti ilgesnis, bet ne daugiau nei per 2 eilutes
							</h3>
							<p className="text-xs"> Data 12px</p>
						</div>
					</div>
					<div className="flex gap-4">
						<Image src={str03} alt="Logo" width={120} height={120} priority />
						<div>
							<h3 className="text-[15px] font-bold pb-4">Pavadinimas 15px</h3>
							<p className="text-xs">Data 12px</p>
						</div>
					</div>
				</div>
			</article>
			<article className="w-1/3 h-[552px] flex flex-col justify-between">
				<h1 className="text-[32px] font-semibold">Žymų debesis</h1>
				<div className="flex flex-wrap gap-6">
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
			</article>
		</section>
	);
};
