import style from "./index.module.scss";
import food1 from "../../../public/food1.png";
import food2 from "../../../public/food2.png";
import factory from "../../../public/factory.png";
import hamburger from "../../../public/hamburger.png";
import timer from "../../../public/timer.png";
import truck from "../../../public/truck.png";
import choose from "../../../public/choose.png";
import foodcook from "../../../public/foodcook.png";

import Image from "next/image";

export default function Choose() {
  return (
    <>
      <div className={style.container}>
        <div className={style.image}>
          <Image className={style.image1} src={foodcook} alt="food" />
        </div>
        <div className={style.whyChoose}>
          <div className={style.title}>
            <p>
              <Image src={choose} alt="choose" />
            </p>
          </div>
          <h1 className={style.text}>Why We are the best?</h1>
          <span className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </span>
          <span className={style.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
            pharetra dictum neque massa congue
          </span>
          <div className={style.icons}>
            <div className={style.images}>
              <div className={style.card}>
                <Image src={truck} alt="truck" />
                <span>Fast Delivery</span>
              </div>
              <div className={style.card}>
                <Image src={timer} alt="timer" />
                <span>24/7 services</span>
              </div>
            </div>
            <div className={style.images}>
              <div className={style.card}>
                <Image src={hamburger} alt="hamburger" />
                <span>Fresh food</span>
              </div>
              <div className={style.card}>
                <Image src={factory} alt="factory" />
                <span>Quality maintain</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
