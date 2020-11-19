import React, { useState } from 'react';
import {
  Alert, Modal, StyleSheet, Text, TouchableHightLight, View
} from 'react-native';
import Constants from 'expo-constants';

function ModalTest() {
  const [modalVisyble, setModalVisyble] = useState(false);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        tranparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Janela Fechada')
        }}>

        <View style={styles.centeredView}>
          <Text style={styles.modalText}>Javascript Programmer</Text>
        </View>

        <TouchableHightLight
          style={{ ...styles.openButton, backgroundColor: '#2196F3'}}
          onPress={() => {
            setModalVisyble(!modalVisible);
          }}
        >
          <Text style={styles.textStyle}></Text>
        </TouchableHightLight>

      </Modal>
    </View>
  );

}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'.
    marginTop: Contants.statusBarHeight
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: '#f194ff',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center'
  }
});

export default ModalTest;
