import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Box, Typography, Divider } from '@material-ui/core';
import { KeyboardArrowRight, KeyboardArrowDown } from '@material-ui/icons';
import Grow from '@material-ui/core/Grow';

const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(2),
        flex: 1,
        flexDirection: "column",
        display: 'flex',
        justifyContent: "center",
        alignItems: "center"
    },
    container: {
        display: 'flex',
        marginTop: theme.spacing(2),
    },
    header: {
        flex: 1,
        flexDirection: "row",
        display: 'flex',
        justifyContent: "space-around",
        alignItems: "center"
    },
    paper: {
        margin: theme.spacing(2),
        width: 50,
        height: 150,
    },
    language: {
        margin: theme.spacing(2),
        width: 50,
        height: 150,
        borderColor: "red",
        borderWidth: 2,
    },
}));

function PersonalLanguage({ isOpen, language }) {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.header} >
                <Typography align="left" variant="h5" gutterBottom>Languages</Typography>
                {isOpen ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
            </Box>
            <Divider />
            {isOpen && <div className={classes.container}>
                <Grow in={isOpen}>
                    <Paper className={classes.paper}>
                        <Box className={classes.language} />
                    </Paper>
                </Grow>
                <Grow
                    in={isOpen}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(isOpen ? { timeout: 1000 } : {})}
                >
                    <Paper className={classes.paper}>
                        <Box border={1} borderColor="grey.500" width="100%" height="100%" />
                    </Paper>
                </Grow>
            </div>}
        </Box>

    );
}

export default {
    title: 'Personal language ',
};

export const toStorybook = () => <PersonalLanguage isOpen />;

toStorybook.story = {
    name: 'Personal Language with 2 language',
};
