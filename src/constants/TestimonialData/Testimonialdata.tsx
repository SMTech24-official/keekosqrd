import profile from "@/assets/testimonials/pro.jpg"
import { StaticImageData } from 'next/image';
interface Testimonial {
  name: string;
  avatar: StaticImageData;
  rating: number;
  text: string;
}
export const testimonials: Testimonial[] = [
  {
    name: "Audrey Stevenson",
    avatar: profile,
    rating: 5,
    text: "Thank you for choosing for your recent trip. We're committed to providing an exceptional experience for every client, essential in helping us improve.",
  },
  {
    name: "Audrey Stevenson",
    avatar: profile,
    rating: 5,
    text: "Thank you for choosing for your recent trip. We're committed to providing an exceptional experience for every client, essential in helping us improve.",
  },
  {
    name: "Audrey Stevenson",
    avatar: profile,
    rating: 5,
    text: "Thank you for choosing for your recent trip. We're committed to providing an exceptional experience for every client, essential in helping us improve.",
  },
  {
    name: "Audrey Stevenson",
    avatar: profile,
    rating: 5,
    text: "Thank you for choosing for your recent trip. We're committed to providing an exceptional experience for every client, essential in helping us improve.",
  },
  {
    name: "Audrey Stevenson",
    avatar: profile,
    rating: 5,
    text: "Thank you for choosing for your recent trip. We're committed to providing an exceptional experience for every client, essential in helping us improve.",
  },
];
