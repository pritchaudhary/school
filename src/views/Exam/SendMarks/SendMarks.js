import React from "react";
import {
  Card,
  CardBody,
  Label,
  Col,
  Input,
  Button,
  FormGroup,
} from "reactstrap";

const SendMarks = () => {
  return (
    <div className="animated fadeIn">
      {" "}
      <Card>
        <CardBody>
          <FormGroup row>
            <Col xs="12" md="3">
              <Label htmlFor="exam">Exam</Label>
              <Input name="exam" />
            </Col>
            <Col xs="12" md="3">
              <Label htmlFor="class">Class</Label>
              <Input name="class" />
            </Col>
            <Col xs="12" md="3">
              <Label htmlFor="section">Receiver</Label>
              <select className="form-control">
                <option>Parent</option>
                <option>Student</option>
              </select>
            </Col>

            <Col xs="12" md="2">
              <Button color="primary" className="mt-4">
                Send
              </Button>
            </Col>
          </FormGroup>
        </CardBody>
      </Card>
    </div>
  );
};

export default SendMarks;
