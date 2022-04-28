import { Formik } from "formik";
import React from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./style.css";

interface LoginPageProps {}

type TLoginFormInitialValues = {
  username: string;
  password: string;
};

const Login: React.FC<LoginPageProps> = () => {
  const loginFormInitialValues: TLoginFormInitialValues = {
    username: "",
    password: "",
  };

  return (
    <div className="login-container">
      <div className="login-form-container">
        <Formik
          initialValues={loginFormInitialValues}
          onSubmit={(values, { setSubmitting }) => {
            console.log("values: ", values);
            setSubmitting(false);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleSubmit,
            handleChange,
            handleBlur,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <Input
                  name="username"
                  type="text"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  labelText="Username"
                />

                {errors.username && touched.username && (
                  <div className="form-error-container">
                    <p className="form-error-text">{errors.username}</p>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  className="password"
                  name="password"
                  type="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
              </div>
              <div className="form-group">
                <Button text="Log In" block={true} />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Login;
