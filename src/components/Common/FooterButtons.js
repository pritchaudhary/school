import React from "react";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const FooterButtons = ({ backUrl, submitting }) => {
  return (
    <>
      <Button
        type="submit"
        size="sm"
        color="primary"
        className="pull-right"
        disabled={submitting}
      >
        {submitting && (
          <span
            className="spinner-border spinner-border-sm"
            role="status"
            aria-hidden="true"
          ></span>
        )}{" "}
        <i className="fa fa-dot-circle-o" />
        Save
      </Button>

      <Link to={backUrl} className="pull-right mr-1" size="sm">
        <Button type="submit" size="sm" color="danger" className="pull-right">
          <i className="fa fa-dot-circle-o"></i> Back
        </Button>
      </Link>
    </>
  );
};

FooterButtons.propTypes = {
  backUrl: PropTypes.string.isRequired,
  submitting: PropTypes.bool.isRequired,
};

FooterButtons.defaultProps = {};

export default FooterButtons;
