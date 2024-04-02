// import React from "react";
import stickerImage from "../../assets/stickerImage.png";
import appleLogoImage from "../../assets/appleLogoImage.png"; // замените на путь к вашему изображению

function HomePage() {
  return (
    <div className="home-container">
      <header className="header">
        <div className="logo-container">
          <a href="#" className="logo">
            {/* SVG прапора України */}
            <svg>...</svg>
            <span>LearnLingo</span>
          </a>
        </div>
        <nav className="nav-items">
          <a href="#">Home</a>
          <a href="#">Teachers</a>
          <a className="login-btn" href="#">
            Log in
          </a>
          <button className="registration-btn">Registration</button>
        </nav>
      </header>
      <main className="main-wrapper">
        <div className="top-block">
          <h1>
            Unlock your potential with the best{" "}
            <span className="accent">language</span> tutors.
          </h1>
          <p>
            Embark on an Exciting Language Journey with Expert Language Tutors:
            Elevate your language proficiency to new heights by connecting with
            highly qualified and experienced tutors.
          </p>
          <a href="#" className="get-started-btn">
            Get started
          </a>
          <div className="side-container">
            <img src={stickerImage} alt="Sticker" className="sticker-image" />
            <img
              src={appleLogoImage}
              alt="Apple Logo"
              className="logo-overlay"
            />
          </div>
        </div>
        <footer className="bottom-block">
          <div className="bottom-block-items">
            <p>32,000 +</p>
            <p>Experienced tutors</p>
          </div>
          <div className="bottom-block-items">
            <p>300,000 +</p>
            <p>5-star tutor reviews</p>
          </div>
          <div className="bottom-block-items">
            <p>120 +</p>
            <p>Subjects taught</p>
          </div>
          <div className="bottom-block-items">
            <p>200 +</p>
            <p>Tutor nationalities</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default HomePage;
