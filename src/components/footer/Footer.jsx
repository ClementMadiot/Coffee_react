import { motion } from "framer-motion";
import {
  FooterCompanyDetails,
  FooterFollow,
  FooterLinks,
} from "../../constant";
import { CreditCard } from "../../assets";
import { fadeIn } from "../../utils/motion";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-primary to-primaryDark pt-12 pb-8 text-white">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* company details  */}
          <motion.article
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold uppercase">Coders Cafe</h2>
            <p className="text-sm max-w-[300px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
              quidem vero consequuntur corporis, sequi libero rerum!
            </p>
            <div>
              {FooterCompanyDetails.map(({ icon, paragraph }, index) => (
                <p key={index} className="flex items-center gap-2 py-1">
                  {icon}
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.article>
          {/* footer links  */}
          <motion.article
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView="show"
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Quick Links</h2>
            <div className="grid grid-cols-2 gap-3">
              <ul className="space-y-2">
                {FooterLinks.map(({ id, title, link }) => (
                  <li key={id}>
                    <a href={link}>{title}</a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2">
                {FooterLinks.map(({ id, title, link }) => (
                  <li key={id}>
                    <a href={link}>{title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </motion.article>
          {/* social links  */}
          <motion.article
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Follow Us</h2>
            <div className="flex items-center gap-4">
              {FooterFollow.map(({ icon, link }, index) => (
                <a
                  className="text-2xl hover:scale-105 duration-300"
                  key={index}
                  href={link}
                >
                  {icon}
                </a>
              ))}
            </div>
            <div>
              <h3 className="text-xl font-semibold">Payment Methods</h3>
              <img src={CreditCard} alt="Credit cards" className="w-[80%]" />
            </div>
          </motion.article>
        </div>
        {/* copyrigth section  */}
        <p className="text-white text-center mt-8 pt-8 border-t-2 font-semibold">
          Copyright &copy; 2024 Company Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
