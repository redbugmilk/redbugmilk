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

function MainMenu({ menus, onClick, menuSelected }) {
    const classes = useStyles();
    return (
        <Box
            p={3}
            className={classes.root}
            component="div">
            <React.Fragment>
                {menus.map(item => (
                    <Chip
                        className={classes.chip}
                        clickable
                        key={`menu.${item.id}`}
                        onClick={() => onClick(item.id)}
                        variant="outlined"
                        disabled={item.id === menuSelected}
                        icon={item.icon}
                        label={item.title}
                    />
                )
                )}
            </React.Fragment>
        </Box>
    );
}

MainMenu.propTypes = {
    menus: PropTypes.arrayOf(PropTypes.objectOf([
        PropTypes.string,
        PropTypes.node,
        PropTypes.number,
    ])),
    menuSelected: PropTypes.number,
    onClick: PropTypes.func,
}

export default MainMenu;
