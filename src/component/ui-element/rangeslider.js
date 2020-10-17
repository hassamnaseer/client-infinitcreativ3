import React, { Fragment,useState } from 'react';
import Breadcrumb from '../common/breadcrumb/breadcrumb'
import Slider from 'react-rangeslider'
import {Container,Row,Col,Card,CardHeader,CardBody,Label,Form} from 'reactstrap'

const Rangeslider = (props) => {
    const initialslider = { 
        basicValue:10,
        negativeValue:-10,
        customValue:10,
        horizontalValue:8,
        verticalValue:25,
        verticallabelValue:50
    }
    const CustomeLabels = {
        0: 'Low',
        50: 'Medium',
        100: 'High'
      }
    
    const verticalLabels = {
        10: 'Getting started',
        50: 'Half way',
        90: 'Almost done',
        100: 'Complete!'
    }

    const formatkg = value => value + 'kg'
    const formatPc = value => value + '%'

    const [values, setValues ] = useState(initialslider); 
    const basicsliderChange = (value) => {
        setValues({ ...values,basicValue:value })
    }
    const negativesliderChange = (value) => {
        setValues({ ...values,negativeValue:value })
    }
    const customsliderChange = (value) => {
         setValues({ ...values,customValue:value })
      };
    const horizontalsliderChange = (value) => {
        setValues({ ...values,horizontalValue:value })
     };
    const verticlesliderChange = (value) => {
        setValues({ ...values,verticalValue:value })
    };
    const verticlelabelsliderChange = (value) => {
        setValues({ ...values,verticallabelValue:value })
    };
    return (
        <Fragment>
        <Breadcrumb parent="Ui Elements" title="Range Slider"/>
        <Container fluid={true}>
            <Row>
                <Col sm="12" xl="6">
                <Card>
                    <CardHeader>
                        <h5>Basic Slider</h5>
                    </CardHeader>
                    <CardBody>
                    <Form className="theme-form form-label-align-right range-slider">
                    <Row className="mb-0">
                    <Col md="2">
                        <Label>Default</Label>
                    </Col>
                    <Col md="10">
                        <Slider
                            value={values.basicValue}
                            onChange={basicsliderChange}
                        />
                         <div>{values.basicValue}</div>
                    </Col>    
                    </Row>
                    </Form>
                    </CardBody>
                </Card>
                </Col>

                <Col sm="12" xl="6">
                <Card>
                    <CardHeader>
                        <h5>Negative Values</h5>
                    </CardHeader>
                    <CardBody>
                    <Form className="theme-form form-label-align-right range-slider">
                    <Row className="mb-0">
                    <Col md="2">
                        <Label>Default</Label>
                    </Col>
                    <Col md="10">
                        <Slider
                            min={-20}
                            max={0}
                            value={values.negativeValue}
                            onChange={negativesliderChange}
                        />
                        <div>{values.negativeValue}</div>
                    </Col>
                    </Row>
                    </Form>
                    </CardBody>
                </Card>
                </Col>

                <Col sm="12">
                <Card>
                    <CardHeader>
                        <h5>Custom Labels & Formatting</h5>
                    </CardHeader>
                    <CardBody>
                     <Form className="theme-form form-label-align-right range-slider">
                    <Row className="mb-0">
                    <Col md="2">
                        <Label>Default</Label>
                    </Col>
                    <Col md="10">
                        <Slider
                            min={0}
                            max={100}
                            labels={CustomeLabels}
                            format={formatkg}
                            value={values.customValue}
                            onChange={customsliderChange}
                        />
                         <div className="pt-3">{formatkg(values.customValue)}</div>
                    </Col>    
                    </Row>
                    </Form>
                    </CardBody>
                </Card>
                </Col>


                <Col sm="12">
                <Card>
                    <CardHeader>
                        <h5>Orientation & Custom Styles</h5>
                    </CardHeader>
                    <CardBody>
                     <Form className="theme-form form-label-align-right range-slider">
                    <Row className="mb-0">
                    <Col md="2">
                        <Label>Default</Label>
                    </Col>
                    <Col md="10">
                        <Slider
                                min={0}
                                max={100}
                                orientation='vertical'
                                value={values.verticalValue}
                                onChange={verticlesliderChange}
                            />
                         <div style={{textAlign:'center'}}>{values.verticalValue}</div>
                        <Slider
                            min={0}
                            max={10}
                            value={values.horizontalValue}
                            onChange={horizontalsliderChange}
                        />
                         <div>{values.horizontalValue}</div>
                    </Col>    
                    </Row>
                    </Form>
                    </CardBody>
                </Card>
                </Col>

                <Col sm="12">
                <Card>
                    <CardHeader>
                        <h5>Verticle Slider</h5>
                    </CardHeader>
                    <CardBody>
                     <Form className="theme-form form-label-align-right range-slider">
                    <Row className="mb-0">
                    <Col md="2">
                        <Label>Default</Label>
                    </Col>
                    <Col md="10">
                        <Slider
                            min={0}
                            max={100}
                            orientation='vertical'
                            labels={verticalLabels}
                            format={formatPc}
                            value={values.verticallabelValue}
                            onChange={verticlelabelsliderChange}
                        />
                         <div style={{textAlign:'center',margin:'10px'}}>{formatPc(values.verticallabelValue)}</div>
                    </Col>    
                    </Row>
                    </Form>
                    </CardBody>
                </Card>
                </Col>
            </Row>
        </Container>
            
        </Fragment>
    );
}

export default Rangeslider;