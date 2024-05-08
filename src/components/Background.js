
const Background = () => {
  return (
    <div className="mt-10 ">
      <center className="mb-20">
        <h1 className="text-5xl font-mono ">Project Background</h1>
      </center>
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
    </div>
  );
};

export default Background;

const ParagraphWithImage = ({ image, imageToLeft = true, text = "" }) => {

  const imageParagraph = (
    <aside className="flex justify-between px-10 mb-20">
      <div className="w-1/3 h-96 bg-rose-500 min-w-72">
        
      </div>
      <div></div>
      <div className="max-w-lg text-center text-lg ">
        <div className="h-full flex flex-col justify-center">
          <p>{text}</p>
        </div>
      </div>
    </aside>
  );

  const paragraphImage = 
  
  <aside className="flex justify-between px-10 mb-20">
    <div className="max-w-lg text-center text-lg">
        <div className="h-full flex flex-col justify-center">
          <p>{text}</p>
        </div>
      </div>
    <div></div>
    <div className="w-1/3 h-96 bg-rose-500 min-w-72"></div>
  </aside>

  return imageToLeft? imageParagraph : paragraphImage
};
