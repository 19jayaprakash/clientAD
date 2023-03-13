import React, { useState } from "react";
import api from "../../utils/api";
const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register2 = () => {
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, confirmPassword } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    //...formData : ... spread operator.
    // it will leave everything from the fromData into the json object .

    // setFormData : used to modify/update the state.
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    api
      .post("/users", formData)
      .then((res) => console.log(res.data))
      .catch();
  };
  // formData : state to hold the form related info.
  // setFormData: is equivalent to setState method from the class based component
  // useState: name of the hook which will help us to declare the state.
  // initialState:to initialize the state with the provided data through object.
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
};

export default Register2;
