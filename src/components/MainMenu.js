import React from "react";
import PropTypes from "prop-types";
import { Box, Chip } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "50%",
  },
  chip: {
    padding: 10,
  },
});

function MainMenu({ menus, onClick, menuSelected }) {
  const classes = useStyles();
  return (
    <Box p={3} className={classes.root} component="div">
      <React.Fragment>
        {React.Children.toArray(
          menus.map((item, index) => (
            <Chip
              className={classes.chip}
              clickable
              onClick={() => onClick(index)}
              variant="outlined"
              disabled={index === menuSelected}
              {...item}
            />
          ))
        )}
      </React.Fragment>
    </Box>
  );
}

MainMenu.propTypes = {
  /** Menus content */
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      /** Menu tab's Icon */
      icon: PropTypes.element.isRequired,
      /** Menu tab's Label */
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** menu selected value */
  menuSelected: PropTypes.number,
  /** function for handle tab */
  onClick: PropTypes.func,
};

export default MainMenu;
