import React from "react";
import {
  Table,
  Card,
  CardBody,
  Label,
  Col,
  Input,
  Button,
  FormGroup,
} from "reactstrap";

const ManageMarks = () => {
  return (
    <div className="animated fadeIn">
      <Card>
        <CardBody>
          <FormGroup row>
            <Col xs="12" md="3">
              <Label htmlFor="exam">Exam</Label>
              <Input name="exam" />
            </Col>
            <Col xs="12" md="2">
              <Label htmlFor="class">Class</Label>
              <Input name="class" />
            </Col>
            <Col xs="12" md="3">
              <Label htmlFor="section">Section</Label>
              <Input name="section" />
            </Col>
            <Col xs="12" md="3">
              <Label htmlFor="subject">Subject</Label>
              <Input name="subject" />
            </Col>
            <Col xs="12" md="1">
              <Button color="primary" className="mt-4">
                Go
              </Button>
            </Col>
          </FormGroup>
          <hr />
          <Table hover responsive bordered size="sm">
            <thead className="thead-light">
              <tr>
                <th className="text-center">
                  <i className="icon-people"></i>
                  ID
                </th>
                <th>Student Name</th>
                <th>Exam</th>
                <th>Date</th>
                <th>Mark</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">
                  <div className="avatar">1</div>
                </td>
                <td>
                  <div>Ketan Jedhe</div>
                </td>
                <td>Mid term</td>
                <td>15-08-1947</td>
                <td>
                  <Input />
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default ManageMarks;
