import content from "../styles/content.module.scss";
import Image from "next/image";
import mark_content from "../public/images/mark-content.png";
export default function Content() {
  return (
    <>
      <div className={content.content_container}>
        <div className={content.content}>
          <div>
            <div className={content.hello}>
              <p>
                Привет! Я <span className={content.text_blue}>Марк Банных</span>{" "}
                и я начинающий{" "}
                <span className={content.text_blue}>front-end</span> разработчик
              </p>
            </div>

            <div>
              <button className={content.link_btn}>Связаться</button>
              <button className={content.project_btn}>Проекты</button>
            </div>
          </div>

          <div className={content.mark_content}>
            <Image src={mark_content} alt="Picture of the author" />
          </div>
        </div>
      </div>
    </>
  );
}
