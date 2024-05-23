import Image from "next/image";
import navbar_logo from "../../../public/images/navbar_logo.png";

export const NavBar = () => {
	return (
		<>
			{/* <div className="h-10 flex justify-center items-center text-black text-[17px] bg-[#FF90E8]">
				Pasinaudokite
				<a href="#" className="underline mx-1">
					skaičiuokle
				</a>
				ir sužinokite savo projekto kainą.
			</div> */}
			<nav className="w-full bg-white border-y-[3px] border-black">
				<div className="max-w-screen-2xl mx-auto flex justify-between items-center text-lg text-black font-medium py-6">
					<div className="flex gap-20">
						<div>Atsiliepimai</div>
						<div>Projektai</div>
						<div>Mūsų klientai</div>
					</div>
					<Image src={navbar_logo} alt="Logo" width={151} height={43} />
					<div className="flex gap-20">
						<div>Kontaktai</div>
						<div>Blogas</div>
						<div>Klausimynas</div>
					</div>
				</div>
			</nav>
		</>
	);
};
