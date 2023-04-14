import inform from "../styles/inform.module.scss";
import Image from "next/image";
import mark_inform from "../public/images/mark-inform.jpg";
import telegram from "../public/images/telegram.svg";
import git from "../public/images/git.svg";
import inst from "../public/images/inst.svg";
import BorderAroundText from "@/utils/borderAroundText";
export default function Inform() {
  return (
    <>
      <div className={inform.inform_container}>
        <div>
          <Image
            src={mark_inform}
            alt="Picture of the author"
            className={inform.mark_inform}
          />
        </div>
        <div className={inform.information}>
          <div className={inform.about_me}>
            <div className={inform.title}>
              <div className={inform.border_left}></div>
              <span>Обо мне</span>
              <div className={inform.border_right}></div>
            </div>
          </div>
          <div className={inform.content_inform}>
            <p>
              Меня зовут Марк, мне 20 лет и я начинающий frond-end разработчик
              из Екатеринбурга. Я учусь в Уральском государственном
              экономическом университете на "Математическом обеспечении
              информационных систем". Изучаю front-end с помощью различных
              текстовых и видеоресурсов
            </p>
            <p className={inform.email}>
              E-mail:{" "}
              <a href="mailto:bannykhmark@yandex.ru">bannykhmark@yandex.ru</a>
            </p>
            <p className={inform.location}>
              Location:{" "}
              <a href="https://ru.wikipedia.org/wiki/%D0%95%D0%BA%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D0%B1%D1%83%D1%80%D0%B3">
                Екатеринбург
              </a>
            </p>
          </div>
          <div className={inform.contact_inform}>
            <a href="https://t.me/bannykhmark">
              <Image src={telegram} />
            </a>
            <a href="https://github.com/bannykhmark1">
              <Image src={git} />
            </a>
            <a href="https://www.instagram.com/bannykhmark">
              <Image src={inst} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
