import React from 'react';
import PropTypes from 'prop-types'
import { Box, Avatar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import profileImage from '../assets/images/profile.jpeg';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    imageMain: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/user/erondu)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    avatar: {
        position: "absolute",
        backgroundColor: theme.palette.common.white,
        top: theme.spacing(26),
        borderRadius: "50%",
        zIndex: "modal",
        boxShadow: 4,
        borderColor: grey[600]
    },
    bigAvatar: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
}));

function PersonalAvatar({ onClick }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box
                width="100%"
                height={300}
                className={classes.imageMain}
                boxShadow={3}
            />
            <Button
                className={classes.avatar}
                onClick={onClick}
            >
                <Avatar
                    alt={"Profile image"}
                    src={profileImage}
                    className={classes.bigAvatar} />
            </Button>
        </div>
    );
}

PersonalAvatar.propTypes = {
    onClick: PropTypes.func,
}

export default PersonalAvatar;
