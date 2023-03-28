import { data } from "../../utils/dataBlog";
import arrowRight from "../../../public/arrowRight.png";
import style from "./index.module.scss";

import Image from "next/image";

export default function Blog() {
  return (
    <>
      <div className={style.container}>
        <h1>Latest news & Blog</h1>
        <span className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </span>
        <div className={style.cardList}>
          {data.map((element, index) => (
            <div className={style.card} key={index}>
              <div className={style.image}>
                <p>
                  <Image src={element.image} alt="food blog" />
                </p>
              </div>
              <div className={style.title}>
                <p>{element.title}</p>
              </div>
              <div className={style.textCard}>
                <p>{element.description}</p>
              </div>
              <div className={style.readMore}>
                <p>Read more</p>
                <p>
                  <Image src={arrowRight} alt="read more" />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
