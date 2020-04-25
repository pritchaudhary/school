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
import DepartmentForm from "../../../../components/Department/DepartmentForm";
import { update } from "../../../../redux/modules/department";
import FooterButtons from "../../../../components/Common/FooterButtons";

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const initialState = {};
const DoctorEdit = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const departmentList = useSelector(
    (globalState) => globalState.departments.data
  );

  const { id } = props.match.params;

  useEffect(() => {
    const [selectedDoctor] = departmentList.filter((x) => x.id === Number(id));
    setState(selectedDoctor);
  }, [departmentList, id]);

  const onFormSubmit = async (values) => {
    await sleep(300);
    dispatch(update(id, values));
    props.history.push("/master/department");
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
                          <strong>Department Edit</strong>
                        </Col>
                      </Row>
                    </FormGroup>
                  </CardHeader>
                  <CardBody>
                    <DepartmentForm />
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

export default DoctorEdit;
