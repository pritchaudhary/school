import React from "react";
import { Col, FormGroup, Label } from "reactstrap";
import InputField from "../Common/InputField";

const Form = () => {
  return (
    <>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="name">Id No.</Label>
        </Col>
        <Col xs="12" md="3">
          <InputField name="idNo" />
        </Col>
        <Col md="2">
          <Label htmlFor="name">Name</Label>
        </Col>
        <Col xs="12" md="3">
          <InputField name="name" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="gender">Gender</Label>
        </Col>
        <Col xs="12" md="3">
          <InputField name="gender" />
        </Col>
        <Col md="2">
          <Label htmlFor="dob">Dob</Label>
        </Col>
        <Col xs="12" md="3">
          <InputField name="dob" type="date" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="class">Class</Label>
        </Col>
        <Col xs="12" md="3">
          <InputField name="class" />
        </Col>
        <Col md="2">
          <Label htmlFor="section">Section</Label>
        </Col>
        <Col xs="12" md="3">
          <InputField name="section" type="text" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="phone">Phone</Label>
        </Col>
        <Col xs="12" md="3">
          <InputField name="phone" />
        </Col>
        <Col md="2">
          <Label htmlFor="parent">Parent</Label>
        </Col>
        <Col xs="12" md="3">
          <InputField name="parent" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="email">Email</Label>
        </Col>
        <Col xs="12" md="3">
          <InputField name="email" />
        </Col>
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
        <Col md="2">
          <Label htmlFor="address">Address</Label>
        </Col>
        <Col xs="12" md="3">
          <InputField name="address" type="textarea" />
        </Col>
      </FormGroup>
      <hr />
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="package">Package</Label>
        </Col>
        <Col xs="12" md="3">
          <select className="form-control">
            <option value="1">Package 1</option>
            <option value="2">Package 2</option>
            <option value="3">Package 3</option>
            <option value="4">Package 4</option>
          </select>
        </Col>
        <Col md="2">
          <Label htmlFor="totalFees">Total Fees</Label>
        </Col>
        <Col xs="12" md="3">
          <InputField name="totalFees" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="advance">Advance</Label>
        </Col>
        <Col xs="12" md="3">
          <InputField name="advance" />
        </Col>
        <Col md="2">
          <Label htmlFor="balance">Balance</Label>
        </Col>
        <Col xs="12" md="3">
          <InputField name="balance" />
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="package">Payment Mode</Label>
        </Col>
        <Col xs="12" md="3">
          <select className="form-control">
            <option value="1">Cash</option>
            <option value="2">Check</option>
            <option value="3">Card</option>
          </select>
        </Col>
        <Col md="2">
          <Label htmlFor="date">Date</Label>
        </Col>
        <Col xs="12" md="3">
          <InputField name="date" type="date" />
        </Col>
      </FormGroup>
    </>
  );
};

export default Form;
