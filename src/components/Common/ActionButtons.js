import React from "react";
// import { Button } from "reactstrap";
// import { Link } from "react-router-dom";

import PropTypes from "prop-types";

const ActionButtons = ({ id, url, openModal }) => {
  return (
    <>
      <i className="fa fa-edit fa-lg editIcon pr-1 mt-3" />
      <i className="fa fa-trash fa-lg deleteIcon pr-1 mt-3" />
      {/* <Link to={`${url}${id}`} className="pr-1 mt-1">
        <Button color="success" size="sm">
          <i className="fa fa-edit fa-lg" />
        </Button>
      </Link>{" "}
      <Button
        className="pr-1 mt-1"
        color="danger"
        size="sm"
        onClick={() => openModal(id)}
      >
        <i className="fa fa-trash fa-lg" />
      </Button> */}
    </>
  );
};

ActionButtons.propTypes = {
  id: PropTypes.number.isRequired,
  openModal: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
};

ActionButtons.defaultProps = {};

export default ActionButtons;
