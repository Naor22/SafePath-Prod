const Hero = ({handleClick, reference, ref}) => {
  return (
    <div ref={ref} class="hero min-h-screen hero_image ">
      <div class="hero-overlay bg-opacity-60"></div>
      <div class="hero-content text-center text-neutral-content">
        <div>
          <h1 class="mb-6 text-7xl font-bold font-mono">
            Safe Path <span className="text-xs ml-[-30px] ">Be your eyes</span>
          </h1>

          <div class="max-w-lg mb-20">
            <p class="mb-5 text-lg">
              A cutting-edge assistive technology for visually impaired
              individuals, using real-time imaging and auditory alerts to detect
              hazards and ensure safe navigation. Simple and intuitive for
              seamless use.
            </p>
            <div>
              <button onClick={()=>handleClick(reference)} class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Hero;
