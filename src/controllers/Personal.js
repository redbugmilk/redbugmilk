import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Divider, Typography, Box, Avatar } from '@material-ui/core';
import profileImage from '../assets/images/profile.jpeg';
import { LinkedIn, GitHub, Twitter } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
    wrapper: {
        display: "flex",
        flex: 1,
        padding: theme.spacing(4),
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    bigAvatar: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
    },
    avatar: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));

function Personal() {
    const classes = useStyles();
    const description = "Nunca é demais lembrar o peso e o significado destes problemas.";
    const message = "Nunca é demais lembrar o peso e o significado destes problemas, uma vez que a consulta aos diversos militantes garante a contribuição de um grupo importante na determinação das condições financeiras e administrativas exigidas.A certificação de metodologias que nos auxiliam a lidar com o fenômeno da Internet agrega valor ao estabelecimento do sistema de formação de quadros que corresponde às necessidades.";
    return (
        <Paper className={classes.wrapper}>
            <Grid container direction="row" justify="center" alignItems="center" spacing={2}>
                <Grid item xs={12} md={6}>
                    <Grid wrap="nowrap" container className={classes.avatar} spacing={2}>
                        <Avatar
                            alt={"Profile image"}
                            src={profileImage}
                            className={classes.bigAvatar} />
                        <Divider />
                        <Box mt={5}>
                            <Typography align="center" variant="h5" gutterBottom>Joana Correia</Typography>
                            <Typography align="center" variant="h6" gutterBottom>FullStack Developer</Typography>
                            <Typography variant="body1" gutterBottom>{description}</Typography>
                        </Box>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Grid wrap="nowrap" container className={classes.root} spacing={4}>
                        <Grid item xs={12}>
                            <Box>
                                <Typography align="center" variant="h2" gutterBottom>That's Me, Joana</Typography>
                                <Divider />
                                <Box mt={5}>
                                    <Typography variant="body1" gutterBottom>{message}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Divider />
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={3}><LinkedIn /></Grid>
                <Grid item xs={3}><GitHub /></Grid>
                <Grid item xs={3}><Twitter /></Grid>
            </Grid>
            {/* <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={6}><LinkedIn /></Grid>
                <Grid item xs={6}><GitHub /></Grid>
            </Grid> */}
        </Paper >
    );
}

export default Personal;