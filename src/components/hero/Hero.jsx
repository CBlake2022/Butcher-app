import React from "react";
import "./Hero.scss";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__container">
        <div className="hero__details">
          <p className="hero__sub">Fresh meat since 1997</p>
          <h1>Get fresh meat in your doorstep</h1>
          <p className="hero__descr">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy
          </p>
        </div>
        <div className="hero__image"></div>
      </div>
    </div>
  );
}
