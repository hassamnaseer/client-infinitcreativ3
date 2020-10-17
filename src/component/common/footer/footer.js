import React from 'react';
import {Container,Row,Col} from 'reactstrap'
const Footer = (props) =>  {
    return (
        <footer className="footer">
          <Container fluid={true}>
            <Row>
              <Col md="6" className="footer-copyright">
                <p className="mb-0">Copyright © 2021 Company Name. All rights reserved.</p>
              </Col>
            </Row>
          </Container>
        </footer>
    );
}

export default Footer;