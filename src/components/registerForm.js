import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: ""
    },
    validationSchema: Yup.object({
      firstname: Yup.string().required("Required"),
      lastname: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      confirmpassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match.")
        .required("Required")
    }),
    onSubmit: (values) => {
      return console.log(values);
    }
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-3 row">
          <label htmlFor="label" className="col-sm-2 col-form-label">
            First Name
          </label>
          <div className="col-sm-10">
            <input
              type="firstname"
              name="firstname"
              className="form-control"
              id="firstname"
              onChange={formik.handleChange}
              value={formik.values.firstname}
            />
            {formik.errors.firstname ? <span className="error" style={{ color: "red" }}>{formik.firstname.email}</span> : null}
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="label" className="col-sm-2 col-form-label">
            Last Name
          </label>
          <div className="col-sm-10">
            <input
              type="lastname"
              name="lastname"
              className="form-control"
              id="lastname"
              onChange={formik.handleChange}
              value={formik.values.lastname}
            />
            {formik.errors.lastname ? <span className="error" style={{ color: "red" }}>{formik.errors.lastname}</span> : null}
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="label" className="col-sm-2 col-form-label">
            Email
          </label>
          <div className="col-sm-10">
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? <span className="error" style={{ color: "red" }}>{formik.errors.email}</span> : null}
          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password ? <span className="error" style={{ color: "red" }}>{formik.errors.password}</span> : null}

          </div>
        </div>

        <div className="mb-3 row">
          <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
            Confirm Password
          </label>
          <div className="col-sm-10">
            <input
              type="password"
              name="confirmpassword"
              className="form-control"
              id="confirm password"
              onChange={formik.handleChange}
              value={formik.values.confirmpassword}
            />
            {formik.errors.confirmpassword ? <span className="error" style={{ color: "red" }}>{formik.errors.confirmpassword}</span> : null}

          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
 
      </form>
    </>
  );
};

export default SignupForm;
