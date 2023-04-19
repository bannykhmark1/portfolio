import skills from "../styles/skills.module.scss";
import border_right from "../public/images/border-right.png";
import border_left from "../public/images/border-left.png";
import github from "../public/images/github.svg";
import js from "../public/images/js.svg";
import css3 from "../public/images/css3.svg";
import html from "../public/images/html.svg";
import react from "../public/images/react.svg";
import Image from "next/image";
import BorderAroundText from "@/utils/borderAroundText";

export default function Skills() {
  return (
    <>
      <div className={skills.skills_container}>
        <div className={skills.container_border_and_heading}>
          <BorderAroundText>Навыки</BorderAroundText>
        </div>
        <div className={skills.skills__container}>
          <div className={skills.all_skills}>
            <div className={skills.js_skills}>
              <Image src={js} className={skills.js} />
              <div>
                <p>JavaScript</p>
                <div className={skills.progress}>
                  <div className={skills.grayback_js}></div>
                </div>
              </div>
            </div>
            <div className={skills.react_skills}>
              <Image src={react} className={skills.react} />
              <div>
                <p>React</p>
                <div className={skills.progress}>
                  <div className={skills.grayback_react}></div>
                </div>
              </div>
            </div>
            <div className={skills.html_skills}>
              <Image src={html} className={skills.html} />
              <div>
                <p>HTML</p>
                <div className={skills.progress}>
                  <div className={skills.grayback_html}></div>
                </div>
              </div>
            </div>
            <div className={skills.css_skills}>
              <Image src={css3} className={skills.css3} />
              <div>
                <p>CSS</p>
                <div className={skills.progress}>
                  <div className={skills.grayback_css}></div>
                </div>
              </div>
            </div>
            <div className={skills.git_skills}>
              <Image src={github} className={skills.git} />
              <div>
                <p>GitHub</p>
                <div className={skills.progress}>
                  <div className={skills.grayback_git}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={skills.btn_go_to_portfolio}>
            <button> Посмотреть профиль</button>
          </div>
        </div>
        <div className={skills.front_end}></div>
      </div>
    </>
  );
}
