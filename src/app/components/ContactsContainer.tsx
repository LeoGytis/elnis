/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";

export const ContactsContainer = () => {
	return (
		<div className="flex justify-center border-4 border-black bg-pink-400">
			<div className="w1/2 flex flex-col gap-4 p-16">
				<div className="text-2xl">Kontaktai</div>
				<div>IMAGE</div>
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
					<p>Nanko sąskaita:</p>
					<p>LT474010051003606689</p>
					<p>Luminor Bank AS</p>
				</div>
				<div className="flex gap-4 p-8">
					<div className="p-4 bg-white rounded-full border-4 border-black">+370 623 06955</div>
					<div className="p-4 bg-white rounded-full border-4 border-black">info@elnis.lt</div>
				</div>
			</div>
			<div className="w1/2 border-2 border-black bg-yellow-400 p-16 ">
				<div className="w-96 relative">
					<div className="absolute top-8 left-36 z-10">
						<Image src="/images/instagram.png" alt="Logo" width={60} height={60} priority />
					</div>
					<div className="absolute top-40 left-0 z-10">
						<Image src="/images/wifi.png" alt="Logo" width={60} height={60} priority />
					</div>
					<div className="absolute bottom-0 left-2 z-10">
						<Image src="/images/facebook.png" alt="Logo" width={60} height={60} priority />
					</div>

					<div className="pt-52">
						<Image src="/images/internet.png" alt="Logo" width={600} height={400} priority />
					</div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};
