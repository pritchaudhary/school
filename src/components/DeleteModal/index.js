import React from "react";
import PropTypes from "prop-types";
import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Alert,
} from "reactstrap";

const DeleteModal = ({ showModal, closeModal, onSuccess }) => {
  return (
    <Modal isOpen={showModal} className={"modal-warning"}>
      <ModalHeader toggle={closeModal}>Delete</ModalHeader>
      <ModalBody>
        <h4>
          <Alert color="warning">
            <i className="fa fa-trash fa-lg " /> Are you sure to delete ?
          </Alert>
        </h4>
      </ModalBody>
      <ModalFooter>
        <Button color="warning" onClick={onSuccess}>
          Delete
        </Button>{" "}
        <Button color="secondary" onClick={closeModal}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

DeleteModal.propTypes = {
  showModal: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
};

DeleteModal.defaultProps = {};

export default DeleteModal;
