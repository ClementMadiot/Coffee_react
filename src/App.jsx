import { Footer, Hero, Services, BannerApp, FormProduct } from "./components";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <FormProduct/>
      <BannerApp/>
      <Footer />
    </div>
  );
};

export default App;
