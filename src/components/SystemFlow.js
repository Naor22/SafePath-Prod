const SystemFlow = () => {
  return (
    <>
      <header>
        <center>
          <h1 className="text-5xl font-mono mb-5 ">System Flow</h1>
        </center>
      </header>

      <main className="flex flex-col w-full lg:flex-row  lg:justify-between  lg:gap-20 p-10">
        <div className="lg:w-1/2 mt-20">
          <center className=" text-pretty text-2xl  flex flex-col gap-10">
            <div>
              <img
                src="/assets/SafePathLogoFinalBig.svg"
                alt="System Flow"
                className="w-full h-full"
              />
            </div>
            <p>
              After training the model, it was deployed and run on the client's
              side using the browser.
            </p>
            <p className="">
              Simply by visiting the app website, the app can utilize your
              system's GPU and camera with the assistance of TensorFlow.js to
              provide clients with genuine real-time navigation support.
            </p>
          </center>
        </div>
        <div>
          <img
            src="/assets/safe path intro.svg"
            alt="System Flow"
            className="w-full h-full"
          />
        </div>
      </main>
    </>
  );
};

export default SystemFlow;
