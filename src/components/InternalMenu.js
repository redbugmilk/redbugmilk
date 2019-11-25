import React from 'react';
import PropTypes from 'prop-types'
import { Box, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        width: "50%"
    },
    chip: {
        padding: 10
    }
});

function InternalMenu({ menus }) {
    const classes = useStyles();
    return (
        <Box
            p={3}
            borderRadius={16}
            border={1}
            className={classes.root}
            component="div">
            <React.Fragment>
                {menus.map(item => (
                    <Chip
                        className={classes.chip}
                        clickable
                        key={item.id}
                        onClick={() => item.onClick(item.id)}
                        variant="outlined"
                        disabled={item.state}
                        icon={item.icon}
                        label={item.title}
                    />
                )
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
