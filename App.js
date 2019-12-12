import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	TouchableOpacity,
} from 'react-native';

export default class App extends Component {

	constructor() {
		super()
		this.state = {
			calculationText: "",
			resultText: ""
		}
		this.operations = ["DEL", "/", "*", "-", "+"]
	}

	calculateResult() {
		const txt = this.state.calculationText
		this.setState({
			resultText: eval(txt)
		})
	}

	validate() {
		const txt = this.state.calculationText
		switch (txt.slice(-1)) {
			case "/":
			case "*":
			case "-":
			case "+":
				return false
		}
		return true
	}

	buttonPressed(text) {
		// console.log(text)

		if (text == '=') {
			return this.validate() && this.calculateResult()
		}

		this.setState({
			calculationText: this.state.calculationText + text
		})
	}

	operate(operation) {
		switch (operation) {
			case "DEL":
				let txt = this.state.calculationText.split('')
				txt.pop()
				this.setState({
					calculationText: txt.join('')
				})
				break
			case "/":
			case "*":
			case "-":
			case "+":
				const lastchar = this.state.calculationText.split('').pop()
				if (this.operations.indexOf(lastchar) > 0) return
				if (this.state.text == "")
					return
				this.setState({
					calculationText: this.state.calculationText + operation
				})
		}
	}

	render() {

		let rows = []
		let nums = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0, '.', '=']]
		for (let i = 0; i < 4; i++) {
			let row = []
			for (let j = 0; j < 3; j++) {
				row.push(
					<TouchableOpacity key={nums[i][j]} style={styles.btn} onPress={() => this.buttonPressed(nums[i][j])} >
						<Text style={styles.num}>
							{nums[i][j]}
						</Text>
					</TouchableOpacity>)
			}
			rows.push(<View key={i} style={styles.row}>{row}</View>)
		}

		let ops = []
		for (let i = 0; i < 5; i++) {
			ops.push(
				<TouchableOpacity key={this.operations[i]} style={styles.btn} onPress={() => this.operate(this.operations[i])} >
					<Text style={styles.op}>
						{this.operations[i]}
					</Text>
				</TouchableOpacity>
			)
		}

		return (
			<View style={styles.container}>
				<View style={styles.calculation}>
					<Text style={styles.calculationText}>
						{this.state.calculationText}
					</Text>
				</View>
				<View style={styles.result}>
					<Text style={styles.resultText}>
						{this.state.resultText}
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
		fontSize: 45,
		textAlignVertical: "center",
		padding: 20,
		// alignSelf: "flex-end",
	},
	result: {
		flex: 1.2,
		backgroundColor: 'white',
		justifyContent: "center",
		alignItems: "flex-end",
	},
	resultText: {
		fontSize: 40,
		textAlignVertical: "center",
		alignSelf: "flex-end",
		padding: 20,
	},
	buttons: {
		flex: 6,
		flexDirection: 'row',
	},
	numbers: {
		flex: 3,
		backgroundColor: '#434343',
	},
	btn: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		alignSelf: "stretch",
	},
	num: {
		color: "white",
		fontSize: 30
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
		backgroundColor: '#636363',
		alignItems: 'center',
		justifyContent: "space-evenly"
	},
	// onActionSelected: function(position) {
	// 	if (position === 0) { // index of 'Settings'
	// 	  showSettings();
	// 	}
	//   }

});  