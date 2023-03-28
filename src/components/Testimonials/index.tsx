import style from "./index.module.scss";
import stars from "../../../public/stars.png";
import people from "../../../public/people.png";
import testimonials from "../../../public/testimonials.png";
import testimonialsfood from "../../../public/testimonialsfood.png";
import quotes from "../../../public/quotes.png";

import Image from "next/image";

export default function Testimonials() {
  return (
    <>
      <div className={style.container}>
        <div className={style.quotes}>
          <div className={style.testimonials}>
            <p>
              <Image src={testimonials} alt="testimonials" />
            </p>

            <h1 className={style.text}>Customer Review</h1>
            <p>
              <Image src={quotes} alt="quotes" />
            </p>
            <span className={style.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
              eu velit in consequat.
            </span>
            <div className={style.cardTestimonials}>
              <div className={style.images}>
                <div className={style.card}>
                  <Image src={people} alt="people" />
                  <div className={style.description}>
                    <p>Abdur Rahman</p>
                    <p>Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.image}>
            <Image src={testimonialsfood} alt="food testimonials" />
            <div className={style.cardReview}>
              <div className={style.cardHead}>
                <p>Order Now</p>
                <p>10.00$</p>
              </div>
              <div className={style.star}>
                <p>
                  <Image src={stars} alt="stars" />
                </p>
              </div>
              <div className={style.comment}>
                Lorem ipsum dolor sit amet, consectetur elit. Quisque diam
                pellentesque bibendum fringilla bibendum. Urna, elit augue urna,
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
