import React from "react";
import { FormGroup, Input, Label } from "reactstrap";

const Student = () => {
  return (
    <div className="animated fadeIn">
      <FormGroup>
        <Label htmlFor="company">Company</Label>
        <Input type="text" id="company" placeholder="Enter your company name" />
      </FormGroup>
    </div>
  );
};

export default Student;
