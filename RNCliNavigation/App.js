import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const App = () => {
  return (
    <>
      <View style={styles.container}>
				<View style={styles.body}>
					<Text>Body</Text>
				</View>
      </View>
			<View style={styles.footer}>
				<Text>Footer</Text>
			</View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }, 
	body: {
		flex: 0.7
	}, 
  footer: {
		flex: 0.3,
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
