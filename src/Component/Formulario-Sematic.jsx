
import React from 'react';
import {Form, Button, Container} from 'semantic-ui-react';
import {ErrorMessage, Field, Formik, useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

export const Formulario = () => {

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',

        },

        validationSchema: Yup.object({
            username: Yup.string().required('El usuario es requerido'),
            password: Yup.string().required('La contaseña es neceraria'),
        }),

        onSubmit: (formData) => {
            console.log(JSON.stringify(formData, null, 2));
        },

    })


    return (

        <Container

            style={{
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                height: "100vh"

            }}>

            <h1>Formulario con formik,semantic y yup</h1>

            <Form style={{width: '30%'}} onSubmit={formik.handleSubmit}>
                <Form.Input
                    type='text'
                    icon="user"
                    iconPosition="left"
                    placeholder='Fmartinez'
                    name='username'
                    onChange={formik.handleChange}
                    error={formik.errors.username}
                />
                <Form.Input
                    type='text'
                    icon="lock"
                    iconPosition="left"
                    placeholder='**********'
                    name='password'
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                />


                <Button type='submit'> Entrar </Button>
            </Form>


        </Container>
    );
}

export const Login = () => {
    const formik = useFormik({
        initialValues: { email: '', password: '' },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('Required'),
            password: Yup.string().required('Required'),
        }),
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Input
                label="Email"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email}
            />
            <Form.Input
                label="Password"
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && formik.errors.password}
            />
            <Button type="submit">Submit</Button>
        </Form>
    );
};

export const LoginForm = () => {
    return (
        <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={Yup.object({
                email: Yup.string()
                    .email("Invalid email address")
                    .required("Email is required"),
                password: Yup.string().required("Password is required"),
            })}
            onSubmit={(values) => {
                console.log(values);
            }}
        >
            {({ errors, touched }) => (
                <Form>
                    <Field name="email">
                        {({ field }) => (
                            <Form.Input
                                fluid
                                icon="user"
                                iconPosition="left"
                                placeholder="Email"
                                error={touched.email && errors.email}
                                {...field}
                            />
                        )}
                    </Field>
                    <Field name="password">
                        {({ field }) => (
                            <Form.Input
                                fluid
                                icon="lock"
                                iconPosition="left"
                                placeholder="Password"
                                type="password"
                                error={touched.password && errors.password}
                                {...field}
                            />
                        )}
                    </Field>
                    <Button type="submit" primary fluid size="large">
                        Sign in
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export const LoginForm2 = () => {

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Correo  electrónico inválido').required('Este campo es obligatorio'),
        password: Yup.string().required('Este campo es obligatorio'),
    });
    const handleSubmit = async (values, { setSubmitting, setFieldError }) => {
        try {
            const response = await axios.post('/api/login', values);

            // manejar la respuesta del servidor
        } catch (error) {
            if (error.response.status === 401) {
                setFieldError('email', 'Correo electrónico o contraseña incorrectos');
                setFieldError('password', 'Correo electrónico o contraseña incorrectos');
            } else {
                // manejar otros errores
            }
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <Form>
                    <div>
                        <label htmlFor="email">Correo electrónico</label>

                        <Field type="email" name="email" id="email" />
                        <ErrorMessage name="email" component="div" />
                    </div>
                    <div>
                        <label htmlFor="password">Contraseña</label>
                        <Field type="password" name="password" id="password" />
                        <ErrorMessage name="password" component="div" />
                    </div>
                    <button type="submit" disabled={isSubmitting}>
                        Iniciar sesión
                    </button>
                </Form>
            )}

        </Formik>
    );
};

