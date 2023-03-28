import style from "./index.module.scss";
import home from "../../../public/homepagetext.png";
import starsFeatured from "../../../public/starsfeatured.png";
import unsplash from "../../../public/unsplash_IGfIGP5ONV0.png";
import Image from "next/image";
import { Button } from "../Button";

export default function Featured() {
  return (
    <>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.image}>
            <Image
              className={style.titleImage}
              src={home}
              alt="enjoy healthy life"
            />
            <Image className={style.stars} src={starsFeatured} alt="stars" />
          </div>
          <span className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </span>
          <div className={style.buttons}>
            <Button title={"Saiba mais"} />
            <Button outlined title={"Fazer um pedido"} />
          </div>
        </div>
        <div className={style.background}>
          <Image width={750} height={680} src={unsplash} alt="unsplash" />
        </div>
      </div>
    </>
  );
}
