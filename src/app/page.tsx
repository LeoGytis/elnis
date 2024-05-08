import {ContactsContainer} from "./components/ContactsContainer";
import {HeaderContainer} from "./components/HeaderContainer";
import {InfoContainer} from "./components/InfoContainer";
import {NavBar} from "./components/NavBar";
import {SliderContainer} from "./components/SliderContainer";
import {SubscribeContainer} from "./components/SubscribeContainer";

export default function Home() {
	return (
		<main>
			<NavBar />
			<div className="w-full flex flex-col justify-center bg-white text-black">
				<HeaderContainer />
				<SliderContainer />
				<ContactsContainer />
				<InfoContainer />
				<SubscribeContainer />
			</div>
		</main>
	);
}
