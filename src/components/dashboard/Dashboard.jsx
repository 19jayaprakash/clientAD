import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../redux/actions/profileAction";
import DashboardAction from "./DashboardAction";
export const Dashboard = ({
  profileReducer: { profile },
  auth: { user },
  getCurrentProfile,
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, [getCurrentProfile]); // [] will hold the reqd input like actions, props.
  const successPart = (
    <>
      <DashboardAction></DashboardAction>
    </>
  );
  const failurePart = (
    <>
      {" "}
      <p>You have not yet setup a profile, please add some info</p>
      <Link to="/create-profile" className="btn btn-primary my-1">
        Create Profile
      </Link>
    </>
  );
  return (
    <div>
      <section className="container">
        <h1 className="large text-primary">Dashboard</h1>
        <p className="lead">
          <i className="fas fa-user" /> Welcome {user && user.name}
        </p>
        {profile !== null ? successPart : failurePart}
      </section>
    </div>
  );
};

Dashboard.propTypes = {
  profileReducer: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profileReducer: state.profile,
  auth: state.auth,
});

const mapDispatchToProps = {
  getCurrentProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
