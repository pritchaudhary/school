import React, { useEffect } from "react";
import { Form } from "react-final-form";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  FormGroup,
  CardFooter,
} from "reactstrap";
import { useDispatch } from "react-redux";
import Add from "../../../components/Student/Form";
import { add } from "../../../redux/modules/doctor";
import FooterButtons from "../../../components/Common/FooterButtons";

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AddStudent = (props) => {
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
                      <strong>Add Student</strong>
                    </Col>
                  </Row>
                </FormGroup>
              </CardHeader>
              <CardBody>
                <Add />
              </CardBody>
              <CardFooter>
                <FooterButtons
                  backUrl="/student/list"
                  submitting={submitting}
                />
              </CardFooter>
            </Card>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
};

export default AddStudent;
