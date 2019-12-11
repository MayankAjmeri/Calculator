import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Button,
	Text,
} from 'react-native';

export default class App extends Component {

	constructor() {
		super()
		this.state = {}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.calculation}>
					<Text style={styles.calculationText}>
						11*11
					</Text>
				</View>
				<View style={styles.result}>
					<Text style={styles.resultText}>
						121
				</Text>
				</View>
				<View style={styles.buttons}>
					<View style={styles.numbers}>
						<View style={styles.row}>
							<Button title="7" />
							<Button title="8" />
							<Button title="9" />
						</View>
						<View style={styles.row}>
							<Button title="4" />
							<Button title="5" />
							<Button title="6" />
						</View>
						<View style={styles.row}>
							<Button title="1" />
							<Button title="2" />
							<Button title="3" />
						</View>
						<View style={styles.row}>
							<Button title="." />
							<Button title="0" />
							<Button title="0" />
						</View>
					</View>
					<View style={styles.operations}>
						<Button title="DEL" />
						<Button title="/" />
						<Button title="*" />
						<Button title="-" />
						<Button title="+" />
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	calculation: {
		flex: 1.8,
		backgroundColor: 'white',
		justifyContent: "center",
		alignItems: "flex-end",
	},
	calculationText: {
		fontSize: 40,
		textAlignVertical: "center",
		padding: 15,
		// alignSelf: "flex-end",
	},
	result: {
		flex: 1.2,
		backgroundColor: 'green',
		justifyContent: "center",
		alignItems: "flex-end",
	},
	resultText: {
		fontSize: 30,
		textAlignVertical: "center",
		alignSelf: "flex-end",
		padding: 15,
	},
	buttons: {
		flex: 6,
		flexDirection: 'row',
	},
	numbers: {
		flex: 3,
		backgroundColor: '#434a3e',
	},
	row: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-around"
	},
	operations: {
		flex: 1,
		backgroundColor: '#7a8771',
		alignItems: 'center',
		justifyContent: "space-evenly"
	},
});  