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
import ServiceForm from "../../../../components/Service/ServiceForm";
import { add } from "../../../../redux/modules/service";
import FooterButtons from "../../../../components/Common/FooterButtons";

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Service = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const onFormSubmit = async (values) => {
    await sleep(300);
    dispatch(
      add({
        ...values,
        id: Math.floor(Math.random() * 100),
      })
    );
    props.history.push("/master/service");
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
                          <strong>Service Add</strong>
                        </Col>
                      </Row>
                    </FormGroup>
                  </CardHeader>
                  <CardBody>
                    <ServiceForm values={values} />
                  </CardBody>
                  <CardFooter>
                    <FooterButtons
                      backUrl="/department"
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

export default Service;
