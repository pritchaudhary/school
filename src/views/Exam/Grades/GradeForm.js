import React from "react";
import { Form } from "react-final-form";
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  FormGroup,
  Col,
  Label,
} from "reactstrap";
import InputField from "../../../components/Common/InputField";

const GradeForm = ({ toggle, show }) => {
  const onFormSubmit = (values) => {};
  return (
    <Modal isOpen={show} toggle={toggle} className="modal-primary">
      <ModalHeader toggle={toggle}>Grade</ModalHeader>
      <ModalBody>
        <Form
          onSubmit={onFormSubmit}
          mutators={{}}
          render={({
            handleSubmit,
            submitting,
            submitError,
            dirtySinceLastSubmit,
            values,
            form,
          }) => (
            <form onSubmit={handleSubmit}>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="name">Name</Label>
                </Col>
                <Col xs="12" md="10">
                  <InputField name="name" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="GradePoint">GradePoint</Label>
                </Col>
                <Col xs="12" md="10">
                  <InputField name="GradePoint" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="MarkFrom">Mark From</Label>
                </Col>
                <Col xs="12" md="10">
                  <InputField name="MarkFrom" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="MarkTo">Mark To</Label>
                </Col>
                <Col xs="12" md="10">
                  <InputField name="MarkTo" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="Comment">Comment</Label>
                </Col>
                <Col xs="12" md="10">
                  <InputField name="Comment" type="textarea" />
                </Col>
              </FormGroup>

              <pre>{JSON.stringify(values, null, 2)}</pre>
            </form>
          )}
        />
      </ModalBody>
      <ModalFooter>
        <Button color="success" onClick={toggle}>
          Save
        </Button>{" "}
        <Button color="danger" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default GradeForm;
