import Image from "next/image";

export const NavBar = () => {
	return (
		<>
			<div className="h-8 flex justify-center bg-pink-500 text-black ">
				Pasinaudokite skaičiuokle ir sužinokite savo projekto kainą.
			</div>
			<nav className="w-full bg-white border-y-4 border-black">
				<div className="max-w-screen-xl mx-auto h-[72px] flex justify-between items-center">
					<div className="flex gap-10 text-black">
						<div>Atsiliepimai</div>
						<div>Projektai</div>
						<div>Mūsų klientai</div>
					</div>
					<Image src="/images/logo.png" alt="Logo" width={187} height={40} priority />
					<div className="flex gap-10 text-black">
						<div>Kontaktai</div>
						<div>Blogas</div>
						<div>Klausimynas</div>
					</div>
				</div>
			</nav>
		</>
	);
};
