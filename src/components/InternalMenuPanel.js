import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

function InternalMenuPanel({ children, value, index, }) {
    return (
        <Box
            component="div"
            role="tabpanel"
            hidden={value !== index}
        >
            {children}
        </Box>
    );
}

InternalMenuPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export default InternalMenuPanel;
