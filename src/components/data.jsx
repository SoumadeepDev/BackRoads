import tour1 from "../images/tour-1.jpeg";
import tour6 from "../images/tour-6.jpeg";
import tour7 from "../images/tour-7.jpg";
import tour8 from "../images/tour-8.jpeg";
import tour9 from "../images/tour-9.jpeg";
import tour10 from "../images/tour-10.jpeg";

export const pageLinks = [
  {
    id: 1,
    href: "#home",
    text: "Home",
  },
  {
    id: 2,
    href: "#about",
    text: "About",
  },
  {
    id: 3,
    href: "#services",
    text: "Services",
  },
  {
    id: 4,
    href: "#tours",
    text: "Tours",
  },
];
export const navSocialIcons = [
  {
    id: 1,
    href: "https://www.facebook.com",
    className: "fab fa-facebook",
  },
  {
    id: 2,
    href: "https://www.twitter.com",
    className: "fab fa-twitter",
  },
  {
    id: 3,
    href: "https://www.instagram.com",
    className: "fab fa-squarespace",
  },
];
export const ServiceData = [
  {
    id: 1,
    iconClass: "fas fa-wallet fa-fw",
    title: "saving money",
    para: "Budget-friendly adventures, unforgettable experiences!",
  },
  {
    id: 2,
    iconClass: "fas fa-tree fa-fw",
    title: "endless hiking",
    para: "Explore nature's wonders without limits!",
  },
  {
    id: 3,
    iconClass: "fas fa-socks fa-fw",
    title: "amazing comfort",
    para: "Experience ultimate luxury and comfort!",
  },
];
export const FeatuedTours = [
  {
    id: 1,
    tourImage: tour1,
    tourDate: "august 26th, 2023",
    tourTitle: "Tibet Adventure",
    tourPara:
      "Embark on a breathtaking 6-day Tibet adventure! Explore majestic landscapes, ancient monasteries, and immerse in Tibetan culture. Limited spots available. Book your unforgettable journey today!",
    tourfooterClass: "fas fa-map",
    tourCountry: "China",
    tourDays: "6 days",
    tourPackage: "From $1999",
    completed: true,
  },
  {
    id: 2,
    tourImage: tour10,
    tourDate: "December 05th, 2023",
    tourTitle: "Hongkong Explore",
    tourPara:
      "Experience the vibrant energy of Hong Kong on a 7-day adventure! From bustling markets to stunning skyline views, indulge in culture and cuisine. Limited availability. Reserve your spot now!",
    tourfooterClass: "fas fa-map",
    tourCountry: "China",
    tourDays: "7 days",
    tourPackage: "From $3999",
    completed: false,
  },
  {
    id: 3,
    tourImage: tour7,
    tourDate: "January 1st, 2024",
    tourTitle: "Switzerland Trip",
    tourPara:
      "10-day Swiss adventure amidst stunning nature and lush greenery. Experience breathtaking landscapes and luxury accommodations. Book now for a rejuvenating getaway!",
    tourfooterClass: "fas fa-map",
    tourCountry: "Switzerland",
    tourDays: "10 days",
    tourPackage: "From $9999",
    completed: false,
  },
  {
    id: 4,
    tourImage: tour8,
    tourDate: "February 14th, 2024",
    tourTitle: "Thailand Adventure",
    tourPara:
      "Discover Thailand in 5 days! Dive into vibrant culture, pristine beaches, and exotic cuisine. Explore bustling markets and relax in luxury resorts. Limited slots available. Reserve your Thai escape today!",
    tourfooterClass: "fas fa-map",
    tourCountry: "Thailand",
    tourDays: "5 days",
    tourPackage: "From $1199",
    completed: false,
  },
  {
    id: 5,
    tourImage: tour6,
    tourDate: "March 17th, 2024",
    tourTitle: "Explore Diverse India",
    tourPara:
      "Experience the wonders of India in 7 days! Visit iconic landmarks like the Taj Mahal, explore ancient forts, immerse in village life, and savor diverse cuisines.Limited slots.Book your unforgettable Indian odyssey now!",
    tourfooterClass: "fas fa-map",
    tourCountry: "India",
    tourDays: "7 days",
    tourPackage: "From $999",
    completed: false,
  },
  {
    id: 6,
    tourImage: tour9,
    tourDate: "April 2nd, 2024",
    tourTitle: "Mainland China",
    tourPara:
      "Embark on a 10-day modern and ancient adventure through China. Explore bustling cities, iconic skyscrapers, ancient temples, and breathtaking landscapes.Book your unimaginable China trip now!",
    tourfooterClass: "fas fa-map",
    tourCountry: "China",
    tourDays: "9 days",
    tourPackage: "From $2599",
    completed: false,
  },
];
