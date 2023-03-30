import logoWithText from "../assets/images/logo-with-text.svg";

function Logo() {
  return (
    <div>
      <img src={logoWithText} className="h-10" alt="HexaBeam Logo" />
      <span className="self-center text-sm whitespace-nowrap text-gray-700 font-semibold dark:text-white"></span>
    </div>
  );
}

export default Logo;
