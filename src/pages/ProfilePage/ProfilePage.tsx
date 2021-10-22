import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { makeStyles } from '@mui/styles'
import {Button, Container, Typography} from '@mui/material';

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


function ProfilePage() {
    // @ts-ignore
    const classes = useStyles();
    const validationSchema = yup.object({
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string()
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Container component="main" maxWidth="xs" className={classes.container}>
            <div className={classes.paper}>
              <Typography>
                  Hello, user
              </Typography>
                <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    Sign Out
                </Button>
            </div>
        </Container>
    );
}

export default ProfilePage;
