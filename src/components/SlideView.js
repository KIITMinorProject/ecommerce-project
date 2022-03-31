import React from 'react';
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Slides";
import "./SlideView.css";

const breakPoints = [
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 2 },
    
  ];

const SlideView = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}></h1>
      <div className="Slide__view">
        <Carousel breakPoints={breakPoints}>
          <Item><img src="" alt="first"/></Item>
          <Item>Two</Item>
          <Item>Three</Item>
          <Item>Four</Item>
          
        </Carousel>
      </div>
    </div>
  )
}

export default SlideView