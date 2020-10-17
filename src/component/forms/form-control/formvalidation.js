import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb/breadcrumb'
import {useForm} from 'react-hook-form'
import TooltipForm from './tooltip';
import {Container,Row,Col,Card,CardHeader,CardBody,Button,Form,FormGroup,Label,Input,InputGroup,InputGroupAddon,InputGroupText} from 'reactstrap'

const Formvalidation = (props) => {
    const { register, handleSubmit, errors } = useForm(); // initialise the hook

  const onSubmit = data => {
    if (data !== '') {
      alert('You submitted the form and stuff!');
    } else {
      errors.showMessages();
    }
  };
    return (
        <Fragment>
        <Breadcrumb parent="Forms / Form Controls" title="Purchase History"/>
        <Container fluid={true}>
          <Row>
          <div class="col-md-12"><div class="card"><div class="table-responsive"><table class="table"><thead><tr><th scope="col">Date</th><th scope="col">Purchase Items</th><th scope="col">Purchase Amount</th></tr></thead><tbody><tr><th scope="row">1</th><td>Alexander</td><td>6000</td></tr><tr><th scope="row">2</th><td>John Deo</td><td>2100</td></tr><tr><th scope="row">3</th><td>Randy Orton</td><td>1500</td></tr><tr><th scope="row">4</th><td>Randy Mark</td><td>5778</td><tr></tr></tr></tbody></table></div></div></div>

        </Row>
        </Container>  
        </Fragment>
    );
}

export default Formvalidation;