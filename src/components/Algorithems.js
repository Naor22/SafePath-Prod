const Algorithms = () => {
  return (
    <>
      <header>
        <center>
          <h1 className="text-5xl font-mono mb-5 ">Algorithms</h1>
          <p className="inline-block">We Are Using Computer Vision <span className=""><img src='/assets/eye.svg' alt="eye icon" /></span> </p>
        </center>
      </header>

      <main className="mt-5 flex flex-col lg:flex-row w-full h-full justify-between justify-items-start p-10  ">
        <div className="lg:w-1/2 xl:px-32  text-lg  flex flex-col gap-20 justify-center">
          <p className="">
            This model is designed to offer high-speed performance, catering
            specifically to the need for real-time navigation instructions. The
            decision to utilize MobileNetV2 as the backbone for feature
            extraction ensures both speed and accuracy.
          </p>
          <p>
            Additionally, the implementation of a U-Net model decoder for
            semantic segmentation facilitates path extraction from images, which
            is critical for generating navigation instructions.
          </p>
          <p>
            Further algorithms are employed to ascertain the user's direction
            and deliver precise instructions. The model's neck plays a crucial
            role in enhancing image understanding and improving the accuracy of
            object detection.
          </p>
        </div>

        <div className=" mt-10 lg:mt-0">
          <img
            className="rounded-lg w-full h-full object-contain object-right-center"
            src="/assets/algo.svg"
            alt="algorithm1"
          />
        </div>
      </main>
    </>
  );
};
export default Algorithms;
