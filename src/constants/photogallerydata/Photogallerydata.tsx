import ph1 from "@/assets/ph1.svg"
import ph2 from "@/assets/ph2.svg"
import ph3 from "@/assets/ph3.svg"
import { StaticImageData } from "next/image"

// Define the type for the gallery items
interface GalleryItem {
  name: string;
  avatar: StaticImageData;
  sneaker: string;
}

export const galleryData: GalleryItem[] = [
  {
    name: "Orlando Diggs",
    avatar: ph1, 
    sneaker: "Nike Air Jordans",
  },
  {
    name: "Orlando Diggs",
    avatar: ph2, 
    sneaker: "Nike Air Jordans",
  },
  {
    name: "James",
    avatar: ph3, 
    sneaker: "Nike Air Jordans",
  },
  // Add more data as required
  {
    name: "Orlando Diggs",
    avatar: ph1, 
    sneaker: "Nike Air Jordans",
  },
  {
    name: "Orlando Diggs",
    avatar: ph2, 
    sneaker: "Nike Air Jordans",
  },
  {
    name: "James",
    avatar: ph3, 
    sneaker: "Nike Air Jordans",
  },
  // Add more data as required
];