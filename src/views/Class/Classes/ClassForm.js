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

const ClassForm = ({ toggle, show }) => {
  const onFormSubmit = (values) => {};
  return (
    <Modal isOpen={show} toggle={toggle} className="modal-primary modal-lg">
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
                  <Label htmlFor="name">Name</Label>
                </Col>
                <Col xs="12" md="10">
                  <InputField name="name" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="Alias">Alias</Label>
                </Col>
                <Col xs="12" md="10">
                  <InputField name="Alias" />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="Teacher">Teacher</Label>
                </Col>
                <Col xs="12" md="10">
                  <select className="form-control">
                    <option>Teacher 1</option>
                    <option>Teacher 2</option>
                  </select>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="StartInTime">Start In Time</Label>
                </Col>
                <Col xs="12" md="3">
                  <select className="form-control">
                    <option>Hour</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </Col>
                <Col xs="12" md="3">
                  <select className="form-control">
                    <option>Minute</option>
                    <option>0</option>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                  </select>
                </Col>
                <Col xs="12" md="3">
                  <select className="form-control">
                    <option>am</option>
                    <option>pm</option>
                  </select>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="StartInTime">Start Out Time</Label>
                </Col>
                <Col xs="12" md="3">
                  <select className="form-control">
                    <option>Hour</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </Col>
                <Col xs="12" md="3">
                  <select className="form-control">
                    <option>Minute</option>
                    <option>0</option>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                  </select>
                </Col>
                <Col xs="12" md="3">
                  <select className="form-control">
                    <option>am</option>
                    <option>pm</option>
                  </select>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="StartInTime">Ending In Time</Label>
                </Col>
                <Col xs="12" md="3">
                  <select className="form-control">
                    <option>Hour</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </Col>
                <Col xs="12" md="3">
                  <select className="form-control">
                    <option>Minute</option>
                    <option>0</option>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                  </select>
                </Col>
                <Col xs="12" md="3">
                  <select className="form-control">
                    <option>am</option>
                    <option>pm</option>
                  </select>
                </Col>
              </FormGroup>

              <FormGroup row>
                <Col md="2">
                  <Label htmlFor="StartInTime">Ending Out Time</Label>
                </Col>
                <Col xs="12" md="3">
                  <select className="form-control">
                    <option>Hour</option>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </Col>
                <Col xs="12" md="3">
                  <select className="form-control">
                    <option>Minute</option>
                    <option>0</option>
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                  </select>
                </Col>
                <Col xs="12" md="3">
                  <select className="form-control">
                    <option>am</option>
                    <option>pm</option>
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
export default ClassForm;
