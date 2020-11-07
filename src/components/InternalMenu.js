import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function InternalMenu({ menus, menuSelected = 0, onChange, children }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        value={menuSelected}
        onChange={onChange}
        className={classes.tabs}
      >
        {React.Children.toArray(
          menus.map((item, index) => <Tab {...item} {...a11yProps(index)} />)
        )}
      </Tabs>
      {children}
    </div>
  );
}

InternalMenu.propTypes = {
  /** tab selected value */
  menuSelected: PropTypes.any,
  /** function for handle tab */
  onChange: PropTypes.func.isRequired,
  /** Menus content */
  menus: PropTypes.arrayOf(
    PropTypes.shape({
      /** Menu tab's Icon */
      icon: PropTypes.element.isRequired,
      /** Menu tab's Label */
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  /** Tab panel*/
  children: PropTypes.arrayOf(PropTypes.element.isRequired),
};

export default InternalMenu;
