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
import NoticeForm from "./NoticeForm";

const Notice = () => {
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
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">
                  <div className="avatar">1</div>
                </td>
                <td>Holiday</td>
                <td>
                  <div>
                    Dear Parents, This is to inform that School will remain
                    closed from 1 January to 15 January 2019 for Winter
                    Vacations and will re-open on 16 January 2019. -PRINCIPAL{" "}
                  </div>
                </td>
                <td>
                  <Action />
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
      <NoticeForm toggle={toggle} show={show} />
    </div>
  );
};

export default Notice;
