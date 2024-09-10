import { Footer, Hero, Services, BannerApp } from "./components";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <BannerApp/>
      <Footer />
    </div>
  );
};

export default App;
