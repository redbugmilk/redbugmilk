import React from 'react';
import { generateExperienceInformation, generateTimeLineInformation } from "../mapping/Experience";
import { makeStyles } from '@material-ui/core/styles';
import InternalMenu from '../components/InternalMenu';
import InternalMenuPanel from '../components/InternalMenuPanel';
import Timeline from '../components/Timeline';

const useStyles = makeStyles(theme => ({
    App: {
        display: "flex",
        flex: 1,
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
        padding: theme.spacing(4),
        justifyContent: "center",
        backgroundColor: theme.palette.common.white,
        marginBottom: theme.spacing(4),
    },
}));

function Experience() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.App}>
            <InternalMenu menus={generateExperienceInformation()} value={value} onChange={handleChange}>
                <InternalMenuPanel key={0} index={0} value={value}>
                    <Timeline title="Experience" data={generateTimeLineInformation()} />
                </InternalMenuPanel>
                <InternalMenuPanel key={1} index={1} value={value}><p>teste1</p> </InternalMenuPanel>
                <InternalMenuPanel key={2} index={2} value={value}><p>teste2</p> </InternalMenuPanel>
                <InternalMenuPanel key={3} index={3} value={value}><p>teste3</p> </InternalMenuPanel>
            </InternalMenu>
        </div>
    );
}

export default {
    title: 'Experience wrapper',
};

export const toStorybook = () => <Experience />;

toStorybook.story = {
    name: 'Experience wrapper',
};
