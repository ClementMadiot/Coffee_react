import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full pt-10 text-white z-20">
      <article className="container">
        <div className="flex justify-between items-center">
          {/* logo section  */}
          <h1 className="text-2xl font-semibold text-primary uppercase">
            Coders <span className="text-white">Coffee.</span>
          </h1>
          {/* Hamburger  */}
          <div>
            <GiHamburgerMenu className="text-3xl cursor-pointer"/>
          </div>
        </div>
      </article>
    </nav>
  );
};

export default Navbar;
