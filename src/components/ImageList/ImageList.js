import React from "react";
import ImageItem from "./ImageItem";
import Masonry from "react-masonry-css";
import ImagesSkeleton from "../ImagesSkeleton/ImagesSkeleton";
import { useImageContext } from "../../context/imageContext";
import { useModalContext } from "../../context/modalContext";
import Modal from "../Modal/Modal";
const ImageList = () => {
  const { imgData } = useImageContext();
  const { modal } = useModalContext();
  const data = imgData?.data;
  const loading = imgData.loading;
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 2,
  };

  return (
    <>
      {!loading ? (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="image-list py-12 px-3 md:px-7 flex w-auto gap-3 md:gap-4"
        >
          {data?.photos.map((photo, index) => (
            <ImageItem key={index} data={photo} index={index} />
          ))}
        </Masonry>
      ) : (
        <ImagesSkeleton />
      )}
      {modal.isOpen ? <Modal /> : null}
    </>
  );
};

export default ImageList;
