import React, { Fragment, useState, useEffect } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import {
	apexcharts1,
	apexcharts2,
	apexcharts3,
	apexcharts4,
	apexcharts5,
	apexcharts6,
	apexchartsradial,
} from "./charts/apexchartsData";
import {
	chartist1data,
	chartist1option,
	chartist1Listener,
	chartist2data,
	chartist2option,
	chartist2Listener,
} from "./charts/chartistchartsData";
import Chart from "react-apexcharts";
import ChartistGraph from "react-chartist";
import Calendar from "react-calendar";
import {
	Container,
	Row,
	Col,
	Card,
	CardHeader,
	CardBody,
	Media,
	Table,
	Button,
	Modal,
	ModalHeader,
	ModalBody,
} from "reactstrap";
import { MoreHorizontal } from "react-feather";

const Default = (props) => {
	// eslint-disable-next-line
	const [chart1, setcharts1] = useState(apexcharts1);
	// eslint-disable-next-line
	const [date, setDate] = useState(new Date());

	const [modal, setModal] = useState(false);
	const toggle = () => {
		setModal(!modal);
		localStorage.setItem("isUser", null);
	};
	const onChange = (date) => setDate(date);

	useEffect(() => {
		if (localStorage.getItem("isUser") === "true") {
			setModal(true);
		} else {
			setModal(false);
		}
	}, []);

	return (
		<Fragment>
			<Breadcrumb parent="Dashboard" title="Dashboard" />
			<Container fluid={true}>
				<Row>
					<Col lg="12 xl-100">
						<Row>
							<Col xl="6 xl-50" md="6 box-col-6">
								<Card className="gradient-primary o-hidden">
									<CardBody className="tag-card">
										<div className="default-chart">
											<div className="apex-widgets">
												<Chart
													id="area-widget-chart"
													options={chart1.options}
													series={chart1.series}
													height="120"
													type="line"
												/>
											</div>
											<div className="widgets-bottom">
												<h5 className="f-w-700 mb-0">
													Total Purchase
													<span className="pull-right">70 / 100 </span>
												</h5>
											</div>
										</div>
										<span className="tag-hover-effect">
											<span className="dots-group">
												<span className="dots dots1"></span>
												<span className="dots dots2 dot-small"></span>
												<span className="dots dots3 dot-small"></span>
												<span className="dots dots4 dot-medium"></span>
												<span className="dots dots5 dot-small"></span>
												<span className="dots dots6 dot-small"></span>
												<span className="dots dots7 dot-small-semi"></span>
												<span className="dots dots8 dot-small-semi"></span>
												<span className="dots dots9 dot-small"></span>
											</span>
										</span>
									</CardBody>
								</Card>
							</Col>
							<Col xl="6 xl-50" md="6 box-col-6">
								<Card className="gradient-secondary o-hidden">
									<CardBody className="tag-card">
										<div className="default-chart">
											<div className="apex-widgets">
												<Chart
													id="area-widget-chart-2"
													options={apexcharts2.options}
													series={apexcharts2.series}
													height="130"
													type="line"
												/>
											</div>
											<div className="widgets-bottom">
												<h5 className="f-w-700 mb-0">
													Total Sales
													<span className="pull-right">70 / 100 </span>
												</h5>
											</div>
										</div>
										<span className="tag-hover-effect">
											<span className="dots-group">
												<span className="dots dots1"></span>
												<span className="dots dots2 dot-small"></span>
												<span className="dots dots3 dot-small"></span>
												<span className="dots dots4 dot-medium"></span>
												<span className="dots dots5 dot-small"></span>
												<span className="dots dots6 dot-small"></span>
												<span className="dots dots7 dot-small-semi"></span>
												<span className="dots dots8 dot-small-semi"></span>
												<span className="dots dots9 dot-small"></span>
											</span>
										</span>
									</CardBody>
								</Card>
							</Col>
						</Row>
						<Row>
							<div className="card col-md-4">
								<div className="bg-primary card-header">
									<h5>Wallet</h5>
								</div>
								<div className="card-body">
									<h2 className="mb-0" style={{ textAlign: "center" }}>
										500$
									</h2>
								</div>
							</div>
							<div className="col-md-8">
								<div className="card">
									<div className="card-header">
										<h5>Commission System</h5>
									</div>
									<div className="table-responsive">
										<table className="table">
											<thead>
												<tr>
													<th scope="col">#</th>
													<th scope="col">First Name</th>
													<th scope="col">Last Name</th>
													<th scope="col">Username</th>
													<th scope="col">PV</th>
													<th scope="col">Country</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<th scope="row">1</th>
													<td>Alexander</td>
													<td>Orton</td>
													<td>@mdorton</td>
													<td>12</td>
													<td>USA</td>
												</tr>
												<tr>
													<th scope="row">2</th>
													<td>John Deo</td>
													<td>21</td>
													<td>@johndeo</td>
													<td>12</td>
													<td>USA</td>
												</tr>
												<tr>
													<th scope="row">3</th>
													<td>Randy Orton</td>
													<td>the Bird</td>
													<td>@twitter</td>
													<td>14</td>
													<td>UK</td>
												</tr>
												<tr>
													<th scope="row">4</th>
													<td>Randy Mark</td>
													<td>Ottandy</td>
													<td>@mdothe</td>
													<td>11</td>
													<td>AUS</td>
												</tr>
												<tr>
													<th scope="row">5</th>
													<td>Ram Jacob</td>
													<td>Thornton</td>
													<td>@twitter</td>
													<td>15</td>
													<td>IND</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</Row>
					</Col>
				</Row>
				<Modal isOpen={modal} className="welcome-popup modal-dialog-centered">
					<button
						onClick={toggle}
						className="close"
						type="button"
						data-dismiss="modal"
						aria-label="Close"
					>
						<span aria-hidden="true">&times;</span>
					</button>
					<ModalBody>
						<ModalHeader></ModalHeader>
						<div className="contain p-30">
							<div className="text-center">
								<h3>Welcome to Poco admin</h3>
								<p>start your project with developer friendly admin </p>
								<button
									onClick={toggle}
									className="btn btn-primary btn-lg txt-white"
									type="button"
									data-dismiss="modal"
									aria-label="Close"
								>
									Get Started
								</button>
							</div>
						</div>
					</ModalBody>
				</Modal>
			</Container>
		</Fragment>
	);
};

export default Default;
