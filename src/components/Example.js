import YoutubeEmbed from "./YoutubeEmbed";

const Example = () => {
  return (
    <div>
      <header>
        <h1 className="text-center text-5xl font-mono ">Example</h1>
      </header>

      <div className="flex justify-center flex-col w-full h-[100dvh] md:h-[80dvh] gap-10 p-10">
        <div className=" flex flex-row mr-3 gap-20 h-1/2">
        
            <YoutubeEmbed embedId="8S4wSUV-A50" />
          

          <h1 className="text-sm md:text-3xl  font-mono mb-2 ">Object Detection</h1>
       
        </div>

        <div className=" flex flex-row mr-3 gap-20 h-1/2">
       

          <h1 className="text-sm md:text-3xl font-mono mb-2 flex ">
            Terrain Segmantation
          </h1>

          <YoutubeEmbed embedId="D9XALHq5UHU" />
        </div>
      </div>
    </div>
  );
};
export default Example;
