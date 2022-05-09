import * as Yup from "yup";

const LoginValidationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  password: Yup.string()
    .min(6, "Password must between 6 and 18 characters")
    .max(18, "Password must between 6 and 18 characters")
    .required("Password is required"),
});

export const PageLoginValidations = {
  LoginValidationSchema,
};
