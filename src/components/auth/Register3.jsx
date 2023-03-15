// this will be our redux based registeration impl.
// shortcut to create a redux based functional component rfcreduxp

import PropTypes from "prop-types";
import React, { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/actions/authAction";
const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const Register3 = ({ auth, register }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, confirmPassword } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // consume the action.
    register(formData)
      .then(() => {
        // it should take us to dashboard page.
        // to achieve this we need to use navigate hook.
        navigate("/dashboard");
      })
      .catch(() => {});
    // then : success part.
    // catch : failure part.
  };
  // export : used to access this component outside this file
  // const : we can't change it
  // Register3: it is a componentName
  // props : properties which will get it from the parent component
  // who will be the parent : Provider(is holding your store)
  return (
    <>
      {" "}
      <section class="container">
        <h1 class="large text-primary">Sign Up</h1>
        <p class="lead">
          <i class="fas fa-user"></i> Create Your Account
        </p>
        <form class="form" onSubmit={onSubmit}>
          <div class="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onChange}
            />
            <div className="d-block invalid-feedback">{}</div>
          </div>
          <div class="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={onChange}
            />
            <div className="d-block invalid-feedback">{}</div>
            <small class="form-text">
              This site uses Gravatar so if you want a profile image, use a
              Gravatar email
            </small>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={onChange}
            />
            <div className="d-block invalid-feedback">{}</div>
          </div>
          <div class="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              minLength="6"
              value={confirmPassword}
              onChange={onChange}
            />
          </div>
          <input type="submit" class="btn btn-primary" value="Register" />
        </form>
        <p class="my-1">
          Already have an account? <a href="login.html">Sign In</a>
        </p>
      </section>
    </>
  );
  // content will be rendered to the browser.
};

Register3.propTypes = {
  // mapStatetoProps type declarations
  auth: PropTypes.object.isRequired,
  //mapdispatchprops type declarations(as a function)
  register: PropTypes.func.isRequired,
};
// propTypes : (optional) here we will define the types of our properties.

const mapStateToProps = (state) => ({
  auth: state.auth,
}); // state : global / app state.
// we will provide the list of required properties/ data from the store.
const mapDispatchToProps = { register };
// action name list.

export default connect(mapStateToProps, mapDispatchToProps)(Register3);
// connect will help us to connect to redux env. to get the data / to access the store / help us to perform the action
