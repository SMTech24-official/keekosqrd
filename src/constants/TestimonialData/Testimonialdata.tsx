import profile from "@/assets/testimonials/pro.jpg";
import { StaticImageData } from "next/image";
interface Testimonial {
  avatar: StaticImageData;
  rating: number;
  text: string;
}
export const testimonials: Testimonial[] = [
  {
    avatar: profile,
    rating: 5,
    text: "Highly recommended to others. Will defo come back for more items. Everything came in great condition and the communication was perfect.",
  },
  {
    avatar: profile,
    rating: 5,
    text: "they're perfect. will definitely come back to you, great service & communication 🙏 Thank you again.",
  },
  {
    avatar: profile,
    rating: 5,
    text: "😍😍😍😍you sourced my babies I'm in love. Can u bring them tomorrow? Quickest service I've ever recieved",
  },
  {
    avatar: profile,
    rating: 5,
    text: "Great seller, quick and easy. Got them next day after shipped 🤝",
  },
  {
    avatar: profile,
    rating: 5,
    text: "Items came mate, super fast delivery and all items as described. Any chance you have any more?",
  },
  {
    avatar: profile,
    rating: 5,
    text: "Thank you so much !! Sorry for the run around will defo be recommending, know a couple others that want some",
  },
  {
    avatar: profile,
    rating: 5,
    text: `Just wanted to say how quick
and easy your service was. Can't
believe how quick you sourced
them! They fit me so good and
look really nice. Thank you, will
be telling others and buying more
in the future!`,
  },
];
