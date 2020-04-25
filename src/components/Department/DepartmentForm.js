import React from "react";
import { Field } from "react-final-form";
import { FormGroup, Input, Label } from "reactstrap";

const Department = () => {
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
        <Label htmlFor="description">Description</Label>
        <Field name="description">
          {({ input, meta }) => (
            <>
              <Input type="textarea" {...input} row="5" />
            </>
          )}
        </Field>
      </FormGroup>
    </>
  );
};

export default Department;
