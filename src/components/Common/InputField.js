import React from "react";
import { Field } from "react-final-form";
import { Input } from "reactstrap";

import PropTypes from "prop-types";

const InputField = ({ name, ...props }) => {
  return (
    <Field name={name}>
      {({ input, meta }) => (
        <>
          <Input type="text" {...input} {...props} />
        </>
      )}
    </Field>
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
};

InputField.defaultProps = {};

export default InputField;
