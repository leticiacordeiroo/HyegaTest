import { Button } from "../Button";
import { data } from "../../utils/dataMenu";
import style from "./index.module.scss";

export default function FoodMenu() {
  return (
    <>
      <div className={style.container} id="menu">
        <h1>Our Food Menu</h1>
        <span className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </span>
        <div className={style.divisor}></div>
        <div className={style.cardList}>
          <div className={style.listRight}>
            {data.map((element, index) => (
              <div className={style.list} key={index}>
                <div className={style.listText}>
                  <div className={style.text}>
                    <p>{element.title}</p>
                  </div>
                  <div className={style.description}>
                    <p>{element.description}</p>
                  </div>
                </div>
                <div className={style.price}>
                  <p>{element.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={style.listLeft}>
            {data.map((element, index) => (
              <div className={style.list} key={index}>
                <div className={style.listText}>
                  <div className={style.text}>
                    <p>{element.title}</p>
                  </div>
                  <div className={style.description}>
                    <p>{element.description}</p>
                  </div>
                </div>
                <div className={style.price}>
                  <p>{element.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.button}>
        <Button outlined title={"View Menu"} />
      </div>
    </>
  );
}
