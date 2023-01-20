import React from "react";
import "../App.css";
import { Carousel } from "react-bootstrap";
import happyBdayCover from "../assets/happybday.png";
import bdayMsg from "../assets/bdaymsgandrea.png";
import whistlerPic from "../assets/whistler2018.jpg";
import bcLionsPic from "../assets/bclionsgame2019.jpg";
import panoRidgePic from "../assets/panoridge2019.JPG";
import xmasPartyPic from "../assets/xmasparty2019.JPG";
import mtSeymourPic from "../assets/seymour2020.jpg";
import howeSoundPic1 from "../assets/howesound2021-1.jpg";
import howeSoundPic2 from "../assets/howesound2021-2.JPG";
import canucksGamePic from "../assets/canucksgame2021.JPG";
import joffreLakePic from "../assets/joffrelake2022.jpg";
import sunshineCoastPic1 from "../assets/sunshinecoast2022-1.jpg";
import sunshineCoastPic2 from "../assets/sunshinecoast2022-2.JPG";
import icebergLakePic1 from "../assets/iceberglake2022-1.JPG";
import icebergLakePic2 from "../assets/iceberglake2022-2.jpg";
import mtSproatt2022 from "../assets/mtsproatt2022.jpg";

import andreaBday2022 from "../assets/andreabday2022.jpg";


export default function HappyBirthday() {

  const photoAlbum = [
    {
      id: 1,
      photoName: happyBdayCover,
      delayValue: 4000,
      altValue: "Happy birthday",
    },
    {
      id: 2,
      photoName: bdayMsg,
      delayValue: 15000,
      altValue: "My birthday message to Andrea",
    },
    {
      id: 3,
      photoName: whistlerPic,
      delayValue: 4000,
      altValue: "Whistler Village 2018",
    },
    {
      id: 4,
      photoName: bcLionsPic,
      delayValue: 4000,
      altValue: "BC Lions Game 2019",
    },
    {
      id: 5,
      photoName: panoRidgePic,
      delayValue: 4000,
      altValue: "Panorama Ridge Hike & Camp 2019",
    },
    {
      id: 6,
      photoName: xmasPartyPic,
      delayValue: 4000,
      altValue: "Christmas Party 2019",
    },
    {
      id: 7,
      photoName: mtSeymourPic,
      delayValue: 4000,
      altValue: "Pump Peak Hike 2020",
    },
    {
      id: 8,
      photoName: howeSoundPic1,
      delayValue: 4000,
      altValue: "Howe Sound Crest Trail, behind the Lions",
    },
    {
      id: 9,
      photoName: howeSoundPic2,
      delayValue: 4000,
      altValue: "Howe Sound Crest Trail, in the clouds",
    },
    {
      id: 10,
      photoName: canucksGamePic,
      delayValue: 4000,
      altValue: "Canucks Game Dec 2021",
    },
    {
      id: 11,
      photoName: joffreLakePic,
      delayValue: 4000,
      altValue: "Joffre Lake Hike 2022",
    },
    {
      id: 12,
      photoName: sunshineCoastPic1,
      delayValue: 4000,
      altValue: "Sunshine Coast Pre-Departure",
    },
    {
      id: 13,
      photoName: sunshineCoastPic2,
      delayValue: 4000,
      altValue: "Andrea looking down in the valley from Walt Hill",
    },
    {
      id: 14,
      photoName: icebergLakePic1,
      delayValue: 4000,
      altValue: "Iceberg Lake Hike 2022",
    },
    {
      id: 15,
      photoName: icebergLakePic2,
      delayValue: 4000,
      altValue: "Andrea with Canadian flag, Iceberg Lake background",
    },
    {
      id: 16,
      photoName: mtSproatt2022,
      delayValue: 4000,
      altValue: "Mt Sproatt Hike 2022",
    },
    {
      id: 17,
      photoName: andreaBday2022,
      delayValue: 4000,
      altValue: "Group photo with Andrea",
    },
  ];

  return (
    <div>

      <Carousel className="carousel">
        {photoAlbum.map((photo) => {
          return (
            <Carousel.Item interval={photo.delayValue} key={photo.id}>
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