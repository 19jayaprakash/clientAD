import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../redux/actions/profileAction";
export const Dashboard = ({ profile, getCurrentProfile }) => {
  return <div>Dashboard</div>;
};

Dashboard.propTypes = {
  profile: PropTypes.object.isRequired,
  getCurrentProfile: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = {
  getCurrentProfile,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
