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
        <Text>Test</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },  
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
