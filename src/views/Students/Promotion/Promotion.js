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

const Promotion = (props) => {
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
                      <strong>Promote Student</strong>
                    </Col>
                  </Row>
                </FormGroup>
              </CardHeader>
              <CardBody>
                <FormGroup row className="my-0">
                  <Col xs="12" md="3">
                    <FormGroup>
                      <Label htmlFor="firstName">Current Session</Label>
                      <select className="form-control">
                        <option>Select Class</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="3">
                    <FormGroup>
                      <Label htmlFor="lastName">Promote To Session</Label>
                      <select className="form-control">
                        <option>Select Section</option>
                      </select>
                    </FormGroup>
                  </Col>

                  <Col xs="12" md="3">
                    <FormGroup>
                      <Label htmlFor="lastName">Promotion From Class</Label>
                      <select className="form-control">
                        <option>Select Section</option>
                      </select>
                    </FormGroup>
                  </Col>
                  <Col xs="12" md="3">
                    <FormGroup>
                      <Label htmlFor="lastName">Promotion To Class</Label>
                      <select className="form-control">
                        <option>Select Section</option>
                      </select>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row className="my-0">
                  <Col xs="12" md="4">
                    <FormGroup>
                      <Button color="success" size="sm" className=" mr-1">
                        Promote
                      </Button>
                    </FormGroup>
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Alert>
                    <h4> Student Promotion Notes </h4>
                    Promoting student from the present class to the next class
                    will create an enrollment of that student to the next
                    session. Make sure to select correct class options from the
                    select menu before promoting.If you don't want to promote a
                    student to the next class, please select that option. That
                    will not promote the student to the next class but it will
                    create an enrollment to the next session but in the same
                    class.
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

export default Promotion;
