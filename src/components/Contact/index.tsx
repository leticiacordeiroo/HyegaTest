import { useState } from "react";
import logo from "../../../public/logo.png";
import mapPin from "../../../public/mapPin.png";
import phone from "../../../public/phone.png";
import envelope from "../../../public/envelopeSimpleOpen.png";
import clock from "../../../public/clock.png";
import send from "../../../public/send.png";
import style from "./index.module.scss";
import Image from "next/image";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/firebaseConnection";

export default function Contact() {
  const [email, setEmail] = useState("");

  async function handleAdd() {
    await addDoc(collection(db, "newsletter"), {
      email: email,
    })
      .then(() => {
        alert("Cadastrado com sucesso");
        setEmail("");
      })
      .catch((error) => {
        console.log("error", error);
      });
  }

  return (
    <>
      <div className={style.container} id="contact">
        <div className={style.footer}>
          <div className={style.foodtuck}>
            <span className={style.title}>
              <Image src={logo} alt="logo" />
            </span>
            <p>Subscribe our newsletter and get discount 25%off</p>
            <p>
              <input
                placeholder="Insira seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleAdd}>
                <Image src={send} alt="send email" />
              </button>
            </p>
          </div>
          <div className={style.contact}>
            <span className="title">Contact us</span>
            <p>
              <Image src={mapPin} alt="map" />
              Kolkata India , 3rd Floor, Office 45
            </p>
            <p>
              <Image src={phone} alt="phone" />
              00965 - 96659986
            </p>
            <p>
              <Image src={envelope} alt="mail" />
              M.Alyaqout@4house.Co
            </p>
            <p>
              <Image src={clock} alt="clock" />
              Sun - Sat / 10:00 AM - 8:00 PM
            </p>
          </div>

          <div className={style.links}>
            <span className="title">Links</span>
            <p>About us</p>
            <p>Contact Us</p>
            <p>Our Menu</p>
            <p>Team</p>
            <p>FAQ</p>
          </div>

          <div className={style.instagram}>
            <span className="title">Instagram Gallery</span>
          </div>
        </div>
      </div>
    </>
  );
}
