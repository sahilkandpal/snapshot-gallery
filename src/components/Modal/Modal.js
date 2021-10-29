import React, { useState, useEffect } from "react";
import {
  XIcon,
  ChevronRightIcon,
  ChevronLeftIcon,
} from "@heroicons/react/outline";

import { useModalContext } from "../../context/modalContext";

const Modal = () => {
  const { modal, closeModal, showNext, showPrev } = useModalContext();
  const imgUrl = `${modal.data?.src.original}?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`;
  const [zoom, setZoom] = useState(false);

  console.log(modal);

  useEffect(() => {
    const modalImg = document.getElementById("modalimg");
    if (zoom) {
      modalImg.addEventListener("mousemove", Zoom, true);
      console.log("added");
    } else {
      modalImg.removeEventListener("mousemove", Zoom, true);
      console.log("removed");
    }
    return () => {
      console.log("return func");
      modalImg.removeEventListener("mousemove", Zoom, true);
    };
  }, [zoom]);

  const Zoom = (e) => {
    const modalImg = document.getElementById("modalimg");
    const img = document.querySelector(".inner-img");
    const top = e.clientY - modalImg.offsetTop;
    const left = e.clientX - modalImg.offsetLeft;
    const leftPerc = (left / modalImg.clientWidth) * 100;
    const topPerc = (top / modalImg.clientHeight) * 100;
    const X = leftPerc <= 50 ? `${-(leftPerc - 50)}%` : `${-(leftPerc - 50)}%`;
    const Y = topPerc <= 50 ? `${-(topPerc - 50)}%` : `${-(topPerc - 50)}%`;
    img.setAttribute("style", `transform: scale(3) translate(${X}, ${Y})`);
  };

  const handleZoom = (e) => {
    const img = document.querySelector(".inner-img");

    if (!zoom) {
      setZoom(true);
      Zoom(e);
    } else {
      setZoom(false);
      img.setAttribute("style", `transform: scale(1) translate(0px, 0px)`);
    }
  };

  const stopProp = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="modal-overlay overflow-y-auto fixed flex flex-col md:flex-row z-30 w-full h-full top-0 bottom-0 left-0 right-0 bg-white md:bg-[hsla(0,0%,0%,0.8)]"
      onClick={closeModal}
    >
      <div className="bg-white md:bg-transparent sticky top-0">
        <button
          className="md:static md:mt-5 md:ml-5 py-2 md:py-0"
          onClick={(e) => {
            stopProp(e);
            closeModal();
          }}
        >
          <XIcon className="w-8 h-8 text-black md:text-gray-300" />
        </button>
      </div>
      <div
        className="modal-content flex-1 md:flex-initial flex flex-col md:mt-5 md:ml-5 md:mr-[5rem] md:py-5 md:px-5 md:w-[90%] self-start md:rounded-xl bg-white"
        onClick={(e) => {
          stopProp(e);
        }}
      >
        <div className="md:mt-0 author pb-4 pt-2 pl-2 md:pl-2 flex order-2 md:order-1 gap-2 items-center">
          <img
            className="author-img rounded-full"
            src="https://images.pexels.com/users/avatars/73724074/eriks-cistovs-630.jpeg?auto=compress&fit=crop&h=50&w=50"
            alt="author-profile"
          />
          <div className="author-name font-medium">
            {modal.data.photographer}
          </div>
        </div>
        <div
          id="modalimg"
          className="modal-img overflow-hidden order-1 md:order-2"
          onClick={handleZoom}
          style={{ cursor: zoom ? "zoom-out" : "zoom-in" }}
        >
          <img
            className="inner-img md:min-h-[450px] md:min-w-[300px] md:max-w-[60vh] mx-auto"
            src={imgUrl}
            alt=""
            data-zoom-initiated="true"
            style={{ transition: "all 0.1s ease 0s" }}
          />
        </div>
        <ChevronLeftIcon
          className="absolute hidden md:block top-[18rem] left-0 text-gray-300 h-14 w-14"
          onClick={showPrev}
        />
        <ChevronRightIcon
          className="absolute hidden md:block top-[18rem] right-0 text-gray-300 h-14 w-14"
          onClick={showNext}
        />
      </div>
    </div>
  );
};

export default Modal;
