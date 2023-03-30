import hero from "../assets/images/hero.png";
import { TrailWrapper } from "./react-sprint-wrappers/Trail";
function Hero() {
  return (
    <section
      id="hero-section"
      className="bg-white dark:bg-gray-900 min-h-[70vh] flex items-center border-b border-gray-100 dark:border-gray-700"
    >
      <div className="grid max-w-screen-xl px-4 pt-20 pb-20 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
        <div className="mr-auto place-self-center lg:col-span-7">
          <TrailWrapper open={true}>
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Build Outside the Box
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              HexaBeam engineering teams help you build. Our people auxiliate
              your business, bringing with them a fresh, out-of-the-box
              perspective, an ownership mindset, and a unique engineering
              experience of technology architecture with startups, unicorns, and
              industry leaders.
            </p>
          </TrailWrapper>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <TrailWrapper height={400} open={true}>
            <img className="h-full" src={hero} alt="hero image" />
          </TrailWrapper>
        </div>
      </div>
    </section>
  );
}

export default Hero;
