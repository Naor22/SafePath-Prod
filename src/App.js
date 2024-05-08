import Background from "./components/Background";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import { useRef } from "react";
import Team from "./components/Team";
import SystemDiagram from "./components/SystemDiagram";
import Algorithms from "./components/Algorithems";
import Example from "./components/Example";

export default function App() {
  const HomeRef = useRef(null);
  const BackgroundSectionRef = useRef(null);
  const AlgorithmSectionRef = useRef(null);
  const SystemFlowSectionRef = useRef(null);
  const SystemDiagramRef = useRef(null);
  const ExampleSectionRef = useRef(null);
  const TeamSectionRef = useRef(null);

  const refItems = [
    { name: "Background", ref: BackgroundSectionRef },
    { name: "System Flow", ref: SystemFlowSectionRef },
    { name: "System Diagram", ref: SystemDiagramRef },
    { name: "Algorithms", ref: AlgorithmSectionRef },
    { name: "Example", ref: ExampleSectionRef },
    { name: "Team", ref: TeamSectionRef },
  ];

  const scrollToSection = (ref) => {
    if (!ref.current) return;

    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <header>
        <NavBar homeRef={HomeRef} refItems={refItems} />
      </header>
      <main>
        <section ref={HomeRef}>
          <Hero
            reference={BackgroundSectionRef}
            handleClick={scrollToSection}
          />
        </section>

        <section className="min-h-[100dvh]" ref={BackgroundSectionRef}>
          <Background />
        </section>

        <section ref={SystemFlowSectionRef} className="min-h-[100dvh] bg-slate-200"></section>

        <section
          className="min-h-[100dvh] max-h-[100dvh] "
          ref={SystemDiagramRef}
        >
          <SystemDiagram />
        </section>

        <section ref={AlgorithmSectionRef} className="min-h-[100dvh] ">
          <Algorithms />
        </section>

        <section className="min-h-[100dvh] ">
          <Example />
        </section>

        <section className="min-h-[100dvh] ">
          <Team />
        </section>

      </main>
    </div>
  );
}
