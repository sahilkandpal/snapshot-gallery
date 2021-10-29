import React from "react";
import Masonry from "react-masonry-css";

const ImagesSkeleton = () => {
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 2,
  };

  return (
    <div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="image-list py-12 px-3 md:px-7 flex w-auto gap-3 md:gap-4"
      >
        <div className="1 h-[35rem] w-full mb-4 bg-gray-200"></div>
        <div className="2 h-[30rem] w-full mb-4 bg-gray-200"></div>
        <div className="3 h-[35rem] w-full mb-4 bg-gray-200"></div>
        <div className="4 h-[35rem] w-full mb-4 bg-gray-200"></div>
        <div className="5 h-[30rem] w-full mb-4 bg-gray-200"></div>
        <div className="6 h-[35rem] w-full mb-4 bg-gray-200"></div>
        <div className="7 h-[35rem] w-full mb-4 bg-gray-200"></div>
        <div className="8 h-[30rem] w-full mb-4 bg-gray-200"></div>
        <div className="9 h-[35rem] w-full mb-4 bg-gray-200"></div>
        <div className="10 h-[35rem] w-full mb-4 bg-gray-200"></div>
        <div className="11 h-[30rem] w-full mb-4 bg-gray-200"></div>
        <div className="12 h-[35rem] w-full mb-4 bg-gray-200"></div>
        <div className="13 h-[35rem] w-full mb-4 bg-gray-200"></div>
        <div className="14 h-[30rem] w-full mb-4 bg-gray-200"></div>
        <div className="15 h-[35rem] w-full mb-4 bg-gray-200"></div>
      </Masonry>
    </div>
  );
};

export default ImagesSkeleton;
