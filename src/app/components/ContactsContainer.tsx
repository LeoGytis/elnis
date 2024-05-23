/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import brackets from "../../../public/images/brackets.png";
import instagram from "../../../public/images/instagram.png";
import wifi from "../../../public/images/wifi.png";
import facebook from "../../../public/images/facebook.png";
import internet from "../../../public/images/internet.png";

export const ContactsContainer = () => {
	return (
		<div className="flex justify-center border-4 border-black bg-[#FF90E8]">
			<div className="w-1/2 flex justify-center py-16">
				<div className="flex flex-col">
					<div className="text-[48px] text-[#333333] font-extrabold pb-20">Kontaktai</div>
					<div className="flex flex-col gap-8 text-[28px] font-semibold pb-24">
						<Image src={brackets} alt="brackets" width={80} height={80} priority />
						<div>IĮ "ELNIS"</div>
						<div>
							<p>Įmonės kodas:</p>
							<p>304153085</p>
						</div>
						<div>
							<p>PVM mokėtojo kodas:</p>
							<p>LT100009868416</p>
						</div>
						<div>
							<p>Banko sąskaita:</p>
							<p>LT474010051003606689</p>
							<p>Luminor Bank AS</p>
						</div>
					</div>
					<div className="flex gap-[38px] text-[28px] ">
						<div className="bg-white sitas rounded-full border-[3px] border-black hover-shadow px-6 py-3">
							<a href="tel:+37062306955">+370 623 06955</a>
						</div>
						<div className="bg-white sitas rounded-full border-[3px] border-black hover-shadow px-6 py-3">
							<a href="mailto:info@elnis.lt">info@elnis.lt</a>
						</div>
					</div>
				</div>
			</div>
			<div className="w-1/2 flex flex-col justify-center items-center border-l-4 border-black bg-[#FFD300]">
				<div className="relative">
					<div className="absolute top-[-20%] left-36 z-10">
						<Image src={instagram} alt="instagram" width={100} height={100} priority />
					</div>
					<div className="absolute top-40 left-[-10%] z-10">
						<Image src={wifi} alt="wifi" width={100} height={100} priority />
					</div>
					<div className="absolute bottom-[-10%] left-2 z-10">
						<Image src={facebook} alt="facebook" width={100} height={100} priority />
					</div>
					<div className="">
						<Image src={internet} alt="internet" width={700} height={700} priority />
					</div>
				</div>
			</div>
		</div>
	);
};
