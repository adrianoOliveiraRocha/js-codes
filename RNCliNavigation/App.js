import 'react-native-gesture-handler';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NavStack from './src/navigators/NavStack'

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.body}>
				{/* <Text style={styles.title}>Test</Text> */}
				<NavStack />
			</View>
			<View style={styles.footer}>
				<Text style={styles.title}>Footer</Text>
			</View>
		</View>
		
	)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
		alignItems: 'center'
  }, 
	body: {
		flex: 0.7,
		textAlign: 'center',
		alignContent: 'center',
		justifyContent: 'center'
	}, 
	title: {
		fontSize: 25
	},
  footer: {
		flex: 0.3,
    color: 'black',
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});
