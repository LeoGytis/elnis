import Image from "next/image";

export const InfoContainer = () => {
	return (
		<div className="w-full flex gap-8 bg-black text-white">
			<div className="w-1/3 flex flex-col gap-8 border border-pink-400 p-16">
				<Image src="/images/elnis_logo.png" alt="Logo" width={200} height={400} priority />
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in libero justo. Interdum et
					Phasellus in libero justo.{" "}
				</p>
				<p>@ELNIS, 2024</p>
			</div>

			<div className="w-1/3 flex flex-col gap-8 border border-pink-400 p-16">
				<h1 className="text-4xl">Naujausi straipsniai</h1>
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
			<div className="p-16">
				<h1 className="text-4xl">Žymų debesis</h1>
			</div>
		</div>
	);
};
