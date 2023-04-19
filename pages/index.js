import Header from "@/components/header";
import Content from "@/components/content";
import variables from "../styles/variables.module.scss";
import Inform from "@/components/inform";
import Skills from "@/components/skills";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <>
      <title>Bannykh Mark</title>
      <div className={variables.wrapper}>
        <Header />
        <Content />
        <Inform />
        <Skills />
        <Portfolio />
        <Footer />
      </div>
    </>
  );
}
