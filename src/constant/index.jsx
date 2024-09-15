import { FaMapLocation } from "react-icons/fa6";
import { Coffee1, Coffee3, AppStore, PlayStore} from "../assets/index";
import { FaFacebookF, FaGoogle, FaInstagram, FaPhone, FaTelegram } from "react-icons/fa";

export const servicesData = [
  {
    id: 1,
    image: Coffee1,
    title: "Black Coffee",
    subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    image: Coffee3,
    title: "Hot Coffee",
    subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    image: Coffee1,
    title: "Cold Coffee",
    subtitle: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export const inputDatas = [
  {
    id: 1,
    type: "text",
    placeholder: "Name",
    width: "lg:w-[150px]",
  },
  {
    id: 2,
    type: "email",
    placeholder: "Email",
    width: "",
  },
  {
    id: 3,
    type: "text",
    placeholder: "Country",
    width: "",
  },
  {
    id: 4,
    type: "text",
    placeholder: "Zipcode",
    width: "lg:w-[150px]",
  },
];

export const BannerLink = [
  {
    img: AppStore,
    link: "#",
  },
  {
    img: PlayStore,
    link: "#",
  },
];

export const FooterCompanyDetails = [
  {
    icon: <FaPhone/>,
    paragraph: "+1 (123) 456-7890",
  },
  {
    icon: <FaMapLocation/>,
    paragraph: "Nioda, Uttar Pradesh",
  },
]

export const FooterLinks = [
  {
    id: 1,
    title: "Home",
    link: "#",
  },
  {
    id: 2,
    title: "About",
    link: "#",
  },
  {
    id: 3,
    title: "Contact us",
    link: "#",
  },
  {
    id: 4,
    title: "Search Fruits",
    link: "#",
  },
  {
    id: 5,
    title: "Privacy Policy",
    link: "#",
  },
];

export const FooterFollow = [
  {
    icon: <FaFacebookF />,
    link: "#",
  },
  {
    icon: <FaInstagram />,
    link: "#",
  },
  {
    icon: <FaTelegram/>,
    link: "#",
  },
  {
    icon: <FaGoogle />,
    link: "#",
  },
]