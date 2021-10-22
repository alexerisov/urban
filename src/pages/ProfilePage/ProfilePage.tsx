import React from 'react';
import { makeStyles } from '@mui/styles'
import {Button, Container, Typography} from '@mui/material';
import {ProfilePageProps} from "./index";

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
}));


const ProfilePage = (props: ProfilePageProps) => {
    const {user, logout} = props
    const classes = useStyles();

    return (
        <Container component="main" maxWidth="xs" className={classes.container}>
            <div className={classes.paper}>
              <Typography variant="h5" component="h1">
                  Hello, {user?.login}
              </Typography>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={() => logout()}
                >
                    Sign Out
                </Button>
            </div>
        </Container>
    );
}

export default ProfilePage;
