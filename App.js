import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Button,
	Text,
	TouchableOpacity
} from 'react-native';

export default class App extends Component {

	constructor() {
		super()
		this.state = {}
	}

	render() {

		let rows = []
		let nums = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0, ".", "="]]
		for (let i = 0; i < 4; i++) {
			let row = []
			for (let j = 0; j < 3; j++) {
				row.push(
					<TouchableOpacity style={styles.btn}>
						<Text style={styles.num}>
							{nums[i][j]}
						</Text>
					</TouchableOpacity>)
			}
			rows.push(<View style={styles.row}>{row}</View>)
		}

		let operations = ["DEL", "/", "*", "-", "+"]
		let ops = []
		for (let i = 0; i < 5; i++) {
			ops.push(
				<TouchableOpacity style={styles.btn}>
					<Text style={styles.op}>
						{operations[i]}
					</Text>
				</TouchableOpacity>
			)
		}

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
						{rows}
					</View>
					<View style={styles.operations}>
						{ops}
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
	btn: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "stretch",
	},
	num: {
		color: "white",
		fontSize: 25
	},
	op: {
		color: "white",
		fontSize: 21
	},
	row: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-evenly"
	},
	operations: {
		flex: 1,
		backgroundColor: '#92a294',
		alignItems: 'center',
		justifyContent: "space-evenly"
	},
});  