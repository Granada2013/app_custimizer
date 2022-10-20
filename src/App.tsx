import React, { useState } from "react";
import CustomizerPanel from "./customizerPanel";
import MainPage from "./pages/mainPage";
import NavBar from "./pages/navBar";
import ProfilePage from "./pages/profilePage";
import "./App.css";
import FooterBar from "./pages/footer";

function App() {
  const [show, setShow] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const NUM_PAGES = 2;

  const renderPage = (index: number) => {
    switch (index) {
      case 1:
        return <MainPage />;
      case 2:
        return <ProfilePage />;
      default:
        return <MainPage />;
    }
  };

  const nextPage = () => {
    setCurrentPage(currentPage === NUM_PAGES ? 1 : currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage === 1 ? NUM_PAGES : currentPage - 1);
  };

  const handleShowCustomPanel = () => {
    const mainContainer = document.querySelector(".mainContainer");
    if (mainContainer) {
      mainContainer.classList.add("slide-in-main");
      setTimeout(() => {
        mainContainer.classList.remove("slide-in-main");
      }, 1200);
    }
    setShow(true);
  };

  return (
    <React.Fragment>
      <div
        className="mainContainer"
        style={{ width: show ? "calc(100% - 350px)" : "100%" }}
      >
        <header>
          <NavBar show={show} setShow={handleShowCustomPanel} />
        </header>
        <main>
          <div className="slider">
            <button className="slider__button" onClick={prevPage}>
              {"<"}
            </button>
            <button className="slider__button" onClick={nextPage}>
              {">"}
            </button>
          </div>
          {renderPage(currentPage)}
        </main>
        <FooterBar />
      </div>
      {show ? <CustomizerPanel setShow={setShow} /> : null}
    </React.Fragment>
  );
}

export default App;
