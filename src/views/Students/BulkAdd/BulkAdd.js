import React, { useEffect } from "react";
import { Form } from "react-final-form";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  FormGroup,
  Alert,
  Label,
  Button,
} from "reactstrap";
import { useDispatch } from "react-redux";
import { add } from "../../../redux/modules/doctor";

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const BulkAdd = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const onFormSubmit = async (values) => {
    console.log(values);
    await sleep(300);
    dispatch(
      add({
        ...values,
        id: Math.floor(Math.random() * 100),
        name: values.firstName + " " + values.lastName,
      })
    );
    props.history.push("/master/doctor");
  };

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
                <FormGroup>
                  <Row>
                    <Col xs="12" md="6">
                      <strong>Bulk Add</strong>
                    </Col>
                  </Row>
                </FormGroup>
              </CardHeader>
              <CardBody>
                <FormGroup row className="my-0">
                  <Col xs="12" md="4">
                    <FormGroup>
                      <Label htmlFor="firstName">Class</Label>
                      <select className="form-control">
                        <option>Select Class</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="4">
                    <FormGroup>
                      <Label htmlFor="lastName">Section</Label>
                      <select className="form-control">
                        <option>Select Section</option>
                      </select>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row className="my-0">
                  <Col xs="12" md="4">
                    <FormGroup>
                      <Button color="primary" size="sm" className=" mr-1">
                        Generate Csv
                      </Button>
                      <Button color="warning" size="sm" className=" mr-1">
                        Select Csv
                      </Button>
                      <Button color="success" size="sm" className=" mr-1">
                        Import Csv
                      </Button>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Alert>
                    <ol>
                      <li>At First Select The Class And Section.</li>
                      <li>
                        After Selecting Class And Section Click "Generate CSV
                        File".
                      </li>
                      <li>
                        Open The Downloaded "bulk_student.csv" File. Enter
                        Student Details As Written In There And Remember Take
                        The Parent ID From Parent Table.
                      </li>
                      <li>Save The Edited "bulk_student.csv" File.</li>
                      <li>
                        Click The "Select CSV File" And Choose The File You Just
                        Edited.
                      </li>
                      <li>Import That File.</li>
                      <li>Hit "Import CSV File".</li>
                    </ol>
                  </Alert>
                </FormGroup>
              </CardBody>
            </Card>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
};

export default BulkAdd;
