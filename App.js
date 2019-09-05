import React, {Component} from 'react';
import { View, Text, StatusBar } from 'react-native';
import Barang from './Component/Barang';

class App extends Component {
  render(){
    return (
      <View>
        <StatusBar backgroundColor="#CCC"/>
        <Text>TUGAS 2 REACT NATIVE</Text>
        <Barang namabelanja="============ Total Belanja =================" />
      </View>
    );
  }
};

export default App;
