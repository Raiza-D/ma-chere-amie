import React from "react";
import "../App.css";
import { Carousel } from "react-bootstrap";
import picOne from "../assets/puppies1.webp";
import picTwo from "../assets/puppies2.jpeg";
import picThree from "../assets/puppies3.webp";


export default function HappyBirthday() {
  return (
    <div>
      <Carousel className="carousel">
        <Carousel.Item interval={4000}>
          <img
            className="d-block w-100"
            src={picOne}
            alt="Golden retriever puppies"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={4000}>
          <img className="d-block w-100" src={picTwo} alt="Aussie puppy" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={picThree}
            alt="Daschund mix puppy"
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