import FooterColumn from "./FooterColumn";
import Logo from "./Logo";

function Footer() {
  return (
    <footer id="footer-section" className="bg-white dark:bg-gray-800">
      <div className="max-w-screen-xl p-4 py-20 mx-auto lg:py-16 md:p-8 lg:p-10">
        <div className="flex items-start justify-between flex-wrap">
          <div className="md:w-full lg:w-4/5">
            <Logo />
            <p className="my-6 pr-12 font-light text-gray-500 dark:text-gray-400 md:text-lg">
              HexaBeam engineering teams help you build. Our people auxiliate
              your business, bringing with them a fresh, out-of-the-box
              perspective, an ownership mindset, and a unique engineering
              experience of technology architecture with startups, unicorns, and
              industry leaders.
            </p>
          </div>
          <div className="md:w-full lg:w-1/5">
            <FooterColumn />
          </div>
        </div>
        <div className="text-center mt-10">
          <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
            © 2021-2022 HexaBeam™ | All Rights Reserved
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
