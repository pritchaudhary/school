import React, { useState } from "react";
import {
  Table,
  Progress,
  Card,
  CardHeader,
  CardBody,
  Row,
  Label,
  Col,
  Input,
} from "reactstrap";
import Action from "../../../components/Common/ActionButtons";
import HeaderButton from "../../../components/Common/HeaderButton";

const Staff = () => {
  const [roleText, setRoleText] = useState("Teacher");
  const onRoleChange = (e) => {
    setRoleText(e.target.options[e.target.selectedIndex].text);
  };
  return (
    <div className="animated fadeIn">
      <Card>
        <CardHeader>
          <Row>
            <Col xs="12" md="1">
              <Label>
                <strong>Role</strong>
              </Label>
            </Col>
            <Col xs="12" md="3">
              <select className="form-control" onChange={onRoleChange}>
                <option>Teacher</option>
                <option>Librarian</option>
                <option>Accountant</option>
                <option>Staff</option>
              </select>
            </Col>
            <Col xs="12" md="1">
              <Label>Name</Label>
            </Col>
            <Col xs="12" md="3">
              <Input type="text" placeholder="Search by Name" />
            </Col>
            <Col xs="12" md="4">
              <HeaderButton toUrl="/staff/form" text={`Add ${roleText}`} />
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Table hover responsive bordered size="sm">
            <thead className="thead-light">
              <tr>
                <th className="text-center">
                  <i className="icon-people"></i>
                </th>
                <th>Name</th>
                <th className="text-center">Country</th>
                <th>Usage</th>
                <th className="text-center">Payment Method</th>
                <th>Activity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-center">
                  <div className="avatar">
                    <img
                      src={"../assets/img/avatars/1.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                </td>
                <td>
                  <div>Yiorgos Avraamu</div>
                  <div className="small text-muted">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </td>
                <td className="text-center">
                  <i
                    className="flag-icon flag-icon-us h4 mb-0"
                    title="us"
                    id="us"
                  ></i>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>50%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">
                        Jun 11, 2015 - Jul 10, 2015
                      </small>
                    </div>
                  </div>
                  <Progress
                    className="progress-xs"
                    color="success"
                    value="50"
                  />
                </td>
                <td className="text-center">
                  <i
                    className="fa fa-cc-mastercard"
                    style={{ fontSize: 24 + "px" }}
                  ></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>10 sec ago</strong>
                </td>

                <td>
                  <Action />
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="avatar">
                    <img
                      src={"../assets/img/avatars/2.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                    <span className="avatar-status badge-danger"></span>
                  </div>
                </td>
                <td>
                  <div>Avram Tarasios</div>
                  <div className="small text-muted">
                    <span>Recurring</span> | Registered: Jan 1, 2015
                  </div>
                </td>
                <td className="text-center">
                  <i
                    className="flag-icon flag-icon-br h4 mb-0"
                    title="br"
                    id="br"
                  ></i>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>10%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">
                        Jun 11, 2015 - Jul 10, 2015
                      </small>
                    </div>
                  </div>
                  <Progress className="progress-xs" color="info" value="10" />
                </td>
                <td className="text-center">
                  <i
                    className="fa fa-cc-visa"
                    style={{ fontSize: 24 + "px" }}
                  ></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>5 minutes ago</strong>
                </td>
                <td>
                  <Action />
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="avatar">
                    <img
                      src={"../assets/img/avatars/3.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                </td>
                <td>
                  <div>Quintin Ed</div>
                  <div className="small text-muted">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </td>
                <td className="text-center">
                  <i
                    className="flag-icon flag-icon-in h4 mb-0"
                    title="in"
                    id="in"
                  ></i>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>74%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">
                        Jun 11, 2015 - Jul 10, 2015
                      </small>
                    </div>
                  </div>
                  <Progress
                    className="progress-xs"
                    color="warning"
                    value="74"
                  />
                </td>
                <td className="text-center">
                  <i
                    className="fa fa-cc-stripe"
                    style={{ fontSize: 24 + "px" }}
                  ></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>1 hour ago</strong>
                </td>
                <td>
                  <Action />
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="avatar">
                    <img
                      src={"../assets/img/avatars/4.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                </td>
                <td>
                  <div>Enéas Kwadwo</div>
                  <div className="small text-muted">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </td>
                <td className="text-center">
                  <i
                    className="flag-icon flag-icon-fr h4 mb-0"
                    title="fr"
                    id="fr"
                  ></i>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>98%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">
                        Jun 11, 2015 - Jul 10, 2015
                      </small>
                    </div>
                  </div>
                  <Progress className="progress-xs" color="danger" value="98" />
                </td>
                <td className="text-center">
                  <i
                    className="fa fa-paypal"
                    style={{ fontSize: 24 + "px" }}
                  ></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>Last month</strong>
                </td>
                <td>
                  <Action />
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="avatar">
                    <img
                      src={"../assets/img/avatars/5.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                </td>
                <td>
                  <div>Agapetus Tadeáš</div>
                  <div className="small text-muted">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </td>
                <td className="text-center">
                  <i
                    className="flag-icon flag-icon-es h4 mb-0"
                    title="es"
                    id="es"
                  ></i>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>22%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">
                        Jun 11, 2015 - Jul 10, 2015
                      </small>
                    </div>
                  </div>
                  <Progress className="progress-xs" color="info" value="22" />
                </td>
                <td className="text-center">
                  <i
                    className="fa fa-google-wallet"
                    style={{ fontSize: 24 + "px" }}
                  ></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>Last week</strong>
                </td>
                <td>
                  <Action />
                </td>
              </tr>
              <tr>
                <td className="text-center">
                  <div className="avatar">
                    <img
                      src={"../assets/img/avatars/6.jpg"}
                      className="img-avatar"
                      alt="admin@bootstrapmaster.com"
                    />
                  </div>
                </td>
                <td>
                  <div>Friderik Dávid</div>
                  <div className="small text-muted">
                    <span>New</span> | Registered: Jan 1, 2015
                  </div>
                </td>
                <td className="text-center">
                  <i
                    className="flag-icon flag-icon-pl h4 mb-0"
                    title="pl"
                    id="pl"
                  ></i>
                </td>
                <td>
                  <div className="clearfix">
                    <div className="float-left">
                      <strong>43%</strong>
                    </div>
                    <div className="float-right">
                      <small className="text-muted">
                        Jun 11, 2015 - Jul 10, 2015
                      </small>
                    </div>
                  </div>
                  <Progress
                    className="progress-xs"
                    color="success"
                    value="43"
                  />
                </td>
                <td className="text-center">
                  <i
                    className="fa fa-cc-amex"
                    style={{ fontSize: 24 + "px" }}
                  ></i>
                </td>
                <td>
                  <div className="small text-muted">Last login</div>
                  <strong>Yesterday</strong>
                </td>
                <td>
                  <Action />
                </td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default Staff;
