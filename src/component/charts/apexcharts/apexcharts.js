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
import { ToastContainer, toast } from "react-toastify";

const Apexcharts = (props) => {
	const [introducedUsers, setIntroducedUsers] = useState([]);
	const [renderNow, setRender] = useState(false)
	//const [userEmail, setUserEmail] = useState("");

	useEffect(() => {
		const userEmail = localStorage.getItem("userEmail");
		let introducedUsersArray = []
		async function getCurrentUser() {
			await axios.get(`https://backend-node-1.herokuapp.com/user-email/${userEmail}`).then((user) => {
				//setIntroducedUsers(user.data.UsersIntroduced);
				introducedUsersArray.push(user.data.UsersIntroduced)
			});

			introducedUsersArray.map(async (introducedUserId) => {
				await axios.get(`https://backend-node-1.herokuapp.com/user/${introducedUserId}`).then((introducedUser) => {
					const tempArr = introducedUsers
					tempArr.push(introducedUser)
					setIntroducedUsers(tempArr)
					setRender(true);
				});
			});

			//if (introducedUsersArray.length === introducedUsers.length) setRender(true)

		}

		getCurrentUser();
	}, []);
	return (
		<Fragment>
			<ToastContainer />
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
											<th scope="col">Name</th>
											<th scope="col">Email</th>
											<th scope="col">Date</th>
											<th scope="col">PV</th>
										</tr>
									</thead>
									<tbody>
										{renderNow &&
											introducedUsers.map((user, index) => {
												return (
													<tr>
														<th scope="row">{index + 1}</th>
														<td>{user.data.FirstName + " " + user.data.LastName}</td>
														<td>{user.data.Email}</td>
														<td>{(user.data.created + "").substr(0, 10)}</td>
														<td>PV</td>
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
