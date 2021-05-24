import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { AppBar, Box, Tab, Tabs, Typography } from '@material-ui/core';
import RequestList from './adReqList';
import ArtistTab from './adArtistTab';
import StaffTab from './adStaffTab';
import ArtistList from './adArtistList';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100pw',
    },
}));

export default function AdminBar() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Lista Richieste" {...a11yProps(0)} />
                    <Tab label="Lista Artisti" {...a11yProps(1)} />
                    <Tab label="Tabella Artisti" {...a11yProps(2)} />
                    <Tab label="Tabella Staff" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <RequestList />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <ArtistList />
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <ArtistTab />
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <StaffTab />
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}