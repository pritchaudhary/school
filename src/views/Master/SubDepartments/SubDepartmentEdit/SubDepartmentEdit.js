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
import DepartmentForm from "../../../../components/SubDepartment/SubDepartmentForm";
import { update } from "../../../../redux/modules/subDepartment";
import FooterButtons from "../../../../components/Common/FooterButtons";

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const initialState = {};
const SubDepartmentEdit = (props) => {
  const dispatch = useDispatch();
  const [state, setState] = useState(initialState);
  const subDepartmentList = useSelector(
    (globalState) => globalState.subDepartments.data
  );

  const { id } = props.match.params;

  useEffect(() => {
    const [selectedDoctor] = subDepartmentList.filter(
      (x) => x.id === Number(id)
    );
    setState(selectedDoctor);
  }, [subDepartmentList, id]);

  const onFormSubmit = async (values) => {
    await sleep(300);
    dispatch(update(id, values));
    props.history.push("/master/sub-department");
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
                          <strong>Sub Department Edit</strong>
                        </Col>
                      </Row>
                    </FormGroup>
                  </CardHeader>
                  <CardBody>
                    <DepartmentForm values={values} />
                  </CardBody>
                  <CardFooter>
                    <FooterButtons
                      backUrl="/master/sub-department"
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

export default SubDepartmentEdit;
