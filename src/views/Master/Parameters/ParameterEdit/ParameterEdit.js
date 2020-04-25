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
import ParameterForm from "../../../../components/Parameter/Form";
import { update } from "../../../../redux/modules/parameter";
import FooterButtons from "../../../../components/Common/FooterButtons";

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const initialState = {};

const Edit = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const doctorList = useSelector((globalState) => globalState.doctors.data);

  const { id } = props.match.params;

  useEffect(() => {
    const [selectedDoctor] = doctorList.filter((x) => x.id === Number(id));
    setState(selectedDoctor);
  }, [doctorList, id]);

  const onFormSubmit = async (values) => {
    console.log(values);
    await sleep(300);
    dispatch(
      update(id, { ...values, name: values.firstName + " " + values.lastName })
    );
    props.history.push("/master/parameter");
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
          <form onSubmit={handleSubmit}>
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
                    <ParameterForm />
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

export default Edit;
