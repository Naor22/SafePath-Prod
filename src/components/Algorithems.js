const Algorithms = () => {
  return (
    <>
      <header>
        <center>
          <h1 className="text-5xl font-mono mt-10">Algorithms</h1>
        </center>
      </header>
      <main className="mt-10">
        <div className="flex">
          <div className="max-w-1/2 flex">
            <img className="w-1/3" src="/assets/unet.jpeg" alt="unet" />
            <img className="w-1/4" src="/assets/mobileNetV2Arch.png" alt="unet" />
          </div>
          <div className="w-1/2">
          <p>
            we are using unet model with a backbone of mobile for segmentation
            task the
          </p>

          </div>

        
        </div>
      </main>
    </>
  );
};
export default Algorithms;
