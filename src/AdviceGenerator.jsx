import "./AdviceGenerator.css";
import MobileDivider from "./assets/images/pattern-divider-mobile.svg";
import DesktopDivider from "./assets/images/pattern-divider-desktop.svg";
import dice from "./assets/images/icon-dice.svg";

export default function AdviceGenerator() {
  return (
    <>
      <section className="advice-generator-container">
        <h1 className="advice-counter">Advice #177</h1>
        <p className="advice-content">
          “It is easy to sit up and take notice, what's difficult is getting up
          and taking action.”
        </p>
        <div className="content-divider-container">
          <img src={MobileDivider} alt="divider svg" />
        </div>
        <button className="advice-generator-btn">
          <img src={dice} alt="dice icon" />
        </button>
      </section>
    </>
  );
}
