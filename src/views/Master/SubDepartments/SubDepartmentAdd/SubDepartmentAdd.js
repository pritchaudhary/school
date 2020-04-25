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
import SubDepartmentForm from "../../../../components/SubDepartment/SubDepartmentForm";
import { add } from "../../../../redux/modules/subDepartment";
import FooterButtons from "../../../../components/Common/FooterButtons";

export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const SubDepartment = (props) => {
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
    props.history.push("/master/sub-department");
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
            <Row>
              <Col xs="12" sm="12">
                <Card>
                  <CardHeader>
                    <FormGroup>
                      <Row>
                        <Col xs="12" md="6">
                          <strong>Sub Department Add</strong>
                        </Col>
                      </Row>
                    </FormGroup>
                  </CardHeader>
                  <CardBody>
                    <SubDepartmentForm />
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

export default SubDepartment;
