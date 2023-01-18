import React from "react";
import "../App.css";
import { Carousel } from "react-bootstrap";
import whistlerPic from "../assets/whistler2018.jpg";
import bcLionsPic from "../assets/bclionsgame2019.jpg";
import panoRidgePic from "../assets/panoridge2019.JPG";
import xmasPartyPic1 from "../assets/xmasparty2019-1.JPG";
import xmasPartyPic2 from "../assets/xmasparty2019-2.JPG";
import mtSeymourPic from "../assets/seymour2020.jpg";
import howeSoundPic1 from "../assets/howesound2021-1.jpg";
import howeSoundPic2 from "../assets/howesound2021-2.JPG";
import canucksGamePic from "../assets/canucksgame2021.JPG";
import joffreLakePic from "../assets/joffrelake2022.jpg";
import sunshineCoastPic1 from "../assets/sunshinecoast2022-1.jpg";
import sunshineCoastPic2 from "../assets/sunshinecoast2022-2.JPG";
import iceBergLakePic1 from "../assets/iceberglake2022-1.JPG";
import iceBergLakePic2 from "../assets/iceberglake2022-2.jpg";
import mtSproatt2022 from "../assets/mtsproatt2022.jpg";

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
      altValue: "BC Lions Game 2019",
    },
    {
      id: 3,
      photoName: panoRidgePic,
      altValue: "Panorama Ridge Hike & Camp 2019",
    },
  ];

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
            </Carousel.Item>
          );
        })}
      </Carousel>

    </div>
  );
}