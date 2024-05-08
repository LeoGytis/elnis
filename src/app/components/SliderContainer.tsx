import Image from "next/image";

export const SliderContainer = () => {
	return (
		<div className="">
			<div className="flex flex-col justify-center items-center ">
				<div className="w-full flex justify-center">
					<Image src="/images/brands.png" alt="Logo" width={1800} height={40} priority />
				</div>
				<div className="max-w-screen-xl flex gap-8 p-8">
					<div className="h-60 border-4 border-black bg-orange-400">
						<h1>TNDEMO</h1>
						<p>Ačiū, puikus darbas, tikiuosi daugiau ateityje! Paulius Sanajevas — Tandemo —</p>
					</div>
					<div className="h-60 border-4 border-black bg-violet-400">
						<h1>Exterus</h1>
						<p>Dirbti su jumis yra gera ir profesionalu. Turėsime dar daug reikalų</p>
						<p>Audrius Valatkevičius — Exterus —</p>
					</div>
					<div className="h-60 border-4 border-black bg-red-500">
						<h1>Jurgis DID</h1>
						<p>
							“Fantastiškai produktyvu, profesionalu ir operatyvu. Labiausiai žavi tai, kad kliento
							problemos, lūkesčiai ar norai yra traktuojami, kaip savo. Taip gimsta žmogiškas ryšys bei
							pasitikėjimas, kuris....”
						</p>
						<p>SKAITYTI DAUGIAU</p>
						<p>Kostas Kanapeckas — Jurgis DID —</p>
					</div>
				</div>
				<div className="w-full flex justify-center">
					<Image src="/images/brands2.png" alt="Logo" width={1800} height={40} priority />
				</div>
			</div>
		</div>
	);
};
