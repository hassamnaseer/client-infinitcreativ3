import React, { Fragment, useEffect, useState } from "react";
import Breadcrumb from "../../common/breadcrumb/breadcrumb";
import { useForm } from "react-hook-form";
import TooltipForm from "./tooltip";
import axios from "axios";
import {
	Container,
	Row,
	Col,
	Card,
	CardHeader,
	CardBody,
	Button,
	Form,
	FormGroup,
	Label,
	Input,
	InputGroup,
	InputGroupAddon,
	InputGroupText,
} from "reactstrap";
import OrderHandler from "./OrderHandler";

const Formvalidation = (props) => {
	const { register, handleSubmit, errors } = useForm(); // initialise the hook

	const onSubmit = (data) => {
		if (data !== "") {
			alert("You submitted the form and stuff!");
		} else {
			errors.showMessages();
		}
	};

	const [orders, setOrders] = useState();
	const [user, setUser] = useState("");
	const [userEmail, setUserEmail] = useState("");
	const [unilevel, setUnilevel] = useState(0);
	const [allowDirectCommission, setDirectCommission] = useState(false);
	const [allowUnilevelCommission, setUnilevelCommission] = useState(false);
	const [res, setRes] = useState();
	const [isSame, setIsSame] = useState();
	const unilevels = [5, 10, 10, 10, 3, 2, 1, 1];
	const [i, setI] = useState();
	const [comm, setCommission] = useState();
	let j = 0;

	const objectsEqual = (o1, o2) =>
		Object.keys(o1).length === Object.keys(o2).length &&
		Object.keys(o1).every((p) => o1[p] === o2[p]);
	const arraysEqual = (a1, a2) =>
		a1.length === a2.length && a1.every((o, idx) => objectsEqual(o, a2[idx]));

	const comp = (arr1, arr2) => {
		if (arr1.length === arr2.length) {
			for (let a = 0; a < arr1.length; a++) {
				if (!objectsEqual(arr1[a], arr2[a])) {
					return false;
				}
			}
			return true;
		}
	};

	useEffect(() => {
		async function getValues() {
			await axios
				.get("https://backend-node-1.herokuapp.com/orders/all")
				.then((order) => {
					setOrders(order.data.orders);
					axios
						.post("https://backend-node-1.herokuapp.com/orders/save", {
							orders: order.data.orders,
							email: localStorage.getItem("userEmail"),
						})
						.then((response) => {
							setIsSame(response.data.res);
						});

					axios
						.get("https://backend-node-1.herokuapp.com/orders/all")
						.then((response) => {
							setRes(response.data.orders[0].orders);
							// setIsSame(comp(order.data.orders, response.data.orders[0].orders))
						});
					console.log(order.data.orders);
					if (typeof window !== "undefined") {
						setUserEmail(localStorage.getItem("userEmail"));
					}
				});

			await axios
				.get(
					`https://backend-node-1.herokuapp.com/user-email/${localStorage.getItem(
						"userEmail",
					)}`,
				)
				.then((user) => {
					setUnilevel(user.data.Unilevel);
					setUser(user.data);
					if (user.data.Redeemed >= 30) {
						setUnilevelCommission(true);
						setDirectCommission(true);
					}
					if (user.data.Redeemed >= 10 && user.data.Redeemed < 30) {
						setDirectCommission(true);
					}
				});
		}

		getValues();
		totalCommission();
	}, []);

	const updatePV = async (commission) => {
		//setI(++j)
		await axios.put(`https://backend-node-1.herokuapp.com/user/update/${user._id}`, {
			PV: commission,
		});
	};

	const abc = (commission) => {
		axios
			.get(
				`https://backend-node-1.herokuapp.com/user-email/${localStorage.getItem("userEmail")}`,
			)
			.then((res) => {
				updatePV(commission, res.data.PV);
			});
	};

	const calculateCommission = (amount) => {
		if (allowUnilevelCommission) {
			return (
				Math.ceil((amount / 100) * 20) +
				Math.ceil((amount / 100) * unilevels[unilevel-1])
			);
		} else if (allowDirectCommission) {

			return Math.ceil((amount / 100) * 20);
		} else return 0;
	};

	const totalCommission = () => {
		if (orders !== undefined) {
			if (allowUnilevelCommission) {
				let total = 0;
				orders.map((order) => {
					if (order.email === userEmail) {
						total += parseInt(order.total_price);
					}
				});
				setCommission(
					Math.ceil((total / 100) * 20) +
						Math.ceil((total / 100) * unilevels[unilevel-1]),
				);
				updatePV(
					Math.ceil((total / 100) * 20) +
						Math.ceil((total / 100) * unilevels[unilevel-1]),
				);
			}
			if (allowDirectCommission) {
				let total = 0;
				orders.map((order) => {
					if (order.email === userEmail) {
						total += parseInt(order.total_price);
					}
				});
				setCommission(Math.ceil((total / 100) * 20));
				updatePV(Math.ceil((total / 100) * 20));
			}
		}
	};

	useEffect(() => {
		totalCommission();
	}, [orders, allowDirectCommission, allowUnilevelCommission]);

	return (
		<Fragment>
			{isSame !== undefined && <OrderHandler newArr={isSame} oldArr={res} />}
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
											<th scope="col">Purchase Date</th>
											<th scope="col">Purchase Items</th>
											<th scope="col">Quantity</th>
											<th scope="col">Amount</th>
											<th scope="col">PV Earned</th>
										</tr>
									</thead>
									<tbody>
										{orders !== undefined &&
											orders.map((order, index) => {
												if (order.customer.email === userEmail) {
													return (
														<tr>
															<th scope="row">{index + 1}</th>
															<td>
																{(new Date(order.created_at) + "").substr(
																	4,
																	12,
																)}
															</td>
															<td>{order.line_items[0].title}</td>
															<td>{order.line_items[0].quantity}</td>
															<td>
																{order.currency + " " + order.total_price}
															</td>
															<td>{calculateCommission(order.total_price)}</td>
														</tr>
													);
												}
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

export default Formvalidation;
