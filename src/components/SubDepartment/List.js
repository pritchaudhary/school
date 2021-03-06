import React from "react";
import PropTypes from "prop-types";
import { Table } from "reactstrap";
import Action from "../Common/ActionButtons";

const List = ({ data, openModal }) => {
  return (
    <Table hover bordered striped responsive size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data.map((dt) => (
          <tr key={String(dt.id)}>
            <td> {dt.id}</td>
            <td>
              <b>{dt.name}</b>
            </td>
            <td>{dt.department}</td>
            <td>
              <Action
                id={dt.id}
                url="/master/sub-department-edit/"
                openModal={openModal}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

List.propTypes = {
  data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)),
  openModal: PropTypes.func,
};

List.defaultProps = {
  data: [],
  openModal: undefined,
};

export default List;
