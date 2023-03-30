import Logo from "./Logo";
import { BsFillSunFill } from "react-icons/bs";
import { useEffect, useState } from "react";

function Topbar() {
  let defaultMode = "light";
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    defaultMode = "dark";
  } else {
    defaultMode = "light";
  }

  const [isDarkMode, setIsDarkMode] = useState(false); // comment this code 🔥🔥🔥
  // const [isDarkMode, setIsDarkMode] = useState( // uncomment this code 🔥🔥🔥
  //   defaultMode === "dark" ? true : false
  // );

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header id="header-section" className="fixed w-full z-20">
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex items-center justify-between max-w-screen-xl px-4 mx-auto py-5">
          <Logo />
          <div className="flex items-center lg:order-2">
            <button
              onClick={() => toggleDarkMode()}
              type="button"
              className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg p-3 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
            >
              <BsFillSunFill />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Topbar;
