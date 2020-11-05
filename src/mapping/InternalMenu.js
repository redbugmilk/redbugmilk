import React from "react";
import { Build, Work, Face, Code } from "@material-ui/icons";

const mappingMenuInformation = (icon, label) => ({
  icon,
  label,
});

const variant = {
  Experience: <Work />,
  Skills: <Face />,
  Tools: <Build />,
  Languages: <Code />,
};

const generateMenuInformation = () =>
  Object.entries(variant).map(([key, value]) =>
    mappingMenuInformation(value, key)
  );

export { mappingMenuInformation, generateMenuInformation };
