import React from "react";
import "../App.css";
import { Carousel } from "react-bootstrap";
import whistlerPic from "../assets/whistler2018.jpg";
import bcLionsPic from "../assets/bclionsgame2019.jpg";
import panoRidgePic from "../assets/panoridge2019.JPG";


export default function HappyBirthday() {
  return (
    <div>
      <Carousel className="carousel">
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={whistlerPic}
            alt="Whistler Village 2018"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={bcLionsPic} alt="BC Lions Game 2019" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={panoRidgePic}
            alt="Panorama Ridge August 2019"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}