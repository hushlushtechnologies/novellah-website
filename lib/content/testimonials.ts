export interface Testimonial {
  id: string;
  name: string;
  rating: number; // out of 5, supports .5
  quote: string;
  avatar: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "sarah-m-1",
    name: "Sarah M.",
    rating: 4.5,
    quote:
      "I've struggled with acne for years, and after just a few sessions, I noticed a huge improvement. The doctors were professional, and the staff made me feel comfortable throughout my treatment. I couldn't be happier with the results.",
    avatar: "/images/testimonials/sarah-m.svg",
  },
  {
    id: "james-r-2",
    name: "James R.",
    rating: 5,
    quote:
      "The Hydra Facial exceeded my expectations. My skin felt refreshed, smooth, and glowing immediately after the treatment. The team was welcoming and highly skilled.",
    avatar: "/images/testimonials/sarah-m.svg",
  },
  {
    id: "emily-k-3",
    name: "Emily K.",
    rating: 4.8,
    quote:
      "I had laser hair removal sessions here, and the experience was fantastic. The procedure was comfortable, and the results have been amazing. Highly recommended!",
    avatar: "/images/testimonials/sarah-m.svg",
  },
  {
    id: "michael-t-4",
    name: "Michael T.",
    rating: 5,
    quote:
      "From consultation to follow-up, everything was handled professionally. The staff explained every step clearly, and I'm extremely satisfied with the outcome.",
    avatar: "/images/testimonials/sarah-m.svg",
  },
  {
    id: "olivia-h-5",
    name: "Olivia H.",
    rating: 4.7,
    quote:
      "Novellah Restyle truly transformed my skincare journey. The personalized treatment plan and friendly atmosphere made every visit enjoyable. I will definitely return.",
    avatar: "/images/testimonials/sarah-m.svg",
  },
];