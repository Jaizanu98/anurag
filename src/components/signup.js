import { Formik } from "formik";
import { Link } from "react-router-dom";

const Signup = () => {
  const signupform = {
    fullname: "",
    email: "",
    username: "",
    password: "",
  };
  const formSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="container-fluid">
      <div className="row" style={{ height: "100vh" }}>
        <div className="col-md-8">
          <img
            src="https://thumbs.dreamstime.com/b/account-login-authentication-vector-icon-which-can-easily-modify-edit-naccount-editn-154464530.jpg"
            alt=""
            className="img-fluid"
          />
        </div>
        <div
          className="col-md-4"
          style={{ backgroundColor: "#cccccc", padding: "3rem" }}
        >
          <div className="col-md-9 mx-auto" style={{ marginTop: "10rem" }}>
            <Formik initialValues={signupform} onSubmit={formSubmit}>
              {({ values, handleChange, handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                  <h3 className="text-center">Join Our Family</h3>

                  <label className="mt-3">Full Name</label>
                  <input
                    className="form-control"
                    id="fullname"
                    onChange={handleChange}
                    value={values.fullname}
                  />

                  <label className="mt-3">Email Address</label>
                  <input
                    className="form-control"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                  />

                  <label className="mt-3">Username</label>
                  <input
                    className="form-control"
                    id="username"
                    onChange={handleChange}
                    value={values.username}
                  />

                  <label className="mt-3">Password</label>
                  <input
                    className="form-control"
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                  />

                  <button type="submit" className="btn btn-primary w-100 mt-5">
                    Submit
                  </button>
                </form>
              )}
            </Formik>
            <p className="mt-5 text-center">
              Already Registered? <Link to="/login">Login Here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
