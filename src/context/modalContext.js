import React, { useState, createContext, useContext } from "react";
import { useImageContext } from "../context/imageContext";
export const modalContext = createContext({
  modal: {},
  openModal: () => {},
  closeModal: () => {},
  showNext: () => {},
  showPrev: () => {},
});
export const ModalContextProvider = ({ children }) => {
  const [modal, setModal] = useState({
    isOpen: false,
    activeIndex: null,
    data: null,
  });
  const { imgData } = useImageContext();

  const openModal = (index) => {
    const data = imgData?.data.photos[index];
    setModal({ isOpen: true, activeIndex: index, data });
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setModal({ isOpen: false, activeIndex: null, data: null });
    document.body.classList.remove("overflow-hidden");
  };

  const showNext = () => {
    if (modal.activeIndex < imgData?.data.photos.length - 1) {
      setModal((prev) => {
        const data = imgData?.data.photos[prev.activeIndex + 1];
        return { isOpen: true, activeIndex: prev.activeIndex + 1, data };
      });
    }
  };

  const showPrev = () => {
    if (modal.activeIndex > 0)
      setModal((prev) => {
        const data = imgData?.data.photos[prev.activeIndex - 1];
        return { isOpen: true, activeIndex: prev.activeIndex - 1, data };
      });
  };

  return (
    <modalContext.Provider
      value={{ modal, openModal, closeModal, showNext, showPrev }}
    >
      {children}
    </modalContext.Provider>
  );
};
export const useModalContext = () => {
  const { modal, openModal, closeModal, showNext, showPrev } =
    useContext(modalContext);
  return { modal, openModal, closeModal, showNext, showPrev };
};
export default ModalContextProvider;
