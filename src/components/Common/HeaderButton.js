import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

const HeaderButton = ({ toUrl, text }) => {
  return (
    <Link to={toUrl} className="pull-right" size="sm">
      <Button type="button" size="sm" color="primary" className="pull-right">
        <i className="fa fa-plus fa-lg"></i> {text}
      </Button>
    </Link>
  );
};

HeaderButton.propTypes = {
  toUrl: PropTypes.string.isRequired,
  text: PropTypes.string,
};

HeaderButton.defaultProps = {
  text: "Add",
};

export default HeaderButton;
