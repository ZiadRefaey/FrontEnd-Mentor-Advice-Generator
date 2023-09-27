import "./AdviceGenerator.css";
import MobileDivider from "./assets/images/pattern-divider-mobile.svg";
import DesktopDivider from "./assets/images/pattern-divider-desktop.svg";
import dice from "./assets/images/icon-dice.svg";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function AdviceGenerator() {
  const [advice, setAdvice] = useState("Roll the dice and get an advice");
  const [adviceNo, setAdviceNo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  function handleAdviceGenerator() {
    setIsLoading(true);
    async function getAdvice() {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdviceNo(data.slip.id);
      setAdvice(data.slip.advice);
      setIsLoading(false);
    }
    getAdvice();
  }
  return (
    <>
      {isLoading && (
        <section className="advice-generator-container">
          <ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#53ffaa"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        </section>
      )}
      {!isLoading && (
        <section className="advice-generator-container">
          <h1 className="advice-counter">
            {adviceNo ? `Advice #${adviceNo}` : ""}
          </h1>
          <p className="advice-content">“{advice}.”</p>
          <div className="content-divider-container">
            <img src={MobileDivider} alt="divider svg" />
          </div>
          <button
            className="advice-generator-btn"
            onClick={handleAdviceGenerator}
          >
            <img src={dice} alt="dice icon" />
          </button>
        </section>
      )}
    </>
  );
}
