import React, { useState, useEffect } from "react";
import CustomizerPanel from "./customizerPanel";
import Header from "./pages/header";
import ProfilePage from "./pages/profilePage";
import "./App.css";
import FooterBar from "./pages/footer";
import NotificationsPage from "./pages/notificationsPage";
import HelpPage from "./pages/helpPage";
import { useSelector } from "react-redux";

function App() {
  const state: any = useSelector((state) => state);
  const [show, setShow] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const NUM_PAGES = 3;

  useEffect(() => {
    document.documentElement.style.setProperty("--color-custom", state.custom);
  }, [state.custom]);

  useEffect(() => {
    document.documentElement.style.setProperty("--color-footer", state.footer);
  }, [state.footer]);

  useEffect(() => {
    if (state.logo)
      document.documentElement.style.setProperty("--color-logo", state.logo);
  }, [state.logo]);

  const renderPage = (index: number) => {
    switch (index) {
      case 1:
        return <ProfilePage />;
      case 2:
        return <NotificationsPage />;
      case 3:
        return <HelpPage />;
      default:
        return <ProfilePage />;
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
          <Header show={show} setShow={handleShowCustomPanel} />
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
function useEfect() {
  throw new Error("Function not implemented.");
}
