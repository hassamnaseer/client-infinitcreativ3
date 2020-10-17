import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb/breadcrumb'
import {useHistory} from 'react-router-dom'
import LearningFilter from './learning-filter';
import Data from '../../../data/learningData';
import {Container,Row,Col,Card,Media} from 'reactstrap'


const LearningList = (props) => {
    const history = useHistory();
    const clickApply = () => {
        history.push('/learning/detailed-course');
    }

    return (
        <Fragment>
           <Breadcrumb parent="Apps / Learning" title="Learning List"/>
            <Container fluid={true}>
                <Row>
                    <Col xl="9 xl-60">
                        <Row>
                        <Col xl="12">
                            <Card>
                            <Row className="blog-box blog-list">
                                <Col sm="5">
                                    <Media className="img-fluid sm-100-w" src={require("../../../assets/images/faq/1.jpg")} alt=""/>
                                </Col>
                                <Col sm="7">
                                <div className="blog-details">
                                    <div className="blog-date digits"><span>05</span> January 2019</div>
                                    <h6>Java Language </h6>
                                    <div className="blog-bottom-content">
                                    <ul className="blog-social">
                                        <li>by: Paige Turner</li>
                                        <li className="digits">15 Hits</li>
                                    </ul>
                                    <hr/>
                                    <p className="mt-0">inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit.</p>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                            </Card>
                        </Col>
                        <Col xl="12">
                            <Card>
                            <Row className="blog-box blog-list">
                                <Col sm="5">
                                    <Media className="img-fluid sm-100-w" src={require("../../../assets/images/faq/2.jpg")} alt=""/>
                                </Col>
                                <Col sm="7">
                                <div className="blog-details">
                                    <div className="blog-date digits"><span>10</span> March 2019</div>
                                    <h6>Web Development </h6>
                                    <div className="blog-bottom-content">
                                    <ul className="blog-social">
                                        <li>by: Petey Cruiser</li>
                                        <li className="digits">34 Hits</li>
                                    </ul>
                                    </div>
                                </div>
                                </Col>
                            </Row>
                            </Card>
                        </Col>
                       
                            {Data.map((data, i) => {
                                return (
                                    <Col xl="4 xl-50" sm="6" key={i}>
                                        <Card>
                                            <div className="blog-box blog-grid text-center product-box">
                                                <div className="product-img">
                                                    <Media className="img-fluid top-radius-blog" src={data.img} alt="" />
                                                    <div className="product-hover">
                                                        <ul>
                                                            <li><i className="icon-link" onClick={() => clickApply()}></i></li>
                                                            <li><i className="icon-import"></i></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="blog-details-main">
                                                    <ul className="blog-social">
                                                        <li className="digits">{data.date}</li>
                                                        <li className="digits">by: {data.writer}</li>
                                                        <li className="digits">{data.hits} Hits</li>
                                                    </ul>
                                                    <hr />
                                                    <h6 className="blog-bottom-details">{data.short_description}</h6>
                                                </div>
                                            </div>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                    </Col>
                    <LearningFilter />
                </Row>
                </Container>
        </Fragment>
    );
};

export default LearningList;