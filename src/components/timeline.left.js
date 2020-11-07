import React from "react";
import PropTypes from "prop-types";
import { Box, Avatar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  bigAvatar: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  date: {
    display: "flex",
    flexDirection: "row",
    resizeMode: "contain",
  },
});

const parseDate = (dates) => {
  const parser = (first, second) => `${first} - ${second}`;
  if (dates) {
    const datesLength = dates.length;
    if (datesLength === 2) {
      return parser(dates[0], dates[1]);
    } else if (datesLength === 1) {
      return parser(dates[0], "now");
    }
  }
};

function TimelineLeft({ name, imageSrc, dates }) {
  const classes = useStyles();
  return (
    <Box p={5} className={classes.root} component="div">
      <React.Fragment>
        <Box borderRadius="50%" mb={2} boxShadow={2} component="div">
          <Avatar alt={name} src={imageSrc} className={classes.bigAvatar} />
        </Box>
        <Box component="div" className={classes.date}>
          <Typography variant="overline" display="block" gutterBottom>
            {parseDate(dates)}
          </Typography>
        </Box>
      </React.Fragment>
    </Box>
  );
}

TimelineLeft.propTypes = {
  /** Image's alt */
  name: PropTypes.string.isRequired,
  /** Image's source */
  imageSrc: PropTypes.string.isRequired,
  /** Array of dates */
  dates: PropTypes.arrayOf(PropTypes.string),
};

export default TimelineLeft;
