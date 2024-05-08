export const SubscribeContainer = () => {
	return (
		<div className="w-full flex flex-col justify-center items-center bg-yellow-500 p-16">
			<h1 className="text-4xl p-8">Užsiprenumeruokit ELNIS naujienlaiškį</h1>
			<div className="relative">
				<input placeholder="Įveskite savo el pašto adresą" className="w-96 h-16" />
				<button className="absolute top-0 right-[-80px] bg-orange-500 text-white border border-black rounded-full p-4">
					{" "}
					Prenumeruoti{" "}
				</button>
			</div>
			<p className="w-1/2 text-center py-8 ">
				Užsiprenumeruokite elnis.lt naujienlaiškį ir gaukite informaciją apie naujausius straipsnius, naujas
				darbo pozicijas ir kt. aktualią informaciją.
			</p>
		</div>
	);
};
