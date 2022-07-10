/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/auth.service';

function Login() {
  type TInputState = {
    login: string;
    password: string;
    loading: boolean;
    message: string;
  };

  const [inputs, setInputs] = useState<TInputState>({
    login: '',
    password: '',
    loading: false,
    message: '',
  });

  const navigate = useNavigate();

  const validationSchema = () =>
    Yup.object().shape({
      login: Yup.string().required('This field is required!'),
      password: Yup.string().required('This field is required!'),
    });

  const handleLogin = (formValue: { login: string; password: string }) => {
    const { login, password } = formValue;
    setInputs({
      login,
      password,
      message: '',
      loading: true,
    });

    authService.login(login, password).then(
      () => {
        navigate('/');
      },
      error => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setInputs({
          login: '',
          password: '',
          loading: false,
          message: resMessage,
        });
      }
    );
  };

  const { loading, message } = inputs;
  const initialValues = {
    login: '',
    password: '',
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleLogin}
    >
      <Form>
        <div className="form-group">
          <label htmlFor="login">Login</label>
          <Field name="login" type="text" className="form-control" />
          <ErrorMessage
            name="login"
            component="div"
            className="alert alert-danger"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <Field name="password" type="password" className="form-control" />
          <ErrorMessage
            name="password"
            component="div"
            className="alert alert-danger"
          />
        </div>
        <div className="form-group">
          <button
            type="submit"
            className="btn btn-primary btn-block"
            disabled={loading}
          >
            {loading && <span className="spinner-border spinner-border-sm" />}
            <span>Login</span>
          </button>
        </div>
        {message && (
          <div className="form-group">
            <div className="alert alert-danger" role="alert">
              {message}
            </div>
          </div>
        )}
      </Form>
    </Formik>
  );
}

export default Login;
