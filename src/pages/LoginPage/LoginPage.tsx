import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    Avatar,
    Button,
    Container,
    TextField,
    Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles'
import { LockOutlined } from '@mui/icons-material';
import {IUser} from "../../store/reducers/users";
import { useHistory } from 'react-router-dom';
import { LoginPageProps } from '.';

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
    form: {
        width: '100%',
    },
}));


const LoginPage = (props: LoginPageProps) => {
    const {
        login, users, authed
    } = props

    const classes = useStyles();
    const history = useHistory()

    const onSubmitHandler = (values: IUser) => {
        const user = users.find(user => user.login === values.login)
        console.log('user', user)
        console.log('values', values)
        console.log(authed)
        if (user && user?.password === values.password) {
            login(user)
            history.push('/profile')
        }
    }

    const validationSchema = yup.object({
        login: yup
            .string()
            .required('Login is required'),
        password: yup
            .string()
            .min(4, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => onSubmitHandler(values)
    });

    return (
        <Container component="main" maxWidth="xs" className={classes.container}>
            <div className={classes.paper}>
                <Avatar>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form}
                      onSubmit={formik.handleSubmit}
                      noValidate>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="login"
                        label="Login"
                        name="login"
                        autoComplete="login"
                        autoFocus
                        onChange={formik.handleChange}
                        value={formik.values.login}
                        error={formik.touched.login && Boolean(formik.errors.login)}
                        helperText={formik.touched.login && formik.errors.login}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Sign In
                    </Button>
                </form>
            </div>
        </Container>
    );
}

export default LoginPage;
