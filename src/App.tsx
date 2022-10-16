import React, { useState } from "react";
import "./App.css";
import MainPage from "./ste_pages/mainPage";
import ProfilePage from "./ste_pages/profilePage";

function App() {
  const [show, setShow] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(0);

  const renderPage = (index: number) => {
    switch (index) {
      case 0:
        return <MainPage />;
      case 1:
        return <ProfilePage />;
      default:
        return <MainPage />;
    }
  };

  return (
    <React.Fragment>
      <header>
        <nav className="nav">
          <div className="nav__left">
            {/* <img src={} alt={"logo"} /> */}
            <span>Your Brand Name!</span>
          </div>
          <ul className="nav__right">
            <li>Profile</li>
            <li>Help</li>
            <li>Notifications</li>
          </ul>
        </nav>
      </header>
      <main>{renderPage(currentPage)}</main>
    </React.Fragment>
  );
}

export default App;
