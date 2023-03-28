import style from "./index.module.scss";

interface ButtonProps {
  title?: String;
  onclick?: void;
  outlined?: boolean;
}

export function Button({ title, onclick, outlined, ...props }: ButtonProps) {
  return (
    <>
      <button
        className={!outlined ? style.button : style.outlined}
        onClick={() => onclick}
        {...props}
      >
        {title}
      </button>
    </>
  );
}
