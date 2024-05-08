import {ContactsContainer} from "./components/ContactsContainer";
import {HeaderContainer} from "./components/HeaderContainer";
import {NavBar} from "./components/NavBar";
import {SliderContainer} from "./components/SliderContainer";

export default function Home() {
	return (
		<main>
			<NavBar />
			<div className="w-full flex flex-col justify-center bg-white text-black">
				<HeaderContainer />
				<SliderContainer />
				<ContactsContainer />
				<div className="max-w-screen-xl mx-auto flex flex-col items-center bg-white text-black"></div>
			</div>
		</main>
	);
}
