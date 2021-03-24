import React from 'react';
import { FlatList } from 'react-native';
import { View, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements'
import { Button } from 'react-native-elements';
import { Icon } from 'react-native-elements';
import users from '../data/users';

export default props => {
  // console.warn(Object.keys(props)) 
  
  function getActions(user) {
    return (
      <>
        <Button 
          onPress={() => props.navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange"/>} 
        />
      </>
    );
  }
  
  function getUserItem({ item: user }) {
    return (
      <ListItem 
        key={user.id} 
        bottomDivider onPress={() => props.navigation.navigate('UserForm', user)} >
        <Avatar source={{uri: user.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{user.nome}</ListItem.Title>
          <ListItem.Subtitle>{user.email}</ListItem.Subtitle>          
        </ListItem.Content>
        <View>
          {getActions(user)}
        </View>
        <ListItem.Chevron />
      </ListItem>
    )
  }

  return (
    <View>
      <FlatList 
        keyExtractor={ user => user.id.toString() }
        data={users}
        renderItem={getUserItem}
      />
    </View>    
  );
}