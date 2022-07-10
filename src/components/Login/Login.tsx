/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import authService from '../../services/auth.service';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  loginFailure,
  loginRequest,
  loginSuccess,
} from '../../redux/slices/auth.slice';

function Login() {
  type TInput = {
    login: string;
    password: string;
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth);

  const validationSchema = () =>
    Yup.object().shape({
      login: Yup.string().required('This field is required!'),
      password: Yup.string().required('This field is required!'),
    });

  const handleLogin = (formValue: TInput) => {
    const { login, password } = formValue;

    dispatch(loginRequest());
    authService.login(login, password).then(
      data => {
        dispatch(loginSuccess(data));
        navigate('/');
      },
      error => {
        dispatch(loginFailure(error.response.data));
      }
    );
  };

  const initialValues = {
    login: '',
    password: '',
  };

  return (
    <>
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
              disabled={auth.loggingIn}
            >
              {auth.loggingIn && (
                <span className="spinner-border spinner-border-sm" />
              )}
              <span>Login</span>
            </button>
          </div>
          {auth.error && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {auth.error.detail}
              </div>
            </div>
          )}
        </Form>
      </Formik>
      {auth.loggingIn && <h1>Logging in!</h1>}
    </>
  );
}

export default Login;
