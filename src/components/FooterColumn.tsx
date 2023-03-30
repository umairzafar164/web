function FooterColumn() {
  const sections = {
    consultation: "consultation-section",
    drivePartnerships: "drive-partnerships-section",
    driveSoftware: "drive-software-section",
    footer: "footer-section",
    hero: "hero-section",
    projects: "projects-section",
    header: "header-section",
  };

  const goToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section!.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pb-10">
      <h3 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
        Quick Links
      </h3>
      <ul className="text-gray-500 dark:text-gray-400 text-sm">
        <li className="mb-4">
          <button
            onClick={() => goToSection(sections.projects)}
            type="button"
            className="hover:underline"
          >
            Our Work
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => goToSection(sections.driveSoftware)}
            type="button"
            className="hover:underline"
          >
            Our Specialities
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => goToSection(sections.drivePartnerships)}
            type="button"
            className="hover:underline"
          >
            Out Partnerships
          </button>
        </li>
        <li className="mb-4">
          <button
            onClick={() => goToSection(sections.consultation)}
            type="button"
            className="hover:underline"
          >
            Get in touch
          </button>
        </li>
      </ul>
    </div>
  );
}

export default FooterColumn;
