import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/apropos",
    display: "À propos",
  },
  {
    path: "/projects-1",
    display: "Projets",
  },
  {
    path: "/resume",
    display: "Compétences",
  },
  {
    path: "/blog",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [navActive, setNavActive] = useState(window.location.pathname);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const activeLink = () => {
      setNavActive(window.location.pathname);
    };
    window.addEventListener("popstate", activeLink);

    return () => window.removeEventListener("popstate", activeLink);
  }, []);

  const displayMenu = () => {
    menuRef.current.classList.toggle("show__menu");
    setIsMenuOpen(!isMenuOpen);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      displayMenu();
    }
  };

  //!redirection
  // sticky header on scroll script
  window.addEventListener("scroll", function () {
    const header = headerRef.current;
    header.classList.toggle("menu__sticky", window.scrollY > 0);
  });

  return (
    <header className="mx-auto pt-[30px] shadow-lg pb-1 relative " ref={headerRef}>
      <div className="container ">
        <nav className="lg:hidden " role="navigation" aria-label="Navigation principale">
          <div className="nav__wrapper">
            <div className="navigation  lg:block " ref={menuRef}>
              <ul className="header__menu relative lg:flex lg:items-center lg:justify-center lg:gap-10">
                <span
                  className="mobile__menu cursor-pointer absolute top-3 right-3 z-[110] lg:hidden focus:outline-none rounded"
                  onClick={displayMenu}
                  onKeyDown={handleKeyDown}
                  tabIndex={0}
                  role="button"
                  aria-label="Fermer le menu"
                  aria-expanded={isMenuOpen}
                >
                  <i className="ri-menu-fold-line text-3xl text-red-600"></i>
                </span>
                {navLinks.map((item) => (
                  <li key={item.display}>
                    <Link
                      to={item.path}
                      className={`md:text-2xl text-sm text-[#F97317] hover:text-white focus:text-white focus:outline-none rounded px-2 py-1 transition-all duration-300 ${
                        navActive === item.path ? "active" : ""
                      }`}
                      aria-current={navActive === item.path ? "page" : undefined}
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span
                className="mobile__menu lg:hidden cursor-pointer z-[110] focus:outline-none rounded relative"
                onClick={displayMenu}
                onKeyDown={handleKeyDown}
                tabIndex={0}
                role="button"
                aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={isMenuOpen}
                aria-controls="header-menu"
              >
                <i className="ri-menu-line text-3xl hover:text-primaryColor focus:text-primaryColor transition-colors duration-300"></i>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
