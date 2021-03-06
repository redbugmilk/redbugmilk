import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    justifyContent: "center",
  },
});

function TimelineRight({ title, children }) {
  const classes = useStyles();
  return (
    <Box p={5} className={classes.root} component="div">
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {children}
    </Box>
  );
}

TimelineRight.propTypes = {
  /** Experience's title */
  title: PropTypes.string.isRequired,
  /** Experience's description */
  children: PropTypes.node.isRequired,
};

export default TimelineRight;
