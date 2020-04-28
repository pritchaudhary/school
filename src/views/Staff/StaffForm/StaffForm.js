import React from "react";
import { Form } from "react-final-form";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  CardFooter,
  FormGroup,
  Label,
} from "reactstrap";
import InputField from "../../../components/Common/InputField";
import FooterButtons from "../../../components/Common/FooterButtons";

const AddStaff = () => {
  const onFormSubmit = (values) => {};
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
              <CardHeader>
                <strong>Add Staff</strong>
              </CardHeader>
              <CardBody>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="name">Id No.</Label>
                  </Col>
                  <Col xs="12" md="3">
                    <InputField name="idNo" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="name">Name</Label>
                  </Col>
                  <Col xs="12" md="3">
                    <InputField name="name" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="role">Role</Label>
                  </Col>
                  <Col xs="12" md="3">
                    <select className="form-control">
                      <option>Teacher</option>
                      <option>Librarian</option>
                      <option>Accountant</option>
                      <option>Staff</option>
                    </select>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="dob">DOB</Label>
                  </Col>
                  <Col xs="12" md="3">
                    <InputField name="dob" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="gender">Gender</Label>
                  </Col>
                  <Col xs="12" md="3">
                    <select className="form-control">
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="mobile">Mobile</Label>
                  </Col>
                  <Col xs="12" md="3">
                    <InputField name="mobile" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="email">Email</Label>
                  </Col>
                  <Col xs="12" md="3">
                    <InputField name="email" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="email">Email</Label>
                  </Col>
                  <Col xs="12" md="3">
                    <InputField name="email" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="password">Password</Label>
                  </Col>
                  <Col xs="12" md="3">
                    <InputField name="password" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="photo">Photo</Label>
                  </Col>
                  <Col xs="12" md="3">
                    <InputField name="photo" type="file" />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col md="2">
                    <Label htmlFor="address">Address</Label>
                  </Col>
                  <Col xs="12" md="10">
                    <InputField name="address" type="textarea" />
                  </Col>
                </FormGroup>
              </CardBody>
              <CardFooter>
                <FooterButtons
                  backUrl="/student/list"
                  submitting={submitting}
                />
              </CardFooter>
            </Card>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
};

export default AddStaff;
