const NavBar = ({ refItems = [], homeRef }) => {
  const scrollToSection = (ref) => {
    if (!ref.current) return;

    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div class={`navbar bg-base-100 fixed z-20 border-b-2`}>
        <div class="navbar-start">
          <div class="dropdown">
            <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabindex="0"
              class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
                {refItems.map((item) => (
              <li>
                <button onClick={() => scrollToSection(item.ref)}>
                  {item.name}
                </button>
              </li>
            ))}
            </ul>
          </div>
          <div className="h-[3rem] min-h-3">
          <img className="w-full min-h-10 min-w-10 h-full" src="/assets/safePathIconBig.svg" alt="safe path icon"/>

          </div>
          <button
            onClick={() => scrollToSection(homeRef)}
            class="btn btn-ghost text-xl"
          >
         SafePath
          </button>
        </div>
        <div class="navbar-center hidden lg:flex">
          <ul class="menu menu-horizontal px-1">
            {refItems.map((item) => (
              <li>
                <button onClick={() => scrollToSection(item.ref)}>
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div class="navbar-end">
        <a href="https://safe-path-prod.netlify.app/">
          <button  class="btn btn-active btn-primary">Demo</button>
          </a>
        </div>
      </div>
    </>
  );
};
export default NavBar;
