import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb'
import {Container,Row,Col,Card,CardHeader,CardBody,ListGroup,ListGroupItem} from 'reactstrap'
const Statecolor = (props) => {
    let color =  [1,2,3,4,5,6,7,8,9,10,11,12,13]
    let listcolor = color.map((key) => <ListGroupItem key={key} as="li"><span></span></ListGroupItem>)
    return (
        <Fragment>
            <Breadcrumb parent="Ui Elements" title="State Color"/>
            <Container fluid={true}>
            <Row>
                <Col className="col-sm-12">
                    <Card>
                    <CardHeader>
                    <h5>Default Color</h5>
                    </CardHeader>
                    <CardBody>
                     <div className="color-box">
                        <button className="btn btn-primary btn-square digits">#7e37d8</button>
                        <button className="btn btn-square digits btn-secondary">#fe80b2</button>
                        <button className="btn btn-square digits btn-success">#80cf00</button>
                        <button className="btn btn-square digits btn-info">#06b5dd</button>
                        <button className="btn btn-square digits btn-warning">#ffc717</button>
                        <button className="btn btn-square digits btn-danger">#fd517d</button>
                        <button className="btn btn-square digits btn-light">#f8f5fd</button>
                        <button className="btn btn-square digits btn-dark">#2c323f</button>
                    </div>
                    </CardBody>
                   
                    </Card>
                    <Card>
                    <CardHeader>
                    <h5>Color</h5>
                    </CardHeader>
                    <CardBody className="bottom-color-space">
                    <Row>
                      <Col xl="3" sm="6">
                        <h6 className="sub-title text-uppercase">Primary</h6>
                        <div className="primary-color">
                          <ListGroup as="ul" className="m-b-30">
                            {listcolor}
                          </ListGroup>
                        </div>
                      </Col>
                      <Col xl="3" sm="6">
                        <h6 className="sub-title text-uppercase">secondary</h6>
                        <div className="secondary-color">
                        <ListGroup as="ul" className="m-b-30">
                          {listcolor}
                        </ListGroup>
                        </div>
                      </Col>
                      <Col xl="3" sm="6">
                        <h6 className="sub-title text-uppercase">Success</h6>
                        <div className="success-color">
                        <ListGroup as="ul" className="m-b-30">
                          {listcolor}
                        </ListGroup>
                        </div>
                      </Col>
                      <Col xl="3" sm="6">
                        <h6 className="sub-title text-uppercase">Info</h6>
                        <div className="info-color">
                        <ListGroup as="ul" className="m-b-30">
                          {listcolor}
                        </ListGroup>
                        </div>
                      </Col>
                      <Col xl="3" sm="6">
                        <h6 className="sub-title text-uppercase">Warning</h6>
                        <div className="yellow-color">
                        <ListGroup as="ul" className="m-b-30">
                          {listcolor}
                        </ListGroup>
                        </div>
                      </Col>
                      <Col xl="3" sm="6">
                        <h6 className="sub-title text-uppercase">Danger</h6>
                        <div className="red-color">
                        <ListGroup as="ul" className="m-b-30">
                          {listcolor}
                        </ListGroup>
                        </div>
                      </Col>
                      <Col xl="3" sm="6">
                        <h6 className="sub-title text-uppercase">Pink</h6>
                        <div className="pink-color">
                        <ListGroup as="ul" className="m-b-30">
                          {listcolor}
                        </ListGroup>
                        </div>
                      </Col>
                      <Col xl="3" sm="6">
                        <h6 className="sub-title text-uppercase">Grey</h6>
                        <div className="gray-color">
                        <ListGroup as="ul" className="m-b-30">
                          {listcolor}
                        </ListGroup>
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                  </Card>
              </Col>
            </Row>
        </Container>
            
        </Fragment>
    );
}

export default Statecolor;