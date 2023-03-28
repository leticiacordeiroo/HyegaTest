import style from "./index.module.scss";
import logo from "../../../public/logo.png";
import user from "../../../public/user.png";
import search from "../../../public/search.png";
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
                <a>Sobre</a>
              </li>
              <li className={style.navItem}>
                <a>Blog</a>
              </li>
              <li className={style.navItem}>
                <a>Contato</a>
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
