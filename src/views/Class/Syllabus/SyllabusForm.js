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

const SectionForm = ({ toggle, show }) => {
  const onFormSubmit = (values) => {};
  return (
    <Modal isOpen={show} toggle={toggle} className="modal-primary">
      <ModalHeader toggle={toggle}>Add</ModalHeader>
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
                  <Label htmlFor="Title">Title</Label>
                </Col>
                <Col xs="12" md="10">
                  <InputField name="Title" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="Description">Description</Label>
                </Col>
                <Col xs="12" md="10">
                  <InputField name="Description" type="textarea" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="Class">Class</Label>
                </Col>
                <Col xs="12" md="10">
                  <select className="form-control">
                    <option>Class 1</option>
                    <option>Class 2</option>
                  </select>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="Subject">Subject</Label>
                </Col>
                <Col xs="12" md="10">
                  <select className="form-control">
                    <option>Marathi</option>
                    <option>English</option>
                  </select>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="File">File</Label>
                </Col>
                <Col xs="12" md="10">
                  <InputField name="File" type="file" />
                </Col>
              </FormGroup>

              <pre>{JSON.stringify(values, null, 2)}</pre>
            </form>
          )}
        />
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>
          Do Something
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default SectionForm;
