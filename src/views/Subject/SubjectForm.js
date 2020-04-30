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
import InputField from "../../components/Common/InputField";

const SubjectForm = ({ toggle, show }) => {
  const onFormSubmit = (values) => {};
  return (
    <Modal isOpen={show} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
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
                  <Label htmlFor="Class">Class</Label>
                </Col>
                <Col xs="12" md="10">
                  <select className="form-control">
                    <option>First</option>
                    <option>Second</option>
                    <option>Third</option>
                  </select>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="Teacher">Teacher</Label>
                </Col>
                <Col xs="12" md="10">
                  <select className="form-control">
                    <option>Teacher 1</option>
                  </select>
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
export default SubjectForm;
