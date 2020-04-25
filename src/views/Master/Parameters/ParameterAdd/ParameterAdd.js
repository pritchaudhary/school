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
import ParameterForm from "../../../../components/Parameter/Form";
import { add } from "../../../../redux/modules/parameter";
import FooterButtons from "../../../../components/Common/FooterButtons";

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const DoctorAdd = (props) => {
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
          <form onSubmit={handleSubmit} className="form-horizontal">
            <Row>
              <Col xs="12" sm="12">
                <Card>
                  <CardHeader>
                    <FormGroup>
                      <Row>
                        <Col xs="12" md="6">
                          <strong>Parameter</strong>
                        </Col>
                      </Row>
                    </FormGroup>
                  </CardHeader>
                  <CardBody>
                    <ParameterForm values={values} form={form} />
                  </CardBody>
                  <CardFooter>
                    <FooterButtons
                      backUrl="/parameter"
                      submitting={submitting}
                    />
                  </CardFooter>
                </Card>
              </Col>
            </Row>
            <pre>{JSON.stringify(values, null, 2)}</pre>
          </form>
        )}
      />
    </div>
  );
};

export default DoctorAdd;
