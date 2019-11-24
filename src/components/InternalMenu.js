import React from 'react';
import PropTypes from 'prop-types'
import { Box, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});

function InternalMenu({ menus }) {
    const classes = useStyles();
    return (
        <Box
            p={5}
            className={classes.root}
            component="div">
            <React.Fragment>
                {menus.map(item => (
                        <Chip
                            clickable
                            key={item.id}
                            onClick={() => item.onClick(item.id)}
                            variant="outlined"
                            disabled={item.state}
                            icon={item.icon}
                            label={item.title} />)
                )}
            </React.Fragment>
        </Box>
    );
}

InternalMenu.propTypes = {
    menus: PropTypes.arrayOf(PropTypes.objectOf([
        PropTypes.string,
        PropTypes.bool,
        PropTypes.func,
        PropTypes.node,
        PropTypes.number,
    ])),
}

export default InternalMenu;
