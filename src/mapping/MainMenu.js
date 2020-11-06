import React from "react";
import { MenuBook, Work, Face } from "@material-ui/icons";

const mappingMenuInformation = (icon, label) => ({
  icon,
  label
});

const variant = {
  Experience: <Work fontSize="small" color="action" />,
  Education: <MenuBook fontSize="small" color="action" />,
  Personal: <Face fontSize="small" color="action" />,
};
const generateMenuInformation = () =>
  Object.entries(variant).map(([key, value]) =>
    mappingMenuInformation(value, key)
  );

export { mappingMenuInformation, generateMenuInformation };
