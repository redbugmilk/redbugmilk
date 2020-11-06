import React from "react";
import { mappingMenuInformation } from "./InternalMenu";
import { Build, Work, Face, Code } from "@material-ui/icons";
import uminho from "../assets/images/uminho.png";
import aalto from "../assets/images/aalto.svg";

const variant = {
  Experience: <Work />,
  Skills: <Face />,
  Tools: <Build />,
  Languages: <Code />,
};

const generateExperienceInformation = () =>
  Object.entries(variant).map(([key, value]) =>
    mappingMenuInformation(value, key)
  );

const mappingTimeLineInformation = (
  imageSrc,
  dates,
  description,
  id,
  position
) => ({
  imageSrc,
  dates,
  description,
  id,
  position,
});

const generateTimeLineInformation = () => [
  mappingTimeLineInformation(
    uminho,
    ["2002", "2008"],
    <p>Teste</p>,
    "Minho University",
    "Master's Degree in Communication Engineering"
  ),
  mappingTimeLineInformation(
    aalto,
    ["2002", "2008"],
    <p>Teste</p>,
    "Aalto University",
    "Participation in the Erasmus Program"
  ),
];

export { generateExperienceInformation, generateTimeLineInformation };
