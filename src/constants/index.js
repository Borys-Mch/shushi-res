import {
  FacebookRounded,
  LinkedIn,
  Twitter,
  YouTube,
  Instagram,
} from "@mui/icons-material";
import amexp from "../../public/images/amexp.svg";
import apple from "../../public/images/apple.svg";
import google from "../../public/images/google.svg";
import mcard from "../../public/images/mcard.svg";
import paypal from "../../public/images/paypal.svg";
import visa from "../../public/images/visa.svg";

export const navItems = [
  { title: "Home", url: "/" },
  { title: "About Us", url: "#about" },
  { title: "Popular", url: "#popular" },
  { title: "Recently", url: "#recently" },
];

export const socialIcons = [
  { icon: FacebookRounded, link: "https://www.facebook.com/" },
  { icon: LinkedIn, link: "https://www.linkedin.com/" },
  { icon: Twitter, link: "https://www.facebook.com/" },
  { icon: YouTube, link: "https://www.youtube.com/" },
  { icon: Instagram, link: "https://www.instagram.com/" },
];

export const bankImg = [visa, mcard, amexp, paypal, apple, google];

export const mainMenu = ["About", "Menus", "Offers", "Events"];

export const info = ["Contact", "Orders & Returns", "Videos", "reservation"];
