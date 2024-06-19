import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { steps, stepText, GridLines, lines } from "../utils/diagramData";
import useMobile from "../utils/mobile";

const SystemDiagram = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [stages, setStages] = useState([]);
  const ulRef = useRef(null);
  const { isMobile } = useMobile();

  console.log(isMobile);

  useEffect(() => {
    if (!ulRef.current) return;

    const steps = ulRef.current.children;

    setStages(() => [...steps]);
  }, [ulRef.current]);

  const handleStageClick = (index) => {
    setCurrentStage(index);
    stages.forEach((step, i) => {
      if (i <= index) {
        step.classList.add("step-primary");
      } else {
        step.classList.remove("step-primary");
      }
    });
  };

  return (
    <div
      style={{ gridTemplateRows: `${isMobile ? "10% 90%" : "30% 70%"} ` }}
      className="mt-10 h-[100vh] mb-10 overflow-hidden grid grid-flow-row gap-0   relative "
    >
      <center className="h-50 min-h-1/3 h-1/3">
        <h1 className="text-5xl font-mono mb-5">System Diagram</h1>

        <ul
          ref={ulRef}
          class={`steps  cursor-pointer ${
            isMobile
              ? "steps-vertical absolute left-0 top-1/4 bottom-0 overflow-y-auto z-10 "
              : "relative"
          }`}
        >
          {steps.map((step, index) => (
            <li
              onClick={() => handleStageClick(index)}
              class={`step  ${index === 0 ? "step-primary" : ""}`}
            >
              {!isMobile && (
                <p className={`${isMobile ? "text-xs" : ""}`}> {step.name} </p>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-10 w-full relative max-w-md">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            key={currentStage}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" translate-x-[-50%] top-10 font-semibold text-sm sm:text-lg"
          >
            {stepText[currentStage]}
          </motion.h1>
        </div>
      </center>
      <div>
        {isMobile ? (
          <div className="w-full h-fit  overflow-scroll gap-10 grid grid-cols-3 mt-20    p-20 ">
            {steps.map((step, index) => (
              <div className="w-full h-full flex justify-items-center justify-center">
                <div className="h-32">
                  <Card
                    minimal={true}
                    id={index}
                    idxActive={currentStage}
                    title={step.name}
                    img={
                      <img
                        src={`/assets/${step.image.path}`}
                        alt={`${step.image.alt}`}
                      />
                    }
                    text={step.text}
                  />
                </div>
                {/* <div className="w-10 h-10 ml-[50%] translate-x-[-50%] bg-slate-400  block"></div> */}
              </div>
            ))}
          </div>
        ) : (
          <footer className="max-h-[90%] max-w-[80%] mt-14 relative left-[50%] translate-x-[-50%]  grid grid-cols-5 grid-rows-4 lg:gap-10 grid-flow-col gap-2 p-5">
            {steps.map((step, index) => (
              <div
                className="min-w-20"
                style={{
                  gridRowStart: `${step.rowIdx}`,
                  gridColumnStart: `${step.colIdx}`,
                }}
              >
                <Card
                  id={index}
                  idxActive={currentStage}
                  title={step.name}
                  img={
                    <img
                      src={`/assets/${step.image.path}`}
                      alt={`${step.image.alt}`}
                    />
                  }
                  text={step.text}
                />
              </div>
            ))}
            {GridLines.map((line, index) => (
              <div
                className="min-w-20"
                style={{
                  gridRowStart: `${line.row}`,
                  gridColumnStart: `${line.col}`,
                  position: "relative",
                }}
                // className={`relative row-start-${line.row} col-start-${line.col}`}
              >
                {lines[line.line]}
              </div>
            ))}
          </footer>
        )}
      </div>
    </div>
  );
};
export default SystemDiagram;

const Card = ({ title, text, img, id, idxActive, minimal }) => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(() => id === idxActive);
  }, [idxActive, id]);

  return (
    <div
      className={` w-20 md:w-full py-[50%] md:py-2 min-w-40 min-h-24 h-28 md:h-full shadow-lg overflow-hidden rounded-xl px-2 flex justify-center flex-col items-center ${
        isActive ? "bg-lime-300" : "bg-base-400"
      } transition-all ease-in duration-200`}
      
    >
      <div className="flex justify-center max-w-10 ">
        {img}
      </div>
      {!minimal &&
      <div>
        <h1 className="text-center text-md font-semibold">{title}</h1>
        <p className="text-center text-sm">{text}</p>
      </div>
}
    </div>
  );
};


