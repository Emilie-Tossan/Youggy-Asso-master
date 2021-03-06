import React from "react";
import {
	TextInput,
	Text,
	View,
	TouchableOpacity,
	StyleSheet
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import CountryPicker from "react-native-country-picker-modal";

import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp
} from "react-native-responsive-screen";

import BackButton from "../Components/BackButton";
import { auth } from "react-native-firebase";

import firebase from "react-native-firebase";

const Device = require("react-native-device-detection");

const styles = StyleSheet.create({
	screenContainer: {
		width: "100%",
		height: "100%"
	},
	mainContainer: {
		marginTop: "auto",
		marginBottom: "auto",
		marginLeft: "auto",
		marginRight: "auto",
		// width: '100%',
		paddingLeft: Device.isTablet ? wp("25%") : wp("13%"),
		paddingRight: Device.isTablet ? wp("25%") : wp("13%")
	},
	title: {
		fontSize: hp("2.9%"),
		fontWeight: "bold",
		color: "white",
		paddingBottom: hp("6%")
	},
	info: {
		fontSize: hp("2%"),
		fontWeight: "bold",
		color: "white",
		paddingBottom: hp("1.5%")
	},
	status: {
		height: hp("6%"),
		lineHeight: hp("1.8%"),
		letterSpacing: 0.2,
		fontWeight: "900",
		fontSize: hp("1.8%"),
		color: "white",
		textAlign: "center"
	},
	line: {
		borderBottomColor: "white",
		borderBottomWidth: 1,
		marginBottom: 5,
		color: "white",
		fontSize: hp("2.2%"),
		fontWeight: "bold",
		paddingBottom: 5,
		paddingLeft: 6,
		width: Device.isTablet ? wp("45%") : wp("75%")
	},
	linePhone: {
		borderBottomColor: "white",
		borderBottomWidth: 1,
		marginBottom: 5,
		color: "white",
		fontSize: hp("2.2%"),
		fontWeight: "bold",
		paddingBottom: 5,
		paddingLeft: 6,
		width: Device.isTablet ? wp("35%") : wp("54%")
	},
	//
	// Row
	//
	rowContainer: {
		flexDirection: "row"
	},
	phoneContainer: {
		// borderBottomColor: 'white',
		// borderBottomWidth: 1,
		marginBottom: 7,
		paddingLeft: 6,
		top: hp("-1%")
	},
	phoneText: {
		color: "white",
		fontSize: hp("2.2%"),
		fontWeight: "bold",
		marginBottom: 5
	},
	inputContainer: {
		paddingLeft: 9
	},
	//
	// Utils
	//
	space: {
		paddingBottom: hp("6%")
	},
	space2: {
		paddingBottom: hp("0.1%")
	},
	button: {
		textAlign: "center",
		fontSize: hp("3%"),
		fontWeight: "bold",
		color: "white"
	}
});

export default class App extends React.Component {
	static navigationOptions = {
		header: null
	};

	state = {
		phone: "",
		email: "",
		falsePhone: true,
		falseEmail: true,
		regexNumber: /^[0-9]{10}$/g,
		regexEmail: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		status: true,
		cca2: "FR",
		callingCode: "33",
		color: "#FFFFFF",
		newEntryRef: null
	};
	onSelect = country => {
		// console.log(country);
		// setCountryCode(country.cca2);
		// setCountry(country);
		this.setState({
			cca2: country.cca2,
			callingCode: country.callingCode[0]
		});
	};
	checkForm = async () => {
		const {
			phone,
			email,
			falseEmail,
			falsePhone,
			newEntryRef,
			callingCode
		} = this.state;
		const auth = firebase.auth();
		if (!falseEmail && !falsePhone) {
			this.setState({ status: true });
			//add the phone and the email to the database
			try {
				const internationalPhone = `+${callingCode}${phone}`;
				const phoneSnapshot = await auth.verifyPhoneNumber(
					internationalPhone
				);
				await newEntryRef.set(
					{
						internationalPhone,
						nationalPhone: phone,
						email
					},
					{ merge: true }
				);
				this.props.navigation.navigate("ContactConfirmAsso", {
					mailOrPhone: "numéro de téléphone portable",
					mailOrSms: "SMS",
					pronom: "le",
					phone,
					email,
					newEntryRef,
					phoneSnapshot,
					internationalPhone
				});
			} catch (err) {
				console.log(err);
			}
		} else this.setState({ status: false });
	};

