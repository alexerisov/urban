import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
    Avatar,
    Button,
    Checkbox,
    Container,
    FormControlLabel,
    Grid,
    Link,
    TextField,
    Typography
} from '@mui/material';
import { makeStyles } from '@mui/styles'
import { LockOutlined } from '@mui/icons-material';

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


function LoginPage() {
    // @ts-ignore
    const classes = useStyles();
    const validationSchema = yup.object({
        login: yup
            .string()
            .required('Login is required'),
        password: yup
            .string()
            .min(8, 'Password should be of minimum 8 characters length')
            .required('Password is required'),
    });

    const formik = useFormik({
        initialValues: {
            login: '',
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
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
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
