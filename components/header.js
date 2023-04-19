import header from "../styles/header.module.scss";

export default function Header() {
  return (
    <>
      <div className={header.header__container}>
        <div className={header.header_container}>
          <div className={header.header}>
            <div className={header.icon}>
              <div className={header.tag_icons}>
                <span>&lt;/&gt;</span>
              </div>
              <div className={header.name}>
                Марк
                <br /> Банных
              </div>
            </div>
            <div className={header.navigations}>
              <a className={header.nav_item}>
                <p>Главная</p>
              </a>
              <a className={header.nav_item}>
                <p>Обо мне</p>
              </a>
              <a className={header.nav_item}>
                <p>Навыки</p>
              </a>
              <a className={header.nav_item}>
                <p>Портфолио</p>
              </a>
              <a className={header.nav_item}>
                <p>Контакты</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
