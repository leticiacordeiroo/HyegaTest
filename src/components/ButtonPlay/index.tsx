import Image from "next/image";
import play from "../../../public/play.png";
import style from "./index.module.scss";

interface ButtonProps {
  title?: String;
  onclick?: void;
  outlined?: boolean;
}

export function ButtonPlay({ title, onclick, ...props }: ButtonProps) {
  return (
    <>
      <button className={style.button} onClick={() => onclick} {...props}>
        <Image src={play} alt="play" />
      </button>
    </>
  );
}
