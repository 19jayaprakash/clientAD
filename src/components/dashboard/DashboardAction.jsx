// this component is responsible for displaying hte buttons.
// to display the buttons : shall we connect to store or not?
// rafce rfcreduxp

import React from "react";
import { Link } from "react-router-dom";

const DashboardAction = () => {
  return (
    <>
      <div>
        <div class="dash-buttons">
          <Link to="/edit-profile" class="btn btn-light">
            <i class="fas fa-user-circle text-primary"></i> Edit Profile
          </Link>
          <Link to="/add-experience" class="btn btn-light">
            <i class="fab fa-black-tie text-primary"></i> Add Experience
          </Link>
          <a href="add-education.html" class="btn btn-light">
            <i class="fas fa-graduation-cap text-primary"></i> Add Education
          </a>
        </div>
      </div>
    </>
  );
};

export default DashboardAction;
