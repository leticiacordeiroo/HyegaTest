import { data } from "../../utils/dataMember";
import style from "./index.module.scss";
import Image from "next/image";

export default function FoodMember() {
  return (
    <div className={style.container} id="team">
      <div className={style.title}>
        <>
          <h1>Team Member</h1>
          <span className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </span>
        </>
      </div>
      <div className={style.card}>
        {data.map((element, index) => (
          <div className={style.imageWrapper} key={index}>
            <div className={style.image}>
              <Image src={element.image} alt="member" />
            </div>
            <div className={style.textTitle}>{element.title}</div>
            <div className={style.textDescription}>{element.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
