import React from "react";
import PropTypes from "prop-types";
import { Box } from "@material-ui/core";

function InternalMenuPanel({ children, value, index }) {
  return (
    <Box component="div" role="tabpanel" hidden={value !== index}>
      {children}
    </Box>
  );
}

InternalMenuPanel.propTypes = {
  /** Panel's Content  */
  children: PropTypes.node,
  /** Panel index */
  index: PropTypes.any.isRequired,
  /** Panel selected index */
  value: PropTypes.any.isRequired,
};

export default InternalMenuPanel;
