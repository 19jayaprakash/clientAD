import React, { Component } from "react";

const Footer = ({ appName }) => {
  return (
    <>
      <h1>
        &cpy;www.{appName}.com {new Date().getFullYear()}
      </h1>
    </>
  );
};

export default Footer;
