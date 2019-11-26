import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`,
    },
}));

function InternalMenu({ menus, children, value = 0, onChange }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Tabs
                orientation="vertical"
                value={value}
                onChange={onChange}
                className={classes.tabs}
            >
                {menus.map(item => <Tab key={item.id} icon={item.icon} label={item.title} {...a11yProps(item.id)} />)}
            </Tabs>
            {children}
        </div>
    );
}

InternalMenu.propTypes = {
    children: PropTypes.node,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func,
    menus: PropTypes.array,
};

export default InternalMenu;
