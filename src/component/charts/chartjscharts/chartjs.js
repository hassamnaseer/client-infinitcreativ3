import React, { Fragment } from 'react';
import Breadcrumb from '../../common/breadcrumb/breadcrumb'
import { Radar, Line, Bar, Doughnut, Polar } from 'react-chartjs-2';
import { doughnutData, doughnutOption,barChartData, barChartOptions ,linegraphData,linegraphOptions,polarOption,polarData, lineChartData,lineChartoption ,radargraphData,radargraphOption} from './chartjsData';
import {Container,Row,Col,Card,CardHeader,CardBody} from "reactstrap";

const Chartjs = (props) => {
    const datasetKeyProvider = () =>{
        return Math.random();
      }
      
    return (
        <Fragment>
        <Breadcrumb parent="Charts" title="ChartJS Chart"/>
        <Container fluid={true}>
            <Row>
                <Col xl="6" md="12 box-col-12">
                    <Card>
                    <CardHeader>
                        <h5>Bar Chart</h5>
                    </CardHeader>
                    <CardBody className="chart-block">
                    {/* <canvas > */}
                        <Bar id="myBarGraph"  data={barChartData} options={barChartOptions} width={466} height={233} />
                        {/* </canvas> */}
                    </CardBody>
                    </Card>
                </Col>
                <Col xl="6" md="12">
                    <Card>
                    <CardHeader>
                        <h5>Line Graph</h5>
                    </CardHeader>
                    <CardBody className="chart-block">
                        <Line data={linegraphData} options={linegraphOptions}  datasetKeyProvider={datasetKeyProvider} width={778} height={400} />
                    </CardBody>
                    </Card>
                </Col>
                <Col xl="6" md="12">
                    <Card>
                    <CardHeader>
                        <h5>Radar Graph</h5>
                    </CardHeader>
                    <CardBody className="chart-block chart-vertical-center">
                        <Radar data={radargraphData} options={radargraphOption} width={778} height={400} />
                    </CardBody>
                    </Card>
                </Col>
                <Col xl="6" md="12">
                    <Card>
                    <CardHeader>
                        <h5>Line Chart</h5>
                    </CardHeader>
                    <CardBody className="chart-block">
                        <Line data={lineChartData} options={lineChartoption}  datasetKeyProvider={datasetKeyProvider} width={778} height={400} />
                    </CardBody>
                    </Card>
                </Col>
                <Col xl="6" md="12">
                    <Card>
                    <CardHeader>
                        <h5>Doughnut Chart</h5>
                    </CardHeader>
                    <CardBody className="chart-block">
                        <Doughnut data={doughnutData} options={doughnutOption} width={778} height={400} />
                    </CardBody>
                    </Card>
                </Col>
               
                <Col xl="6" md="12">
                <Card>
                <CardHeader>
                    <h5>Polar Chart</h5>
                </CardHeader>
                <CardBody className="chart-block chart-vertical-center">
                    <Polar data={polarData} options={polarOption} width={778} height={400} />
                </CardBody>
                </Card>
            </Col>
            </Row>
        </Container>
        </Fragment>
    );
}

export default Chartjs;