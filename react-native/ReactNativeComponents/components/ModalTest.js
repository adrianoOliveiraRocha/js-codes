import React, { useState } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHightLight,
  View
} from 'react-native';

function ModalTest() {
  const [modalVisyble, setModalVisyble] = useState(false);

}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center'
    marginTop: 22
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
  textSize: {
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
