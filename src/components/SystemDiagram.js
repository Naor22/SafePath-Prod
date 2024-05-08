import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { steps, stepText, GridLines, lines } from "../utils/diagramData";

const SystemDiagram = () => {
  const [currentStage, setCurrentStage] = useState(0);
  const [stages, setStages] = useState([]);
  const [cards, setCards] = useState([]);
  const ulRef = useRef(null);

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
    <div className="mt-10 h-[100dvh] overflow-hidden flex flex-col">
      <center className="h-50 min-h-1/3 h-1/3">
        <h1 className="text-5xl font-mono mb-5">System Diagram</h1>

        <ul ref={ulRef} class="steps relative cursor-pointer">
          {steps.map((step, index) => (
            <li
              onClick={() => handleStageClick(index)}
              class={`step  ${index === 0 ? "step-primary" : ""}`}
            >
              {step.name}
            </li>
          ))}
        </ul>

        <div className="mt-10 w-full  relative max-w-md">
          <motion.h1
            initial={{ opacity: 0, scale: 0.5 }}
            key={currentStage}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className=" translate-x-[-50%] top-10 font-semibold text-lg"
          >
            {stepText[currentStage]}
          </motion.h1>
        </div>
      </center>

      <footer className="max-h-[70%] max-w-[70%] relative left-[50%] translate-x-[-50%] grid grid-cols-5 grid-rows-4 grid-flow-col gap-2 p-5">
        {steps.map((step, index) => (
          <div style={{gridRowStart:`${step.rowIdx}`, gridColumnStart:`${step.colIdx}`}}>
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
          style={{gridRowStart:`${line.row}`, gridColumnStart:`${line.col}`, position:'relative'}}
            // className={`relative row-start-${line.row} col-start-${line.col}`}
          >
            {lines[line.line]}
          </div>
        ))}
      </footer>
    </div>
  );
};
export default SystemDiagram;

const Card = ({ title, text, img, id, idxActive }) => {
  const [isActive, setIsActive] = useState(false);
  useEffect(() => {
    setIsActive(() => id === idxActive);
  }, [idxActive, id]);

  return (
    <div class={`card w-full h-full  shadow-2xl ${isActive?'bg-lime-300':'bg-base-400'} transition-all ease-in duration-200`}>
      <div class="card-body">
        <h2 class={`card-title ${isActive?'text-lg':'text-sm'} transition-all ease-in duration-20`}>
          {img}
          {title}
        </h2>
        <p>{text}</p>
      
      </div>
    </div>
  );
};
