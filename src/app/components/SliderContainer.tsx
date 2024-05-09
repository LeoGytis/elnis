import Image from "next/image";
import {FaRegCircle} from "react-icons/fa6";

export const SliderContainer = () => {
	return (
		<div className="">
			<div className="flex flex-col gap-20 justify-center items-center py-20">
				<div className="w-full flex justify-center">
					<Image src="/images/brands.png" alt="Logo" width={1800} height={40} priority />
				</div>
				<div className="max-w-screen-xl flex gap-8">
					<div className="w-1/3 h-[390px]  border-[3px] border-black rounded bg-[#FFC900] shadow-right-bottom-small px-[45px] py-8">
						<h1 className="text-2xl font-bold pb-8">TANDEMO</h1>
						<p className="pb-8">Ačiū, puikus darbas, tikiuosi daugiau ateityje!</p>
						<p>Paulius Sanajevas</p>
						<p>— Tandemo —</p>
					</div>
					<div className="w-1/3 h-[390px] border-[3px] border-black rounded bg-[#90A8ED] shadow-right-bottom-small px-[45px] py-8">
						<h1 className="text-2xl font-bold pb-8">EXTERUS</h1>
						<p className="pb-8">Dirbti su jumis yra gera ir profesionalu. Turėsime dar daug reikalų</p>
						<p>Audrius Valatkevičius</p>
						<p>— Exterus —</p>
					</div>
					<div className="w-1/3 h-[390px] font-light border-[3px] border-black rounded bg-[#E2442F] shadow-right-bottom-small px-[45px] py-8">
						<h1 className="text-2xl font-bold text-white pb-8">Jurgis DID</h1>
						<p className="pb-6">
							“Fantastiškai produktyvu, profesionalu ir operatyvu. Labiausiai žavi tai, kad kliento
							problemos, lūkesčiai ar norai yra traktuojami, kaip savo. Taip gimsta žmogiškas ryšys bei
							pasitikėjimas, kuris....”
						</p>
						<p className="text-right font-bold">SKAITYTI DAUGIAU</p>
						<p>Kostas Kanapeckas</p>
						<p>— Jurgis DID —</p>
					</div>
				</div>
				<div className="flex items-center gap-2">
					<FaRegCircle />
					<div className="w-10 h-[18px] rounded-full bg-black"></div>
					<FaRegCircle />
					<FaRegCircle />
					<FaRegCircle />
				</div>
				<div className="w-full flex justify-center">
					<Image src="/images/brands2.png" alt="Logo" width={1800} height={40} priority />
				</div>
			</div>
		</div>
	);
};
