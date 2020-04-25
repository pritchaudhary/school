import React, { useState, useEffect, useCallback } from "react";
import { Card, CardBody, CardHeader, Col, Row, FormGroup } from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { set, remove } from "../../../../redux/modules/doctor";
import List from "../../../../components/Doctor/List";
import Delete from "../../../../components/DeleteModal";
import NewButton from "../../../../components/Common/HeaderButton";

import { doctors } from "./doctorMock";
export const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Test = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const dispatch = useDispatch();

  const list = useSelector((globalState) => globalState.doctors.data);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        await sleep(100);
        dispatch(set(doctors));
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    };
    if (list === null) loadData();
  }, [dispatch, list]);

  const openModal = useCallback((deleteId) => {
    setShowModal(true);
    setDeleteId(deleteId);
  }, []);

  const closeModal = useCallback(() => {
    setShowModal(false);
  }, []);

  const deleteSuccess = useCallback(() => {
    dispatch(remove(deleteId));
    setShowModal(false);
  }, [deleteId, dispatch]);

  return (
    <div className="animated fadeIn">
      <Row>
        <Col xs="12" sm="12">
          <Card>
            <CardHeader>
              <FormGroup>
                <Row>
                  <Col xs="12" md="6">
                    <strong>List</strong>
                  </Col>
                  <Col xs="12" md="6">
                    <NewButton toUrl="/master/doctor-add" text="Add Doctor" />
                  </Col>
                </Row>
              </FormGroup>
            </CardHeader>
            <CardBody>
              {!loading && list !== null && (
                <List data={list} openModal={openModal} />
              )}
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Delete
        showModal={showModal}
        closeModal={closeModal}
        onSuccess={deleteSuccess}
      />
    </div>
  );
};

export default Test;
