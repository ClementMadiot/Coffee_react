import BlackCoffe from './coffee/black_coffee.jpg'
import ColdCoffee from './coffee/cold_coffee.jpg'
import LightCoffee from './coffee/light_coffee.jpg'
import BgImage from './images/bg-slate.png'
import CoffeeCover from './images/coffee-cover.jpg'
import BlackCoffee from './images/black.png'
import WorldMap from './images/world-map.png'
import AppStore from './website/app_store.png'
import CreditCard from './website/credit-cards.webp'
import PlayStore from './website/play_store.png'

export { BlackCoffe, ColdCoffee, LightCoffee ,BgImage, BlackCoffee, CoffeeCover, WorldMap, AppStore, CreditCard, PlayStore }

export const bgImageStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

export const BannerStyle = {
  backgroundImage: `url(${CoffeeCover})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  height: "100%",
  width: "100%"
}

