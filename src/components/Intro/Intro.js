import React from "react";
import "./intro.css";
import topmost from "../../assets/topmost.png";
import RedLine from "../RedLine/RedLine";

export default function Intro() {
  return (
    <section className="intro">
      <div className="bgImage">
        <div className="content">
          <img src={topmost} alt="Not found" />
          <RedLine />
          <h4>Gaming Laptop</h4>
          <p className="secondary-text">
           Description
            <br /> describe?
          </p>
        </div>
      </div>
    </section>
  );
}
