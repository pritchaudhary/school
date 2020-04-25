import React from "react";
import { Field } from "react-final-form";
import { Col, FormGroup, Input, Label } from "reactstrap";
//import { useSelector } from "react-redux";
import Select from "react-select";

const ParameterForm = ({ values, form }) => {
  //const parameters = useSelector((globalState) => globalState.parameters.data);

  // const parameterOptions = parameters.map(({ id, name }) => ({
  //   label: name,
  //   value: id,
  // }));

  const parameterOptions = [
    {
      label: "Parameter 1",
      value: 1,
    },
    {
      label: "Parameter 2",
      value: 2,
    },
  ];
  const setFormulae = (val) => {
    const currentFormulae = values.formulae;
    const formulae =
      (currentFormulae ? currentFormulae : "") + "{" + String(val) + "}";
    form.change("formulae", formulae);
  };

  return (
    <>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="name">Name</Label>
        </Col>
        <Col xs="12" md="9">
          <Field name="name">
            {({ input, meta }) => (
              <>
                <Input type="text" {...input} />
              </>
            )}
          </Field>
        </Col>
      </FormGroup>

      <FormGroup row>
        <Col md="2">
          <Label htmlFor="reportName">Report Name</Label>
        </Col>
        <Col xs="12" md="9">
          <Field name="reportName">
            {({ input, meta }) => (
              <>
                <Input type="text" {...input} />
              </>
            )}
          </Field>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="unit">Unit</Label>
        </Col>
        <Col xs="12" md="3">
          <Field name="unit">
            {({ input, meta }) => (
              <>
                <Input type="text" {...input} />
              </>
            )}
          </Field>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="rate">Rate</Label>
        </Col>
        <Col xs="12" md="3">
          <Field name="rate">
            {({ input, meta }) => (
              <>
                <Input type="text" {...input} />
              </>
            )}
          </Field>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="method">Method</Label>
        </Col>
        <Col xs="12" md="10">
          <Field name="method">
            {({ input, meta }) => (
              <>
                <Input type="text" {...input} />
              </>
            )}
          </Field>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="suffix">Suffix</Label>
        </Col>
        <Col xs="12" md="3">
          <Field name="suffix">
            {({ input, meta }) => (
              <>
                <Input type="text" {...input} />
              </>
            )}
          </Field>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="formulae">Formulae</Label>
        </Col>
        <Col xs="12" md="3">
          <Field name="formulae">
            {({ input, meta }) => (
              <>
                <Input type="text" {...input} />
              </>
            )}
          </Field>
        </Col>
      </FormGroup>
      <FormGroup row>
        <Col md="2">
          <Label htmlFor="formulae"></Label>
        </Col>
        <Col xs="12" md="3">
          <Field name="formulae">
            {({ input, meta }) => (
              <>
                <Field name="department">
                  {({ input: { name } }) => (
                    <Select
                      placeholder="Select parameter for formulae"
                      name={name}
                      options={parameterOptions}
                      onChange={(value) => {
                        setFormulae(value.value);
                      }}
                    />
                  )}
                </Field>
              </>
            )}
          </Field>
        </Col>
      </FormGroup>
    </>
  );
};

ParameterForm.propTypes = {};

ParameterForm.defaultProps = {};

export default ParameterForm;
