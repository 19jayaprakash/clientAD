// this will be our redux based registeration impl.
// shortcut to create a redux based functional component rfcreduxp

import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

export const Register3 = (props) => {
  // export : used to access this component outside this file
  // const : we can't change it
  // Register3: it is a componentName
  // props : properties which will get it from the parent component
  // who will be the parent : Provider(is holding your store)
  return <div>Register3</div>;
  // content will be rendered to the browser.
};

Register3.propTypes = {
  second: PropTypes.third,
};
// propTypes : (optional) here we will define the types of our properties.

const mapStateToProps = (state) => ({});
// we will provide the list of required properties/ data from the store.
const mapDispatchToProps = {};
// action name list.

export default connect(mapStateToProps, mapDispatchToProps)(Register3);
// connect will help us to connect to redux env. to get the data / to access the store / help us to perform the action
