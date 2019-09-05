import React, {Component} from 'react';
import {View,Text,TextInput} from 'react-native';

class Barang extends Component {
  constructor(props){
    super(props);
    this.state = {
      nama_barang: '',
      jumlah_barang: ''
    }
  }

  setJumlahBarang = event => {
    this.setState({jumlah_barang: event})
  }

  setNamaBarang = event => {
    this.setState({nama_barang: event})
  }

  render(){
    return(
      <View>
        <TextInput onChangeText={this.setNamaBarang} placeholder="Masukan Nama Barang" value={this.state.nama_barang} />
        <TextInput onChangeText={this.setJumlahBarang} placeholder="Masukan Jumlah" value={this.state.jumlah_barang} keyboardType="numeric" />
        <Text>{this.props.namabelanja}</Text>
        <Text>Nama Barang : {this.state.nama_barang}</Text>
        <Text>Jumlah Barang : {this.state.jumlah_barang}</Text>
      </View>
    )
  }

}

export default Barang;