	validateInput = (text, field) => {
		const { regexEmail, regexNumber } = this.state;
		if (field === "phone" && !regexNumber.test(text)) {
			this.setState({ falsePhone: true });
		} else if (field === "phone" && text.length === 10) {
			this.setState({ falsePhone: false });
		} else if (field === "phone") {
			this.setState({ falsePhone: false });
		}
		if (field === "email" && !regexEmail.test(text)) {
			this.setState({ falseEmail: true });
		} else if (field === "email" && text !== "") {
			this.setState({ falseEmail: false });
		} else if (field === "email") {
			this.setState({ falseEmail: true });
		}
		this.setState({ [field]: text });
	};

	componentDidMount() {
		const { getParam } = this.props.navigation;
		const newEntryRef = getParam("newEntryRef", null);
		const cca2 = getParam("cca2", "FR");
		const callingCode = getParam("callingCode", "33");
		this.setState({
			newEntryRef,
			cca2,
			callingCode
		});
	}

	render() {
		const { goBack } = this.props.navigation;
		const { falseEmail, falsePhone, phone, email } = this.state;
		return (
			<View style={styles.screenContainer}>
				<LinearGradient
					colors={["#FFA901", "#FFCC48", "#FFA901"]}
					style={{ flex: 1 }}
					start={{ x: 0, y: 0 }}
					end={{ x: 0, y: 1 }}
				>
					<BackButton text="Retour" goBack={goBack} />
					<View style={styles.mainContainer}>
						<Text style={styles.title}>
							Comment nous contacter ?{"   "}
						</Text>
						<Text style={styles.info}>NUMÉRO DE TÉLÉPHONE</Text>
						<View style={{ paddingBottom: hp("1%") }} />
						<View style={styles.rowContainer}>
							<View style={styles.phoneContainer}>
								<CountryPicker
									// withFilter={true}
									withFlag={true}
									// withCountryNameButton={true}
									withCallingCodeButton={true}
									withAlphaFilter={true}
									withCallingCode={true}
									withEmoji={true}
									onSelect={this.onSelect}
									// visible
									countryCode={this.state.cca2}
									translation={"fra"}
									theme={{
										onBackgroundTextColor: this.state.color
									}}
									onOpen={() =>
										this.setState({ color: "#000000" })
									}
									onClose={() =>
										this.setState({
											color: "#FFFFFF"
										})
									}
								/>
							</View>
							<View style={styles.inputContainer}>
								<TextInput
									keyboardType="number-pad"
									autoCorrect={false}
									autoCompleteType="off"
									autoCapitalize="none"
									style={styles.linePhone}
									onChangeText={text =>
										this.validateInput(text, "phone")
									}
									value={phone}
								/>
							</View>
						</View>
						<View style={styles.space2} />
						<Text style={styles.info}>ADRESSE E-MAIL</Text>
						<View style={{ paddingBottom: hp("1%") }} />

						<TextInput
							keyboardType="email-address"
							autoCorrect={false}
							autoCompleteType="off"
							autoCapitalize="none"
							style={
								// falseEmail ? (
								// 	{ ...styles.line, color: 'orange' }
								// ) : (
								styles.line
								// )
							}
							onChangeText={text =>
								this.validateInput(text, "email")
							}
							value={email}
						/>
						<View style={{ paddingBottom: "1%" }} />
						{this.state.status ? (
							<View style={{ height: hp("6%") }} />
						) : (
							<Text style={styles.status}>
								Vérifiez que votre numéro de téléphone et votre
								adresse e-mail sont corrects.
							</Text>
						)}
						<View style={{ paddingBottom: "1%" }} />
						<TouchableOpacity onPress={this.checkForm}>
							<Text style={styles.button}>Je continue</Text>
						</TouchableOpacity>
					</View>
				</LinearGradient>
			</View>
		);
	}
}
