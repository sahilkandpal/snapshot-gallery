import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import ImageList from "./components/ImageList/ImageList";
import { ImageContextProvider } from "./context/imageContext";
import { ModalContextProvider } from "./context/modalContext";

function App() {
  return (
    <div className="App">
      <ImageContextProvider>
        <ModalContextProvider>
          <Navbar />
          <Banner />
          <ImageList />
        </ModalContextProvider>
      </ImageContextProvider>
    </div>
  );
}

export default App;
