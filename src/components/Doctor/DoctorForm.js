import React from "react";
import { Field } from "react-final-form";
import { Col, FormGroup, Label } from "reactstrap";
import InputField from "../Common/InputField";

const DoctorForm = () => {
  return (
    <>
      <FormGroup row className="my-0">
        <Col xs="12" md="6">
          <FormGroup>
            <Label htmlFor="firstName">First Name</Label>
            <InputField name="firstName" />
          </FormGroup>
        </Col>
        <Col xs="12" md="6">
          <FormGroup>
            <Label htmlFor="lastName">Last Name</Label>
            <InputField name="lastName" />
          </FormGroup>
        </Col>
      </FormGroup>

      <FormGroup row className="my-0">
        <Col xs="12" md="3">
          <FormGroup>
            <Label htmlFor="dob">Date Of Birth</Label>
            <InputField name="dob" type="date" />
          </FormGroup>
        </Col>
        <Col xs="12" md="3">
          <FormGroup>
            <Label htmlFor="gender">Gender</Label>
            <Field name="gender">
              {({ input, meta }) => (
                <>
                  <select className="form-control" {...input}>
                    <option value="0">-Gender-</option>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                  </select>
                </>
              )}
            </Field>
          </FormGroup>
        </Col>
        <Col xs="12" md="3">
          <FormGroup>
            <Label htmlFor="speciality">Speciality</Label>
            <InputField name="speciality" />
          </FormGroup>
        </Col>
        <Col xs="12" md="3">
          <FormGroup>
            <Label htmlFor="contactno">Contact No</Label>
            <InputField name="contactno" />
          </FormGroup>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col xs="12" md="6">
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <InputField name="email" type="email" />
          </FormGroup>
        </Col>

        <Col xs="12" md="6">
          <FormGroup>
            <Label htmlFor="address">Address</Label>
            <InputField name="address" type="textarea" />
          </FormGroup>
        </Col>
      </FormGroup>
    </>
  );
};

export default DoctorForm;
