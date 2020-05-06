import React from "react";
import {
  FormGroup,
  Input,
  Label,
  Col,
  Button,
  Card,
  CardBody,
  Badge,
  Table,
} from "reactstrap";
import { AppSwitch } from "@coreui/react";

const Student = () => {
  return (
    <div className="animated fadeIn">
      <Card>
        <CardBody>
          <FormGroup row>
            <Col xs="12" md="3">
              <Label htmlFor="company">Class</Label>
              <Input type="text" id="company" />
            </Col>
            <Col xs="12" md="3">
              <Label htmlFor="company">Section</Label>
              <Input type="text" id="company" />
            </Col>
            <Col xs="12" md="3">
              <Label htmlFor="company">Date</Label>
              <Input type="date" id="company" />
            </Col>
            <Col xs="12" md="3">
              <Button className="mt-4" color="info">
                Load List
              </Button>
            </Col>
          </FormGroup>
          <hr />
          <Table hover bordered striped responsive size="sm">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Present/Absent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Vishnu Serghei</td>
                <td>
                  <AppSwitch
                    className={"mx-1"}
                    variant={"pill"}
                    color={"success"}
                    defaultChecked
                    label
                    dataOn={"\u2713"}
                    dataOff={"\u2715"}
                  />
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Student;
