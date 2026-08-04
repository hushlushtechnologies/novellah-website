export interface Testimonial {
  id: string;
  name: string;
  rating: number; // out of 5, supports .5
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "nimal-perera-1",
    name: "Nimal Perera",
    rating: 5,
    quote:
      "I've struggled with acne for years, and after just a few sessions, I noticed a huge improvement. The doctors were professional, and the staff made me feel comfortable throughout my treatment. I couldn't be happier with the results.",
    avatar: "/images/testimonials/tsicon.svg",
  },
  {
    id: "kasun-fernando-1",
    name: "Kasun Fernando",
    rating: 5,
    quote:
      "The Hydra Facial completely changed my skin. It's brighter, smoother, and so much more even. The whole team walked me through every step and made sure I felt relaxed the entire time. I'm already booked in for my next session.",
    avatar: "/images/testimonials/tsicon.svg",
  },
  {
    id: "dinesh-jayasinghe-1",
    name: "Dinesh Jayasinghe",
    rating: 5,
    quote:
      "I was nervous about trying Botox for the first time, but the specialists here made the process easy to understand and completely painless. The results look so natural—exactly the refreshed look I was hoping for.",
    avatar: "/images/testimonials/tsicon.svg",
  },
  {
    id: "chamara-silva-1",
    name: "Chamara Silva",
    rating: 5,
    quote:
      "After my microneedling sessions, my acne scars have faded so much more than I expected. The clinic is spotless, the staff is warm and welcoming, and I always leave feeling well taken care of.",
    avatar: "/images/testimonials/tsicon.svg",
  },
];