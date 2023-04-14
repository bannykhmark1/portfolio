import footer from "../styles/footer.module.scss";
import React from "react";
import Image from "next/image";
import telegram from "../public/images/telegram.svg";
import git from "../public/images/git.svg";
import inst from "../public/images/inst.svg";
export default function Footer() {
  return (
    <>
      <div className={footer.background_footer}>
        <div className={footer.footer_container}>
          <div className={footer.button_container}>
            <a className={footer.btn} href="#">
              Обратно на главную
            </a>
            <a className={footer.btn} href="#">
              Обо мне
            </a>
            <a className={footer.btn} href="#">
              Навыки
            </a>
            <a className={footer.btn} href="#">
              Портфолио
            </a>
            <a className={footer.btn} href="#">
              Контакты
            </a>
          </div>
          <div className={footer.img_container}>
            <a href="https://t.me/bannykhmark">
              <Image width={32} height={32} src={telegram} />
            </a>
            <a href="https://github.com/bannykhmark1">
              <Image width={32} height={32} src={git} />
            </a>
            <a href="https://www.instagram.com/bannykhmark">
              <Image width={32} height={32} src={inst} />
            </a>
          </div>

          <div className={footer.icon}>
            <div className={footer.tag_icons}>
              <span>&lt;/&gt;</span>
            </div>
            <div className={footer.name}>
              Марк
              <br /> Банных
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
