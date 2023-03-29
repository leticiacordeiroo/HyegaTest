import style from "./index.module.scss";

export default function Footer() {
  return (
    <>
      <div className={style.container}>
        <div className={style.footer}>
          <p>Copyright © 2000-2020.logo.com. All rights reserved</p>

          <div className={style.list}>
            <p>Privacy Policy</p>
            <p>Term of Use</p>
            <p>Partner</p>
          </div>
        </div>
      </div>
    </>
  );
}
