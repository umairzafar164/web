import feature1 from "../assets/images/feature1.png";
import { FaCheckCircle } from "react-icons/fa";

function DriveSoftware() {
  return (
    <section
      id="drive-software-section"
      className="bg-gray-50 dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700"
    >
      <div className="max-w-screen-xl px-4 py-20 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
        <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
          <div className="text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              We Drive Software!
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              We become your long-term technology development partners so you
              can focus on your core strengths. Get in touch with us today to
              get a no-obligation consultation.
            </p>
            <ul
              role="list"
              className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
            >
              <li className="flex space-x-3">
                <FaCheckCircle className="text-green-500" />
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Customized Software Development
                </span>
              </li>
              <li className="flex space-x-3">
                <FaCheckCircle className="text-green-500" />
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Frontend Web Designing and Development
                </span>
              </li>
              <li className="flex space-x-3">
                <FaCheckCircle className="text-green-500" />
                <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                  Native and Hybrid Mobile Application Design and Development
                </span>
              </li>
            </ul>
            <p className="mb-8 font-light lg:text-xl">
              Our capable teams of analysts, architects, and designers will take
              charge of all software development stages and work with you from
              requirements analysis up to final software delivery, deployment,
              and beyond.
            </p>
          </div>
          <img
            className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
            src={feature1}
            alt="dashboard feature image"
          />
        </div>
      </div>
    </section>
  );
}

export default DriveSoftware;
