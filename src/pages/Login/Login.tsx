import { Formik } from "formik";
import React, { useEffect } from "react";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import "./style.css";
import { PageLoginValidations } from "./validation";
import DefaultAvatar from "../../assets/images/avatars/avatar.avif";
import { Link } from "react-router-dom";
import Content from "../../components/Content/Content";
import { useAppDispatch } from "../../hooks/redux";
import { PageLoginActions } from "../../store/actions/PageLoginActions";

interface LoginPageProps {}

type TLoginFormInitialValues = {
  username: string;
  password: string;
};

const loginFormInitialValues: TLoginFormInitialValues = {
  username: "",
  password: "",
};

const Login: React.FC<LoginPageProps> = () => {
  const dispatch = useAppDispatch()

  const handleSubmit = (values: TLoginFormInitialValues) => {
    dispatch(PageLoginActions.pageLoginAuthRequest(values))
  }

  useEffect(() => {
    dispatch(PageLoginActions.pageLoginLanding())

    return () => {
      dispatch(PageLoginActions.pageLoginDimiss())
    }
  }, [dispatch])

  return (
    <div className="container d-flex login-container">
      <Content className="form-container">
        <div className="login-info-box">
          <h3>MORD OS</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde soluta
            vitae iure.
          </p>
        </div>
        <div className="login-form-box">
          <Avatar imgSource={DefaultAvatar} />

          <Formik
            initialValues={loginFormInitialValues}
            validationSchema={PageLoginValidations.LoginValidationSchema}
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values)
              setSubmitting(false);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleSubmit,
              handleChange,
              isSubmitting,
            }) => (
              <form className="login-form" method="POST">
                <div className="form-group">
                  <Input
                    name="username"
                    value={values.username}
                    labelText="Username"
                    onChange={handleChange}
                    placeholder="Username"
                    errors={errors}
                    touched={touched}
                  />
                </div>
                <div className="form-group">
                  <Input
                    name="password"
                    value={values.password}
                    labelText="Password"
                    onChange={handleChange}
                    placeholder="Password"
                    errors={errors}
                    touched={touched}
                    type="password"
                  />
                </div>
                <div className="form-group">
                  <Button
                    text="Log In"
                    disabled={isSubmitting}
                    onClick={handleSubmit}
                    type="submit"
                  />
                </div>

                <Link to="/register" className="link">
                  Create an account
                </Link>
              </form>
            )}
          </Formik>
        </div>
      </Content>
    </div>
  );
};

export default Login;
