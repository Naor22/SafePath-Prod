
const Background = () => {
  return (
    <div className="mt-10 ">
      <center className="mb-20">
        <h1 className="text-5xl font-mono ">Project Background</h1>
      </center>
      <center>
      <ParagraphWithImage
        text="SafePath was created to improve mobility and safety for the
visually impaired. It uses advanced computer vision to detect
hazards and provides real-time auditory alerts through a simple,
intuitive interface. This innovative technology aims to empower
visually impaired users by enhancing their independence and
navigation capabilities."
      />

      <ParagraphWithImage
        imageToLeft={false}
        text="These days, such technology is crucial as it significantly reduces the risk of accidents and boosts confidence, enabling visually impaired users to navigate their surroundings more safely and independently."
      />
      </center>
    </div>
  );
};

export default Background;

const ParagraphWithImage = ({ image, imageToLeft = true, text = "" }) => {

  const imageParagraph = (
    <aside className="flex flex-col sm:flex-row justify-between px-10 max-w-7xl mb-20 ">
      <div className="w-1/3 h-96  min-w-72 rounded-md">
        <img src="/assets/dalle1.webp" alt="algorithm1" className=" rounded-md" />

      </div>
      <div></div>
      <div className="max-w-lg text-center text-lg  ">
        <div className="h-full flex flex-col justify-center">
          <p>{text}</p>
        </div>
      </div>
    </aside>
  );

  const paragraphImage =

    <aside className="flex  flex-col sm:flex-row justify-between max-w-7xl  px-10 mb-20 ">
      <div className="max-w-lg text-center text-lg">
        <div className="h-full flex flex-col justify-center">
          <p>{text}</p>
        </div>
      </div>
      <div></div>
      <div className="w-1/3 h-96  min-w-72">
      <img src="/assets/dalle2.webp" alt="algorithm1" className=" rounded-md" />
      </div>
    </aside>

  return imageToLeft || window.screen.width < 640 ? imageParagraph : paragraphImage
};
