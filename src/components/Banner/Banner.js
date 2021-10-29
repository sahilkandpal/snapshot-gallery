import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import flowerwebm from "../../assets/videos/flower.webm";
import flowermp4 from "../../assets/videos/flower-mp4.mp4";
const Banner = () => {
  return (
    <section className="relative add-overlay" style={{ height: "34rem" }}>
      <video
        autoPlay
        loop
        muted
        preload="none"
        className="w-full h-full object-none"
        style={{ objectPosition: "50% 30%" }}
      >
        <source type="video/webm" src={flowerwebm} />
        <source type="video/mp4" src={flowermp4} />
      </video>
      <div className="w-full md:w-160 mx-auto absolute z-10 top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2">
        <div className="text-4xl px-7 md:px-0 font-bold text-white mb-10">
          The best free stock photos, royalty free images & videos shared by
          creators.
        </div>
        <SearchBar />
      </div>
    </section>
  );
};

export default Banner;
