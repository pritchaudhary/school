import React from "react";
import { Field } from "react-final-form";
import { FormGroup, Input, Label } from "reactstrap";
import { useSelector } from "react-redux";
import Select from "react-select";

import PropTypes from "prop-types";

const SubDepartment = ({ values }) => {
  const departments = useSelector(
    (globalState) => globalState.departments.data
  );

  const departmentOptions = departments.map(({ id, name }) => ({
    label: name,
    value: id,
  }));

  return (
    <>
      <FormGroup>
        <Label htmlFor="name">Name</Label>
        <Field name="name">
          {({ input, meta }) => (
            <>
              <Input type="text" id="name" {...input} />
            </>
          )}
        </Field>
      </FormGroup>

      <FormGroup>
        <Label htmlFor="department">Description</Label>
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
      </FormGroup>
    </>
  );
};

SubDepartment.propTypes = {
  values: PropTypes.object,
};

SubDepartment.defaultProps = {
  values: {},
};

export default SubDepartment;
