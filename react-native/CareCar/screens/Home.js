import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

function FirstRout() {
  return (
    <View style={[styles.scene, { backgroundColor: '#ddd' }]}>
      <Text>FirstRout</Text>
    </View>
  );
}

function SecondRout() {
  return (
    <View style={[styles.scene, { backgroundColor: '#ddd' }]}>
      <Text>SecondRout</Text>
    </View>
  );
}

const initialLayout = { width: Dimensions.get('window').width };

export default function Home({ navigation }) {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' }
  ]);

  const renderScene = SceneMap({
    first: FirstRout, second: SecondRout
  });

  return (
    <TabView 
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },

  scene: {
    flex: 1, alignItems: 'center'
  }


});