import React from "react";
import PropTypes from "prop-types";
import { Box, Typography, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TimelineRight from "./Timeline.right";
import TimelineLeft from "./Timeline.left";
import grey from "@material-ui/core/colors/grey";

const useStyles = makeStyles({
  divider: {
    width: 1,
    backgroundColor: grey[600],
  },
});

function Timeline({ title, data }) {
  const classes = useStyles();
  return (
    <Box p={5} width={1} component="div">
      <React.Fragment>
        <Box pl={5} component="div">
          <Typography variant="h3" gutterBottom>
            {title}
          </Typography>
        </Box>
        <Divider />
        {React.Children.toArray(
          data.map(({ dates, imageSrc, position, description }, index) => (
            <Box
              flex={1}
              p={5}
              flexDirection="row"
              justifyContent="space-around"
              alignContent="center"
              display="flex"
              component="div"
            >
              <TimelineLeft name={index} dates={dates} imageSrc={imageSrc} />
              <Box width={5} className={classes.divider}></Box>
              <TimelineRight title={position}>{description}</TimelineRight>
            </Box>
          ))
        )}
      </React.Fragment>
    </Box>
  );
}

Timeline.propTypes = {
  /** Experience's title */
  title: PropTypes.string.isRequired,
  /** Array of dates */
  data: PropTypes.arrayOf(PropTypes.object),
};

export default Timeline;
