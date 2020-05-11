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
import Action from "../../components/Common/ActionButtons";
import StudyMaterialForm from "./StudyMaterialForm";

const StudyMaterial = () => {
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
              <Label>Name</Label>
            </Col>
            <Col xs="12" md="3">
              <Input type="text" placeholder="Search by Name" />
            </Col>
            <Col xs="12" md="8" className="mt-1">
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
                  ID
                </th>
                <th>Name</th>
                <th className="text-center">Email</th>
                <th>Mobile</th>
                <th className="text-center">Profession</th>
                <th>Action</th>
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
                <td className="text-center">ketan@jedhe.com</td>
                <td>9999999999</td>
                <td className="text-center">CEO</td>

                <td>
                  <Action />
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="avatar">1</div>
                </td>
                <td>
                  <div>Ketan Jedhe</div>
                </td>
                <td className="text-center">ketan@jedhe.com</td>
                <td>9999999999</td>
                <td className="text-center">CEO</td>

                <td>
                  <Action />
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <StudyMaterialForm toggle={toggle} show={show} />
    </div>
  );
};

export default StudyMaterial;
