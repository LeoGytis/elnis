"use client";
import Image from "next/image";
import Slider from "react-slick";
import deer from "../../../public/deers/deer.jpg";
import deer2 from "../../../public/deers/deer2.jpg";
import deer3 from "../../../public/deers/deer3.jpg";
import deer4 from "../../../public/deers/deer4.jpg";
import deer5 from "../../../public/deers/deer5.jpg";
import deer6 from "../../../public/deers/deer6.jpg";
import deer7 from "../../../public/deers/deer7.jpg";
import deer8 from "../../../public/deers/deer8.jpg";

export default function SlideShow() {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
	};

	const images = [deer, deer2, deer3, deer4, deer5, deer6, deer7, deer8];

	return (
		<Slider {...settings}>
			{images.map((image, index) => (
				<div key={index}>
					<Image src={image} alt={`Deer ${index + 1}`} width={200} height={200} />
				</div>
			))}
		</Slider>
	);
}
