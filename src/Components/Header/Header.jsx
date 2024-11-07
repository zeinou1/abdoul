import { useRef, useState, useEffect } from "react";
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
    display: "Competences",
  },
  

];

const Header = () => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const [navActive, setNavActive] = useState(window.location.pathname);

  useEffect(() => {
    const activeLink = () => {
      setNavActive(window.location.pathname);
    };
    window.addEventListener("popstate", activeLink);

    return () => window.removeEventListener("popstate", activeLink);
  }, []);

  const displayMenu = () => {
    menuRef.current.classList.toggle("show__menu");
  };
//!redirection
  // sticky header on scroll script
  window.addEventListener("scroll", function () {
    const header = headerRef.current;
    header.classList.toggle("menu__sticky", window.scrollY > 0);
  });


  return (
    <header className="mx-auto pt-[30px] shadow-lg pb-1" ref={headerRef}>
      <div className="container ">
        <nav className="lg:hidden ">
          <div className="nav__wrapper">
            <div className="navigation  lg:block " ref={menuRef} onClick={displayMenu}>
              <ul className="header__menu relative lg:flex lg:items-center lg:justify-center lg:gap-10">
                <span className="mobile__menu  cursor-pointer absolute top-3 right-3 z-50 lg:hidden">
                  <i className="ri-menu-fold-line text-3xl text-red-600"></i>
                </span>
                {navLinks.map((item) => (
                  <li key={item.display}>
                    <Link
                  
                      to={item.path}
                      className={`md:text-2xl text-sm text-[#F97317] ${
                        navActive === item.path ? "active" : ""
                      }`}
                    >
                      {item.display}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span
                className="mobile__menu lg:hidden cursor-pointer z-50"
                onClick={displayMenu}
              >
                <i className="ri-menu-line text-3xl "></i>
              </span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};
export default Header;
