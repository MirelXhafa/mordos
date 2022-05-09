import { Formik } from "formik";
import React, { useEffect } from "react";
import Button from "../../components/Button/Button";
import Content from "../../components/Content/Content";
import Input from "../../components/Input/Input";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import PageRegisterActions, {
  TRegisterFormData,
} from "../../store/actions/PageRegisterAction";
import { selectAccountLoading } from "../../store/selectors/AccountSelectors";
import "./styles.css";

interface RegisterProps {}

type TRegisterForm = {
  firstname: string;
  lastname: string;
  username: string;
  password: string;
};

const registerFormInitialValues: TRegisterForm = {
  firstname: "",
  lastname: "",
  username: "",
  password: "",
};

const Register: React.FC<RegisterProps> = () => {
  const dispatch = useAppDispatch();

  const loading = useAppSelector(selectAccountLoading);

  const handleSubmit = (values: TRegisterForm) => {
    const registerData: TRegisterFormData = {
      ...values,
      isLoggedIn: false,
      settings: {
        timezone: "",
      },
    };

    dispatch(PageRegisterActions.PageRegisterButtonPressed(registerData));
    // dispatch(PageRegisterActions.PageRegisterDismiss());
  };

  useEffect(() => {
    dispatch(PageRegisterActions.PageRegisterLanding());

    return () => {
      dispatch(PageRegisterActions.PageRegisterDismiss());
    };
  }, []);

  return (
    <div className="container register-container vh-100 w-full">
      <Content className="register-content">
        <Formik
          initialValues={registerFormInitialValues}
          onSubmit={(values, { setSubmitting }) => {
            handleSubmit(values);
            setSubmitting(false);
          }}
        >
          {({ values, errors, touched, handleSubmit, handleChange }) => (
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="register-form"
            >
              <div className="form-group">
                <Input
                  labelText="First Name"
                  onChange={handleChange}
                  value={values.firstname}
                  placeholder="First Name"
                  name="firstname"
                />
              </div>
              <div className="form-group">
                <Input
                  labelText="Last Name"
                  onChange={handleChange}
                  value={values.lastname}
                  placeholder="First Name"
                  name="lastname"
                />
              </div>
              <div className="form-group">
                <Input
                  labelText="Username"
                  onChange={handleChange}
                  value={values.username}
                  placeholder="First Name"
                  name="username"
                />
              </div>
              <div className="form-group">
                <Input
                  labelText="Password"
                  onChange={handleChange}
                  value={values.password}
                  placeholder="First Name"
                  name="password"
                  type="password"
                />
              </div>
              <div className="form-group">
                <Button
                  type="submit"
                  text={loading ? "Loading..." : "Register"}
                  onClick={handleSubmit}
                />
              </div>
            </form>
          )}
        </Formik>
      </Content>
    </div>
  );
};

export default Register;
