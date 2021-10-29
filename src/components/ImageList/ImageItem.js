import React from "react";
import DownloadIcon from "@heroicons/react/solid/DownloadIcon";
import { useModalContext } from "../../context/modalContext";
const ImageItem = ({ data, index }) => {
  const { openModal } = useModalContext();
  const imgUrl = `${data.src.original}?auto=compress&cs=tinysrgb&dpr=2&w=500`;
  return (
    <div
      className="image-item text-white mb-4"
      onClick={() => openModal(index)}
    >
      <a className="image-item-link block" href="##">
        <div className="image-item-img relative">
          <img className="" src={imgUrl} alt="" />
        </div>
      </a>
      <div className="image-item-details relative opacity-100 md:opacity-0">
        <div
          className="author py-4 px-4 hidden md:flex gap-2 items-center absolute bottom-0"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            className="author-img rounded-full"
            src="https://images.pexels.com/users/avatars/73724074/eriks-cistovs-630.jpeg?auto=compress&fit=crop&h=30&w=30"
            alt="author-profile"
          />
          <div className="author-name">{data.photographer}</div>
        </div>
        <a
          className="download-icon py-4 px-4 absolute bottom-0 right-0"
          onClick={(e) => e.stopPropagation()}
          href="##"
        >
          <DownloadIcon className="w-6" />
        </a>
      </div>
    </div>
  );
};

export default ImageItem;
