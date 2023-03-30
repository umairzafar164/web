import { FaAccusoft } from "react-icons/fa";
import communication from "../assets/images/communication.svg";
import experience from "../assets/images/experience.svg";

function DrivePartnerships() {
  return (
    <section
      id="drive-partnerships-section"
      className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-700"
    >
      <div className="items-center max-w-screen-xl px-4 py-20 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6">
        <div className="col-span-2 mb-8">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl dark:text-white">
            We Build Partnerships!
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Our clients are our partners. Whether you have just set out to build
            your next startup or are an industry veteran, you face unique
            challenges - and each challenge calls for a unique combination of
            skills.
          </p>
        </div>
        <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
          <div>
            <img className="h-56 pb-4" src={communication} />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              Strong and Transparent Communication
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Building Trust through Clear Communication
            </p>
          </div>
          <div>
            <img className="h-56 pb-4" src={experience} />
            <h3 className="mb-2 text-2xl font-bold dark:text-white">
              Experience beyond measure, maturity beyond years
            </h3>
            <p className="font-light text-gray-500 dark:text-gray-400">
              Your Engineering Needs, Our Experienced Hands
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DrivePartnerships;
