import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import axios from "axios";
import Apexchart from "react-apexcharts";
import {
	areaSpaline,
	apexAreaChart,
	apexColumnChartsone,
	apexPieChart,
	apex3DbubbleCharts,
	apexRadialBarChart,
	apexCandleStickCharts,
	apexRadarPolygonfillCharts,
	apexSteplineChart,
	apexLineWithAnnotationCharts,
	apexDonutCharts,
	apexMixedCharts,
	apexBarChart,
} from "./apexchartsData";
import { Container, Row, Col, Card, CardHeader, CardBody } from "reactstrap";

const Apexcharts = (props) => {
	const [orders, setOrders] = useState();

	useEffect(() => {
		axios.get("http://localhost:5000/orders").then((order) => {
			setOrders(order.data.orders);
			console.log(order.data.orders);
		});
	}, []);
	return (
		<Fragment>
			<Breadcrumb parent="Charts" title="Sales Statement" />
			<Container fluid={true}>
				<Row>
					<div class="col-md-12">
						<div class="card">
							<div class="table-responsive">
								<table class="table">
									<thead>
										<tr>
											<th scope="col"></th>
											<th scope="col">Customer</th>
											<th scope="col">Email</th>
											<th scope="col">Product</th>
											<th scope="col">Quantity</th>
											<th scope="col">Total Price</th>
											<th scope="col">Date</th>
											<th scope="col">Status</th>
										</tr>
									</thead>
									<tbody>
										{orders !== undefined &&
											orders.map((order, index) => {
												return (
													<tr>
														<th scope="row">{index+1}</th>
														<td>
															{order.customer.first_name +
																" " +
																order.customer.last_name}
														</td>
														<td>{order.customer.email}</td>
														<td>{order.line_items[0].title}</td>
														<td>{order.line_items[0].quantity}</td>
														<td>{order.currency + " " + order.total_price}</td>
														<td>{new Date(order.created_at) + ""}</td>
														<td>{order.financial_status}</td>
													</tr>
												);
											})}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</Row>
			</Container>
		</Fragment>
	);
};

export default Apexcharts;
