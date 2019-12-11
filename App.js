import React, { Component } from 'react';
import {
	StyleSheet,
	View
} from 'react-native';

export default class App extends Component {

	constructor() {
		super()
		this.state = {}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.calculation}></View>
				<View style={styles.result}></View>
				<View style={styles.buttons}>
					<View style={styles.numbers}></View>
					<View style={styles.operations}></View>
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
		backgroundColor: 'white'
	},
	result: {
		flex: 1.2,
		backgroundColor: 'green'
	},
	buttons: {
		flex: 6,
		flexDirection: 'row',
	},
	numbers: {
		flex: 3,
		backgroundColor: '#434a3e',
		alignItems: "center",
		justifyContent: 'space-evenly'
	},
	operations: {
		flex: 1,
		backgroundColor: '#7a8771',
		alignItems: 'center',
		justifyContent: "space-evenly"
	},
});  