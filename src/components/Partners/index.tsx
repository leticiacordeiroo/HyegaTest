import style from "./index.module.scss";
import Image from "next/image";
import restaurant from "../../../public/restaurant.png";
import bakery from "../../../public/bakery.png";
import forkespoon from "../../../public/forkespoon.png";
import wolfcoffee from "../../../public/wolfcoffee.png";
import bistro from "../../../public/bistro.png";
import bakerysl from "../../../public/bakerysl.png";
import partnersEclients from "../../../public/partnersEclients.png";

export default function Partners() {
  return (
    <>
      <div className={style.container}>
        <div className={style.title}>
          <Image src={partnersEclients} alt="partners e clients" />
          <p>We work with the best pepole</p>
        </div>
        <div  className={style.partners}> 
          <Image src={restaurant} alt="restaurant" />
          <Image src={bakery} alt="bakery" />
          <Image src={forkespoon} alt="forkespoon" />
          <Image src={wolfcoffee} alt="wolfcoffee" />
          <Image src={bistro} alt="bistro" />
          <Image src={bakerysl} alt="bakerysl" />
        </div>
      </div>
    </>
  );
}
