import send from "../assets/Send.svg";
import shield from "../assets/Shield.svg";
import star from "../assets/Star.svg";

type NavLink = {
    id: string;
    title: string;
};

export type Feature = {
    id: string;
    icon: string;
    title: string;
    content: string;
}

type Stat = {
    id: string;
    title: string;
    value: string;
}

export const navLinks: NavLink[] = [
    {
      id: "home",
      title: "Home",
    },
    {
      id: "features",
      title: "Features",
    },
    {
      id: "product",
      title: "Product",
    },
    {
      id: "clients",
      title: "Clients",
    },
];

export const features: Feature[] = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content: "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content: "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content: "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const stats: Stat[] = [
  {
    id: "stats-1",
    title: "User Active",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Transaction",
    value: "$230M+",
  },
];
