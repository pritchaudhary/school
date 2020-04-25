import React, { useState, useEffect } from "react";
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

import { useDispatch, useSelector } from "react-redux";
import ServiceForm from "../../../../components/Service/ServiceForm";
import { update } from "../../../../redux/modules/service";
import FooterButtons from "../../../../components/Common/FooterButtons";

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const initialState = {};
const DoctorEdit = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const serviceList = useSelector((globalState) => globalState.services.data);

  const { id } = props.match.params;

  useEffect(() => {
    const [selectedDoctor] = serviceList.filter((x) => x.id === Number(id));
    setState(selectedDoctor);
  }, [serviceList, id]);

  const onFormSubmit = async (values) => {
    console.log(values);
    await sleep(300);
    dispatch(update(id, values));
    props.history.push("/master/service");
  };

  return (
    <div className="animated fadeIn">
      <Form
        initialValues={state}
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
                          <strong>Service Edit</strong>
                        </Col>
                      </Row>
                    </FormGroup>
                  </CardHeader>
                  <CardBody>
                    <ServiceForm values={values} />
                  </CardBody>
                  <CardFooter>
                    <FooterButtons backUrl="/service" submitting={submitting} />
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

export default DoctorEdit;
