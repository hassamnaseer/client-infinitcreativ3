import React,{Fragment,useState} from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb'
import ReactStickies from 'react-stickies'
import {Container,Row,Col,Card,CardHeader,CardBody} from 'reactstrap'
const Stickynotes = (props) => {
    const [notes,setnotes] = useState([])  
    const onChange = (notes) =>  {
      setnotes({
        notes
      })
    }
    return (
        <Fragment>
        <Breadcrumb parent="Ui Elements" title="Sticky"/>
        <Container fluid={true}>
              <Row className="sticky-header-main">
                <Col sm="12">
                  <Card>
                    <CardHeader>
                      <h5>Sticky Note</h5>
                    </CardHeader>
                    <CardBody>
                      <ReactStickies
                              notes={notes}
                              onChange={onChange}
                      />
                    </CardBody>
                  </Card>
                </Col>
              </Row>
        </Container>
        </Fragment>
    );
}

export default Stickynotes;