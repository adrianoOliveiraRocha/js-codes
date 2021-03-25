import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, Button } from 'react-native';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  
  return (
    <View style={styles.form}>
      <Text>Nome</Text>
      <TextInput 
        style={styles.input}
        onChangeText={nome => setUser({...user, nome})}
        value={user.nome}
        placeholder="Informe o nome nome"
        keyboardAppearance="dark"
      />

      <Text>Email</Text>
      <TextInput 
        style={styles.input}
        onChangeText={email => setUser({...user, email})}
        value={user.email}
        placeholder="Informe o email"
        keyboardAppearance="dark"
        keyboardType="email-address"
      />

      <Text>Avatar</Text>
      <TextInput 
        style={styles.input}
        onChangeText={avatarUrl => setUser({...user, avatarUrl})}
        value={user.avatarUrl}
        placeholder="Informe a url do avatar"
        keyboardAppearance="dark"
        keyboardType="url"
      />

      <Button 
        title="Salvar"
        onPress={() => {
          navigation.goBack()
        }}
      />

    </View>    
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 15
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10
  }
});