import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';

// https://docs.expo.io/tutorial/sharing/

export default function App() {

  const [shareCode, setShareCode] = React.useState(null);

  var img;
  function Simple() {
    // setShareCode(img);
    img = <SvgQRCode value="https://w3software.net.br"/>;
    return img;
  }

  function share() {
    setShareCode(img);
    console.log(shareCode);
    alert(img);
  }

  return (
    <View style={styles.container}>
      <Simple />
      <Button title="Share" onPress={share}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
  },
});
