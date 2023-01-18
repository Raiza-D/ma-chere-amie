import React from "react";
import "../App.css";
import { Carousel } from "react-bootstrap";
import whistlerPic from "../assets/whistler2018.jpg";
import bcLionsPic from "../assets/bclionsgame2019.jpg";
import panoRidgePic from "../assets/panoridge2019.JPG";


export default function HappyBirthday() {

  const photoAlbum = [
    {
      id: 1,
      photoName: whistlerPic,
      altValue: "Whistler Village 2018",
    },

    {
      id: 2,
      photoName: bcLionsPic,
      altValue: "BC Lions Game 2019"
    },
    {
      id: 3,
      photoName: panoRidgePic,
      altValue: "Panorama Ridge Hike & Camp 2019"
    }
  ]

  return (
    <div>
      <Carousel className="carousel">
        {photoAlbum.map((photo) => {
          return (
            <Carousel.Item interval={4000} key={photo.id}>
              <img
                className="d-block w-100"
                src={photo.photoName}
                alt={photo.altValue}
              />
              <Carousel.Caption>
                {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>

    </div>
  );
}