import React from 'react';
import { Container, Paper, CssBaseline, Box } from '@material-ui/core';
import MainMenu from "../components/MainMenu";
import { generateMenuInformation } from "../mapping/MainMenu";
import { makeStyles } from '@material-ui/core/styles';
import Experience from '../controllers/Experience';

const useStyles = makeStyles(theme => ({
    App: {
        display: "flex",
        flex: 1
    },
    paper: {
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
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
    menu: {
        display: "flex",
        justifyContent: "center",
        backgroundColor: theme.palette.common.white,
        marginBottom: theme.spacing(2),
    },
    experience: {
        display: "flex",
        paddingLeft: theme.spacing(4),
        justifyContent: "center",
        alignItems:"center",
        backgroundColor: theme.palette.common.white,
        marginBottom: theme.spacing(4),
    },
}));

function App() {
    const classes = useStyles();
    const [menuIndex, setMenuIndex] = React.useState(0);
    const handleClick = (id) => {
        setMenuIndex(id);
    };
    return (
        <div className={classes.App}>
            <CssBaseline />
            <Container maxWidth="lg">
                <main>
                    <Paper className={classes.paper} >
                        <Box 
                            height={200} 
                            className={classes.imageMain} 
                            boxShadow={3}
                        />
                        <Box className={classes.menu}>
                            <MainMenu
                                menus={generateMenuInformation()}
                                onClick={handleClick}
                                menuSelected={menuIndex}
                            />
                        </Box>
                        <Box className={classes.experience}>
                            <Experience />
                        </Box>
                    </Paper>
                </main>
            </Container>
        </div>
    );
}
export default App;