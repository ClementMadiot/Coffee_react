import { Coffee1, Coffee3, AppStore, PlayStore} from "../assets/index";

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
