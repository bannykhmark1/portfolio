import Header from "@/components/header";
import Content from "@/components/content";
import variables from "../styles/variables.module.scss";
import Inform from "@/components/inform";
import Skills from "@/components/skills";
export default function Home() {
  return (
    <>
      <div className={variables.wrapper}>
        <Header />
        <Content />
        <Inform />
        <Skills />
      </div>
    </>
  );
}
