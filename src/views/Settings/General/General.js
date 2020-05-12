import React from "react";
import { Form } from "react-final-form";
import {
  Card,
  CardHeader,
  CardBody,
  Label,
  Col,
  Button,
  FormGroup,
  CardFooter,
} from "reactstrap";
import InputField from "../../../components/Common/InputField";

const General = () => {
  const onFormSubmit = () => {};
  return (
    <div className="animated fadeIn">
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
            <Card>
              <CardHeader>General Settings</CardHeader>
              <CardBody>
                {" "}
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="SchoolName">School Name</Label>
                  </Col>
                  <Col xs="12" md="10">
                    <InputField name="SchoolName" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="Addtess">Addtess</Label>
                  </Col>
                  <Col xs="12" md="10">
                    <InputField name="Addtess" type="textarea" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="Phone">Phone</Label>
                  </Col>
                  <Col xs="12" md="10">
                    <InputField name="Phone" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="Email">Email</Label>
                  </Col>
                  <Col xs="12" md="10">
                    <InputField name="Email" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="CuttentSession">Cuttent Session</Label>
                  </Col>
                  <Col xs="12" md="10">
                    <select className="form-control">
                      <option>2020-2021</option>
                      <option selected>2019-2020</option>
                      <option>2018-2019</option>
                    </select>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="Logo">Logo</Label>
                  </Col>
                  <Col xs="12" md="10">
                    <InputField name="Logo" type="file" />
                  </Col>
                </FormGroup>
                <pre>{JSON.stringify(values, null, 2)}</pre>
              </CardBody>
              <CardFooter>
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
              </CardFooter>
            </Card>
          </form>
        )}
      />
    </div>
  );
};

export default General;
