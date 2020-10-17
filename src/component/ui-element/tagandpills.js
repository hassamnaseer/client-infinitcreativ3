import React, { Fragment } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb'
import { Mail,Bell,Settings,Music,AlertTriangle,AlertCircle,DollarSign,Headphones,Link,GitHub,Award,Activity,Heart} from 'react-feather'
import {Container,Row,Col,Card,CardHeader,CardBody,Button} from 'reactstrap'
const Tagandpills = (props) => {
    return (
        <Fragment>
        <Breadcrumb parent="Ui Elements" title="Tag & Pills"/>
        <Container fluid={true}>
            <Row>
              <Col md="6" lg="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>Contextual variations</h5>
                  </CardHeader>
                  <CardBody className="card-body">
                      <span className="badge badge-primary">Primary</span><span className="badge badge-secondary">Secondary</span>
                      <span className="badge badge-success">Success</span><span className="badge badge-info">Info</span>
                      <span className="badge badge-warning">Warning</span><span className="badge badge-danger">Danger</span>
                      <span className="badge badge-light">Light</span><span className="badge badge-dark tag-pills-sm-mb">Dark</span>
                </CardBody>
                </Card>
              </Col>
              <Col  md="6" lg="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>Contextual variations</h5>
                  </CardHeader>
                  <CardBody className="card-body">
                    <span className="badge badge-pill badge-primary">Primary</span>
                    <span className="badge badge-pill badge-secondary">Secondary</span>
                    <span className="badge badge-pill badge-success">Success</span>
                    <span className="badge badge-pill badge-info">Info</span>
                    <span className="badge badge-pill badge-warning">Warning</span>
                    <span className="badge badge-pill badge-danger">Danger</span>
                    <span className="badge badge-pill badge-light">Light</span>
                    <span className="badge badge-pill badge-dark tag-pills-sm-mb">Dark</span>
                  </CardBody>
                </Card>
              </Col>
              <Col  md="6" lg="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>Tags with number</h5>
                  </CardHeader>
                  <CardBody className="card-body digits">
                      <a className="badge badge-primary" href="#javascript">1</a>
                      <a className="badge badge-secondary" href="#javascript">2</a>
                      <a className="badge badge-success" href="#javascript">3</a>
                      <a className="badge badge-info" href="#javascript">4</a>
                      <a className="badge badge-warning" href="#javascript">5</a>
                      <a className="badge badge-danger" href="#javascript">6</a>
                      <a className="badge badge-light" href="#javascript">7</a>
                      <a className="badge badge-dark" href="#javascript">8</a>
                </CardBody>
                </Card>
              </Col>
              <Col  md="6" lg="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>Pills with number</h5>
                  </CardHeader>
                  <CardBody className="card-body digits">
                      <span className="badge badge-pill badge-primary">1</span>
                      <span className="badge badge-pill badge-secondary">2</span>
                      <span className="badge badge-pill badge-success">3</span>
                      <span className="badge badge-pill badge-info">4</span>
                      <span className="badge badge-pill badge-warning">5</span>
                      <span className="badge badge-pill badge-danger">6</span>
                      <span className="badge badge-pill badge-light">7</span>
                      <span className="badge badge-pill badge-dark">8</span>
                  </CardBody>
                </Card>
              </Col>
              <Col  md="6" lg="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>Tags With icon</h5>
                  </CardHeader>
                  <CardBody className="card-body">
                      <a className="badge badge-primary" href="#javascript"><DollarSign/></a>
                      <a className="badge badge-secondary" href="#javascript"><Headphones/></a>
                      <a className="badge badge-success" href="#javascript"><Link/></a>
                      <a className="badge badge-info" href="#javascript"><GitHub/></a>
                      <a className="badge badge-warning" href="#javascript"><Award/></a>
                      <a className="badge badge-danger" href="#javascript"><Activity/></a>
                      <a className="badge badge-light" href="#javascript"><Heart/></a>
                      <a className="badge badge-dark" href="#javascript"><Mail/></a>
                  </CardBody>
                </Card>
              </Col>
              <Col  md="6" lg="12" xl="6">
                <Card>
                  <CardHeader>
                    <h5>Pills with Icon</h5>
                  </CardHeader>
                  <CardBody className="card-body">
                      <a className="badge badge-pill badge-primary" href="#javascript"><DollarSign/></a>
                      <a className="badge badge-pill badge-secondary" href="#javascript"><Headphones/></a>
                      <a className="badge badge-pill badge-success" href="#javascript"><Link/></a>
                      <a className="badge badge-pill badge-info" href="#javascript"><GitHub/></a>
                      <a className="badge badge-pill badge-warning" href="#javascript"><Award/></a>
                      <a className="badge badge-pill badge-danger" href="#javascript"><Activity/></a>
                      <a className="badge badge-pill badge-light" href="#javascript"><Heart/></a>
                      <a className="badge badge-pill badge-dark" href="#javascript"><Mail/></a>
                  </CardBody>
                </Card>
              </Col>
              <Col  md="6" lg="12" xl="6">
                <Card className="height-equal">
                  <CardHeader>
                    <h5>Badges Example</h5>
                  </CardHeader>
                  <CardBody className="card-body">
                    <h1>heading <span className="badge badge-primary">New</span></h1>
                    <h2>heading <span className="badge badge-primary">New</span></h2>
                    <h3>heading <span className="badge badge-primary">New</span></h3>
                    <h4>heading <span className="badge badge-primary">New</span></h4>
                    <h5>heading <span className="badge badge-primary">New</span></h5>
                    <h6>heading <span className="badge badge-primary">New</span></h6>
                  </CardBody>
                </Card>
              </Col>
              <Col  md="6" lg="12" xl="6">
                <div className="card height-equal">
                  <CardHeader>
                    <h5>Badges as part buttons</h5>
                  </CardHeader>
                  <CardBody className="card-body">
                    <div className="mb-3">
                      <Button color="primary">
                        Messages <span className="badge badge-pill badge-light"><Mail/></span>
                      </Button>
                    </div>
                    <div className="mb-3">
                      <Button color="secondary" type="button">
                        Notifications <span className="badge badge-pill badge-light"><Bell/></span></Button>
                    </div>
                    <div className="mb-3">
                      <Button color="success">Update available <span className="badge badge-pill badge-light"><Settings/></span></Button>
                    </div>
                    <div className="mb-3">
                      <Button color="info">Playing Now <span className="badge badge-pill badge-light"><Music/></span></Button>
                    </div>
                    <div className="mb-3">
                      <Button color="warning">1.2 GB Used <span className="badge badge-pill badge-light"><AlertTriangle/></span></Button>
                    </div>
                    <div>
                      <Button color="danger">Alert <span className="badge badge-pill badge-light"><AlertCircle/></span></Button>
                    </div>
                  </CardBody>
                </div>
              </Col>
            </Row>
          </Container>
        </Fragment>
    );
}

export default Tagandpills;