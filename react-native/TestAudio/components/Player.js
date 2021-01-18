import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Audio } from 'expo-av';
import SoundLibrary from './SoundLibrary';

try {
  Audio.setAudioModeAsync({
    staysActiveInBackground: true,
    interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX, // stop audio from others apps
  });
} catch (error) {
  console.log(error);
}

export default function Player() {
  const [sound, setSound] = React.useState(false);

  async function createSound() {
    console.log('one time');
    const sound = new Audio.Sound();
    await sound.loadAsync(SoundLibrary.rain);
    await sound.setIsLoopingAsync(true);
    await sound.setProgressUpdateIntervalAsync(0);
    
    setSound(sound); 
  }

  if(!sound) {
    console.log("create sound");
    createSound();
  }

  async function playSound() {  
    await sound.replayAsync({
      positionMillis: 0,
      shouldPlay: true,
      downloadFirst: false
    });    
  }

  async function stopSound() {
    await sound.stopAsync();
  }

  React.useEffect(() => {
    return sound
    ? () => {
      sound.unloadAsync();
    }
    : undefined
  }, [sound]);

  return (
    <View style={styles.container}>
      <Text>This is a test</Text>
      <View style={{padding: 10}}>
        <Button title="Play Sound" onPress={playSound}/>
      </View>
      <View style={{padding: 10}}>
        <Button title="Stop Sound" onPress={stopSound}/>
      </View>      
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
