import Home1 from "../../assets/images/carousel/image 1.png";
import Home2 from "../../assets/images/carousel/image 2.png";
import Home3 from "../../assets/images/carousel/image 3.png";
import { ICarousel } from "./Carousel.interface";

export const homeSlides: ICarousel[] = [
  {
    id: 0,
    title: "Specials & Events",
    image: Home1,
  },
  {
    id: 1,
    title: "Now on Screens",
    image: Home2,
  },
  {
    id: 2,
    title: "Coming soon",
    image: Home3,
  },
];
