import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Audio } from 'expo-av';

export default function App() {
  const [sound, setSound] = React.useState();

  async function playSound() {
    console.log("Loading sound...");
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/test.mp3')
    );
    setSound(sound);
    console.log("playing sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
    ? () => {
      console.log("Unloading sound");
      sound.unloadAsync();
    }
    : undefined
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text>This is a test</Text>
      <Button title="Play Sound" onPress={playSound}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
