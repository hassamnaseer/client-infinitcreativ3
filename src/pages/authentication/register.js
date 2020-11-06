import React, { useEffect, useState } from "react";
import axios from "axios";
import {
	Container,
	Row,
	Col,
	CardBody,
	Form,
	FormGroup,
	Input,
	Label,
	Button,
} from "reactstrap";

const Register = (props) => {
	const toggleform = () => {
		document.querySelector(".cont").classList.toggle("s--signup");
	};

	const [loginEmail, setLoginEmail] = useState("");
	const [loginPassword, setLoginPassword] = useState("");
	const [jwt, setJwt] = useState("")
	const [redirect, setRedirect] = useState(false);
	const [loginError, setLoginError] = useState("");

	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [address, setAddress] = useState("");
	const [referralLink, setReferralLink] = useState("");
	const [signupError, setSignupError] = useState("");

	const handleLoginEmailChange = (event) => {
		setLoginEmail(event.target.value);
	};
	const handleLoginPasswordChange = (event) => {
		setLoginPassword(event.target.value);
	};

	const authenticate = (jwt, next) => {
		if (typeof window !== undefined) {
			localStorage.setItem("jwt", JSON.stringify(jwt))
			localStorage.setItem("userEmail", jwt.user.Email)
			next()
		}
	}

	const handleLogin = async (event) => {
		event.preventDefault();

		console.log("here");
		if (loginEmail === "" || loginPassword === "") {
			console.error("error");
		} else {
			const body = {
				Email: loginEmail,
				Password: loginPassword,
			};
			const options = {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			};
			await axios
				.post("https://backend-node-1.herokuapp.com/login", JSON.stringify(body), options)
				.then((response) => {
					authenticate(response.data, () => {
						setRedirect(true)
						// props.history.push("/");
						window.location.replace("http://goldana.net");
					})
				})
				.catch((error) => {
					if (error.response !== undefined) {
						setLoginError(error.response.data.error);
					}
				});
		}
	};

	const handleFNameChange = (event) => {
		setFirstName(event.target.value);
	};
	const handleLNameChange = (event) => {
		setLastName(event.target.value);
	};
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};
	const handleConfirmPasswordChange = (event) => {
		setConfirmPassword(event.target.value);
	};
	const handleAddressChange = (event) => {
		setAddress(event.target.value);
	};
	const handleReferralCodeChange = (event) => {
		setReferralLink(event.target.value);
	};

	const generateReferralLink = (length) => {
		var result = "";
		var characters =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		console.log(result);
		return result;
	};

	const handleSignup = async (event) => {
		event.preventDefault();

		console.log("here");
		if (
			firstName === "" ||
			lastName === "" ||
			email === "" ||
			password === "" ||
			confirmPassword === "" ||
			address === "" ||
			referralLink === ""
		) {
			console.error("error");
		} else {
			const body = {
				FirstName: firstName,
				LastName: lastName,
				Email: email,
				Password: password,
				Address: address,
				PV: 0,
				Redeemed: 0,
				ReferralLink: generateReferralLink(16),
				Unilevel: 0,
				referredBy: referralLink,
			};

			const options = {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			};

			await axios
				.post("https://backend-node-1.herokuapp.com/signup", JSON.stringify(body), options)
				.then((response) => {
					authenticate(response.data, () => {
						setRedirect(true);
						// props.history.push("/");
						window.location.replace("http://localhost:3000");
					});
				})
				.catch((error) => {
					setSignupError(error.response.data.error);
				});

			// handleNow(body).then((data) => {
			// 	setSignupError(data);
			// 	// if (data.error) {
			// 	// 	setSignupError(data.error);
			// 	// } else {
			// 	// 	setFirstName("");
			// 	// 	setLastName("");
			// 	// 	setEmail("");
			// 	// 	setPassword("");
			// 	// 	setConfirmPassword("");
			// 	// 	setAddress("");
			// 	// 	setReferralLink("");
			// 	// 	setSignupError("");
			// 	// }
			// });
		}
	};

	return (
		<div className="page-wrapper">
			{/* {signupError!== "" && <h1>{signupError}</h1>} */}
			<Container fluid={true} className="p-0">
				{/* <!-- login page start--> */}
				<div className="authentication-main">
					<Row>
						<Col md="12">
							<div className="auth-innerright">
								<div className="authentication-box">
									<CardBody>
										<div className="cont text-center s--signup">
											<div>
												<Form className="theme-form" onsubmit="window.location.href = '/'">
													<h4>LOGIN</h4>
													<h6>Enter your Email and Password</h6>
													<FormGroup>
														<Label className="col-form-label pt-0">Email</Label>
														<Input
															className="btn-pill"
															type="email"
															required=""
															onChange={handleLoginEmailChange}
														/>
													</FormGroup>
													<FormGroup>
														<Label className="col-form-label">Password</Label>
														<Input
															className="btn-pill"
															type="password"
															required=""
															onChange={handleLoginPasswordChange}
														/>
													</FormGroup>
													<div className="checkbox p-0">
														<Input id="checkbox1" type="checkbox" />
														<Label for="checkbox1">Remember me</Label>
													</div>
													<FormGroup className="form-row mt-3 mb-0">
														<Button
															color="primary btn-block"
															type="submit"
															onClick={(event) => handleLogin(event)}
														>
															LOGIN
														</Button>
													</FormGroup>
													<div style={{ paddingBottom: 40 }}></div>
												</Form>
											</div>
											{/* <!-- login page end--> */}
											{/* <!-- Signup page Start--> */}
											<div className="sub-cont">
												<div className="img">
													<div className="img__text m--up">
														<h2>New User?</h2>
														<p>
															Sign up and discover great amount of new
															opportunities!
														</p>
													</div>
													<div className="img__text m--in">
														<h2>One of us?</h2>
														<p>
															If you already has an account, just sign in. We've
															missed you!
														</p>
													</div>
													<div className="img__btn" onClick={toggleform}>
														<span className="m--up">Sign up</span>
														<span className="m--in">Sign in</span>
													</div>
												</div>
												<div>
													<Form className="theme-form">
														<h4 className="text-center">NEW USER</h4>
														<h6 className="text-center">
															Enter your Username and Password For Signup
														</h6>
														<Row form>
															<Col md="6">
																<FormGroup>
																	<Input
																		className="btn-pill"
																		type="text"
																		placeholder="First Name"
																		onChange={handleFNameChange}
																	/>
																</FormGroup>
															</Col>
															<Col md="6">
																<FormGroup>
																	<Input
																		className="btn-pill"
																		type="text"
																		placeholder="Last Name"
																		onChange={handleLNameChange}
																	/>
																</FormGroup>
															</Col>
															<Col md="12">
																<FormGroup>
																	<Input
																		className="btn-pill"
																		type="email"
																		placeholder="Email"
																		onChange={handleEmailChange}
																	/>
																</FormGroup>
															</Col>
															<Col md="6">
																<FormGroup>
																	<Input
																		className="btn-pill"
																		type="password"
																		placeholder="Password"
																		onChange={handlePasswordChange}
																	/>
																</FormGroup>
															</Col>
															<Col md="6">
																<FormGroup>
																	<Input
																		className="btn-pill"
																		type="password"
																		placeholder="Confirm Password"
																		onChange={handleConfirmPasswordChange}
																	/>
																</FormGroup>
															</Col>
															<Col md="12">
																<FormGroup>
																	<Input
																		className="btn-pill"
																		type="text"
																		placeholder="Address"
																		onChange={handleAddressChange}
																	/>
																</FormGroup>
															</Col>
															<Col md="12">
																<FormGroup>
																	<Input
																		className="btn-pill"
																		type="text"
																		placeholder="Referral Code"
																		onChange={handleReferralCodeChange}
																	/>
																</FormGroup>
															</Col>
														</Row>
														<Row form>
															<Col sm="12">
																<Button
																	type="submit"
																	color="primary"
																	onClick={(event) => handleSignup(event)}
																>
																	Sign Up
																</Button>
															</Col>
														</Row>
													</Form>
												</div>
											</div>
										</div>
									</CardBody>
								</div>
							</div>
						</Col>
					</Row>
				</div>
				{/* <!-- Signup page end--> */}
			</Container>
		</div>
	);
};

export default Register;
