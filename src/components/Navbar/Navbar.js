import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    document.addEventListener("scroll", handleNavClass);
    return () => {
      document.removeEventListener("scroll", handleNavClass);
    };
  }, []);

  const handleNavClass = () => {
    if (window.window.scrollY > 50) {
      document.getElementById("navbar").classList.add("bg-[#141414]");
    } else {
      document.getElementById("navbar").classList.remove("bg-[#141414]");
    }
  };
  return (
    <nav
      id="navbar"
      className="w-full py-5 fixed top-0 z-20 text-white flex justify-between px-5 duration-300"
    >
      <div className="logo text-2xl font-bold">
        <a href="/">SNAPSHOT</a>
      </div>
      <div className="links flex font-medium items-center">
        <a className="px-5" href="##">
          Login
        </a>

        <a className="px-5" href="##">
          Join
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
