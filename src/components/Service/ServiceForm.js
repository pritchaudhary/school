import React from "react";
import PropTypes from "prop-types";
import { Field } from "react-final-form";
import { FormGroup, Input, Label, Col } from "reactstrap";
import Select from "react-select";
import { useSelector } from "react-redux";

const Service = ({ values }) => {
  const departments = useSelector(
    (globalState) => globalState.departments.data
  );

  const departmentOptions = departments.map(({ id, name }) => ({
    label: name,
    value: id,
  }));

  return (
    <>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="name">Name</Label>
        </Col>
        <Col xs="12" md="10">
          <Field name="name">
            {({ input, meta }) => (
              <>
                <Input type="text" id="name" {...input} />
              </>
            )}
          </Field>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col md="2">
          <Label htmlFor="code">Code</Label>
        </Col>
        <Col xs="12" md="2">
          <Field name="code">
            {({ input, meta }) => (
              <>
                <Input type="text" {...input} />
              </>
            )}
          </Field>
        </Col>

        <Col xs="12" md="2">
          <Label htmlFor="rate">Rate</Label>
        </Col>
        <Col xs="12" md="2">
          <Field name="rate">
            {({ input, meta }) => (
              <>
                <Input type="text" {...input} />
              </>
            )}
          </Field>
        </Col>

        <Col xs="12" md="2">
          <Label htmlFor="format">Format</Label>
        </Col>
        <Col xs="12" md="2">
          <Field name="format">
            {({ input, meta }) => (
              <>
                <Input type="text" {...input} />
              </>
            )}
          </Field>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col xs="12" md="2">
          <Label htmlFor="department">Department</Label>
        </Col>
        <Col xs="12" md="4">
          <Field name="department">
            {({ input: { onChange, name } }) => (
              <Select
                name={name}
                value={
                  values.department
                    ? departmentOptions.filter(
                        (x) => x.value === values.department
                      )
                    : values.department
                }
                options={departmentOptions}
                onChange={(value) => {
                  onChange(value.value);
                }}
              />
            )}
          </Field>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col xs="12" md="2">
          <Label htmlFor="footer">Footer</Label>
        </Col>
        <Col xs="12" md="10">
          <Field name="footer">
            {({ input, meta }) => (
              <>
                <Input type="textarea" {...input} row="5" />
              </>
            )}
          </Field>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col xs="12" md="2">
          <Label htmlFor="RepostName">Report Name</Label>
        </Col>
        <Col xs="12" md="10">
          <Field name="ReportName">
            {({ input, meta }) => (
              <>
                <Input type="text" {...input} />
              </>
            )}
          </Field>
        </Col>
      </FormGroup>
    </>
  );
};

Service.propTypes = {
  values: PropTypes.object,
};

Service.defaultProps = {
  values: {},
};
export default Service;
