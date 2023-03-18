import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";
import { addExperience } from "../../redux/actions/profileAction";

export const AddExperience = ({ addExperience }) => {
  return <div>Add-Experience</div>;
};

AddExperience.propTypes = {
  addExperience: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { addExperience };

export default connect(mapStateToProps, mapDispatchToProps)(AddExperience);
