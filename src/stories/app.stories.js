// import React from 'react';
// import { Container, Paper, CssBaseline, Box, Slide, } from '@material-ui/core';
// import MainMenu from "../components/MainMenu";
// import { generateMenuInformation } from "../mapping/MainMenu";
// import { makeStyles } from '@material-ui/core/styles';
// import Experience from '../controllers/Experience';
// import PersonalAvatar from '../components/Personal.avatar';

// const useStyles = makeStyles(theme => ({
//     App: {
//         display: "flex",
//         flex: 1
//     },
//     paper: {
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//     },
//     menu: {
//         display: "flex",
//         justifyContent: "center",
//         backgroundColor: theme.palette.common.white,
//         marginBottom: theme.spacing(2),
//     },
//     experience: {
//         display: "flex",
//         paddingLeft: theme.spacing(4),
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: theme.palette.common.white,
//         marginBottom: theme.spacing(4),
//     },

// }));

// function App() {
//     const classes = useStyles();
//     const [menuIndex, setMenuIndex] = React.useState(0);
//     const [checked, setChecked] = React.useState(false);
//     const handleClick = (id) => {
//         setMenuIndex(id);
//     };
//     const handleChange = () => {
//         setChecked(prev => !prev);
//     };
//     return (
//         <div className={classes.App}>
//             <CssBaseline />
//             <Container maxWidth="lg">
//                 <main>
//                     <Paper className={classes.paper} >
//                         <PersonalAvatar onClick={handleChange} />
//                         <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
                            
//                         </Slide>
//                         <Box className={classes.menu}>
//                             <MainMenu
//                                 menus={generateMenuInformation()}
//                                 onClick={handleClick}
//                                 menuSelected={menuIndex}
//                             />
//                         </Box>
//                         <Box className={classes.experience}>
//                             <Experience />
//                         </Box>
//                     </Paper>
//                 </main>
//             </Container>
//         </div>
//     );
// }

// export default {
//     title: 'App wrapper',
// };

// export const toStorybook = () => <App />;

// toStorybook.story = {
//     name: 'App wrapper',
// };
