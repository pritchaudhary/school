import React, { useState } from "react";
import {
  Table,
  Card,
  CardHeader,
  CardBody,
  Row,
  Label,
  Col,
  Input,
  Button,
} from "reactstrap";
import SyllabusForm from "./SyllabusForm";

const Syllabus = () => {
  const [show, setShow] = useState(false);

  const toggle = () => {
    setShow(!show);
  };

  return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader>
          <Row>
            <Col xs="12" md="1">
              <Label>
                <strong>Class</strong>
              </Label>
            </Col>
            <Col xs="12" md="3">
              <select className="form-control">
                <option>1 st</option>
                <option>2 nd</option>
                <option>3 rd</option>
                <option>4 th</option>
              </select>
            </Col>
            <Col xs="12" md="1">
              <Label>Name</Label>
            </Col>
            <Col xs="12" md="3">
              <Input type="text" placeholder="Search by Name" />
            </Col>
            <Col xs="12" md="4">
              <Button
                type="button"
                size="sm"
                color="primary"
                className="pull-right"
                onClick={toggle}
              >
                <i className="fa fa-plus fa-lg"></i> Add
              </Button>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Table hover responsive bordered size="sm">
            <thead className="thead-light">
              <tr>
                <th className="text-center">
                  <i className="icon-people"></i>
                  Title
                </th>
                <th>Description</th>
                <th className="text-center">Subject</th>
                <th className="text-center">Uploadre</th>
                <th>Date</th>
                <th>File</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">
                  <div className="avatar">1</div>
                </td>
                <td>
                  <div>FIRST</div>
                </td>
                <td className="text-center">1 st</td>
                <td>TEACHER 1</td>
                <td>11-12-2000</td>
                <td>File.pdf</td>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="avatar">1</div>
                </td>
                <td>
                  <div>SECOND</div>
                </td>
                <td className="text-center">2 nd</td>
                <td>TEACHER 2</td>
                <td>11-12-2000</td>
                <td>File.pdf</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <SyllabusForm toggle={toggle} show={show} />
    </div>
  );
};

export default Syllabus;
