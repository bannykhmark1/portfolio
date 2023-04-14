import border from "../styles/border.module.scss";
export default function BorderAroundText(children) {
  return (
    <>
      <div className={border.title}>
        <div className={border.border_left}></div>
        <span>{children}</span>
        <div className={border.border_right}></div>
      </div>
    </>
  );
}
