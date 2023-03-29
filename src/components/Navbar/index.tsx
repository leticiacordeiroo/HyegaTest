import style from "./index.module.scss";
import logo from "../../../public/logo.png";
import user from "../../../public/user.png";
import search from "../../../public/search.png";
import { Link, animateScroll as scroll } from "react-scroll";
import Image from "next/image";

export default function Navbar() {
  return (
    <>
      <nav>
        <div className={style.container}>
          <div className={style.navbarContainer}>
            <div className={style.navLogo}>
              <Image src={logo} alt="logo" />
            </div>
            <ul className={style.navMenu}>
              <li className={style.navItem}>
                <a>Home</a>
              </li>
              <li className={style.navItem}>
                <Link
                  to="about-us"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Sobre
                </Link>
              </li>
              <li className={style.navItem}>
                <Link
                  to="blog"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Blog
                </Link>
              </li>
              <li className={style.navItem}>
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Contato
                </Link>
              </li>
            </ul>

            <div className={style.others}>
              <Image src={user} alt="user" />
              <Image src={search} alt="search" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
