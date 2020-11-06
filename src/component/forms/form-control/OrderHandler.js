import React, { useEffect, useState, Fragment } from "react";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const OrderHandler = (props) => {
	const [newArr, setNewArr] = useState(null);
	const [oldArr, setOldArr] = useState(props.oldArr);
	const [referralUser, setReferralUser] = useState({});
	const [allowUnilevelCommission, setUnilevelCommission] = useState();
	const [a, setA] = useState();
	const [email, setEmail] = useState("");
	const unilevels = [5, 10, 10, 10, 3, 2, 1, 1];

	let abc = {
		id: 2902016000150,
		email: "customer1@gmail.com",
		created_at: "2020-11-06T05:50:01+11:00",
		total_price: "283.00",
		currency: "MYR",
		financial_status: "pending",
		name: "#1006",
		line_items: [
			{
				id: 6271266816150,
				variant_id: 36737817608342,
				title: "Panadol 10",
				quantity: 2,
				sku: "",
				variant_title: "",
				vendor: "Goldana Marketplace",
				fulfillment_service: "manual",
				product_id: 5834241310870,
				requires_shipping: true,
				taxable: true,
				gift_card: false,
				name: "Panadol 10",
				variant_inventory_management: "shopify",
				properties: [],
				product_exists: true,
				fulfillable_quantity: 2,
				grams: 0,
				price: "100.00",
				total_discount: "0.00",
				fulfillment_status: null,
				price_set: {
					shop_money: {
						amount: "100.00",
						currency_code: "MYR",
					},
					presentment_money: {
						amount: "100.00",
						currency_code: "MYR",
					},
				},
				total_discount_set: {
					shop_money: {
						amount: "0.00",
						currency_code: "MYR",
					},
					presentment_money: {
						amount: "0.00",
						currency_code: "MYR",
					},
				},
				discount_allocations: [],
				duties: [],
				admin_graphql_api_id: "gid://shopify/LineItem/6271266816150",
				tax_lines: [],
				origin_location: {
					id: 2451271057558,
					country_code: "MY",
					province_code: "KUL",
					name: "Goldana Marketplace",
					address1: "Kuala Lumpur",
					address2: "",
					city: "Kuala Lumpur",
					zip: "51000",
				},
			},
		],
		customer: {
			id: 4260421992598,
			email: "customer1@gmail.com",
			accepts_marketing: false,
			created_at: "2020-10-20T11:42:42+11:00",
			updated_at: "2020-11-06T05:50:02+11:00",
			first_name: "Customer",
			last_name: "One",
			orders_count: 2,
			state: "disabled",
			total_spent: "566.00",
			last_order_id: 2902016000150,
			note: null,
			verified_email: true,
			multipass_identifier: null,
			tax_exempt: false,
			phone: null,
			tags: "",
			last_order_name: "#1006",
			currency: "MYR",
			accepts_marketing_updated_at: "2020-10-20T11:42:42+11:00",
			marketing_opt_in_level: null,
			tax_exemptions: [],
			admin_graphql_api_id: "gid://shopify/Customer/4260421992598",
			default_address: {
				id: 5161522462870,
				customer_id: 4260421992598,
				first_name: "Customer",
				last_name: "One",
				company: null,
				address1: "some address",
				address2: "",
				city: "some city",
				province: null,
				country: "Morocco",
				zip: "34534",
				phone: null,
				name: "Customer One",
				province_code: null,
				country_code: "MA",
				country_name: "Morocco",
				default: true,
			},
		},
	};

	useEffect(() => {
		setNewArr(props.newArr);
	}, []);

	const updatePV = (commission, user) => {
		setA(user);
		let c = commission + user.PV;
		setUnilevelCommission(c);
		axios.put(`https://backend-node-1.herokuapp.com/user/update/${user._id}`, {
			PV: commission + user.PV,
		});
	};

	const calculateCommission = (amount, unilevel, user) => {
		const commission = Math.ceil((amount / 100) * unilevels[--unilevel]);

		updatePV(commission, user);
	};

	const calc = async () => {
		if (newArr !== undefined && newArr !== typeof String) {
			toast.error("here");
			let email = newArr[0];
			setEmail(newArr[0]);
			await axios
				.get(`https://backend-node-1.herokuapp.com/user-email/${email}`)
				.then((res1) => {
					axios
						.get(`https://backend-node-1.herokuapp.com/referral-user/${res1.data.referredBy}`)
						.then(async (res2) => {
							setReferralUser(res2.data);
							if (res2.data.Redeemed >= 30) {
								calculateCommission(
									abc.total_price,
									res2.data.Unilevel,
									res2.data,
								);
							}
						});
				});
		}
	};

	useEffect(() => {
    toast.error(newArr);
		if (props.newArr !== undefined && props.newArr !== typeof String) {
			toast.error(props.newArr[0].email);
			let email = props.newArr[0].email;
			setEmail(props.newArr[0].email);
			axios.get(`https://backend-node-1.herokuapp.com/user-email/${email}`).then((res1) => {
				axios
					.get(`https://backend-node-1.herokuapp.com/referral-user/${res1.data.referredBy}`)
					.then(async (res2) => {
						setReferralUser(res2.data);
						if (res2.data.Redeemed >= 30) {
							calculateCommission(
								abc.total_price,
								res2.data.Unilevel,
								res2.data,
							);
						}
					});
			});
		}
	}, []);

	return <Fragment></Fragment>;
};

export default OrderHandler;
