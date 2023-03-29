import { useState, useRef, MouseEventHandler } from "react";
import { data } from "../../utils/data";
import prev from "../../../public/prev.png";
import next from "../../../public/next.png";
import style from "./index.module.scss";
import Image from "next/image";

export default function Carousel() {
  const carousel = useRef<HTMLInputElement | null>(null);

  const handlePrev: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft -= carousel.current.offsetWidth;
    }
  };

  const handleNext: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (carousel.current) {
      carousel.current.scrollLeft += carousel.current.offsetWidth;
    }
  };

  return (
    <>
      <div className={style.content}>
        <h1>Food Category</h1>
        <span className={style.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed
          pharetra dictum neque massa congue
        </span>
        <div className={style.carousel}>{/*carousel*/}</div>
      </div>
      <div className={style.container}>
        <button className={style.cardButtonPrev} onClick={handlePrev}>
          <Image src={prev} alt="scroll to prev" />
        </button>
        <div className={style.slider} ref={carousel}>
          {data.map((element, index) => (
            <div className={style.imageWrapper} key={index}>
              <div className={style.image}>
                <Image src={element.image} alt="cake" />
              </div>
              <div className={style.textTitle}>{element.title}</div>
              <div className={style.textDescription}>{element.description}</div>
            </div>
          ))}
        </div>
        <button className={style.cardButtonNext} onClick={handleNext}>
          <Image src={next} alt="scroll to next" />
        </button>
      </div>
    </>
  );
}
