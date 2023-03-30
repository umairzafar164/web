function Consultation() {
  return (
    <section
      id="consultation-section"
      className="bg-gray-50 dark:bg-gray-800 min-h-[70vh] flex items-center border-b border-gray-100 dark:border-gray-700"
    >
      <div className="max-w-screen-xl px-4 py-20 mx-auto lg:py-16 lg:px-6">
        <div className="max-w-screen-sm mx-auto text-center">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            No-obligation Consultation
          </h2>
          <p className="mb-6 font-light text-gray-500 dark:text-gray-400 md:text-lg">
            We offer a no-obligation consultation session to understand the
            problem you are working on and to chart out the various ways that
            HexaBeam can be of assistance. Please use the Contact Form or email
            us at{" "}
            <span className="text-green-500 font-semibold">
              connect@HexaBeam.com
            </span>{" "}
            to initiate a discussion on your engineering needs.
          </p>
          <a
            href="#"
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
          >
            Get in touch!
          </a>
        </div>
      </div>
    </section>
  );
}

export default Consultation;
