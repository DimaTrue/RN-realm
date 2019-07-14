/* eslint-disable no-undef */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { connect } from 'react-redux';

import Realm from 'realm';

class TestScreen extends Component {

  state = { 
    realm: null,
    text: '', 
  };

   Products = {name: 'Products', properties: {name: 'string'}};

  componentDidMount() {
    Realm.open({
      schema: [this.Products]
    }).then(realm => { this.setState({realm})})
      // realm.write(() => {
      //   realm.create('Dog', {name: 'Rex'});
      // });
      // this.setState({ realm });
    //});
  }


handleText = value => this.setState({text: value})

addDog = async() => {
 await Realm.open({schema: [this.Products]})
 .then(realm => {
   realm.write(() => {
     realm.create('Products', {name: `${this.state.text}`})})
       this.setState({realm})
 })
}



  delDogs = async() => {
    await Realm.open({schema: [this.Products]})
    .then(realm => {
    realm.write(() => {
      realm.delete(realm.objects('Products'));
    })
    })
    .then(realm => this.setState({realm}))
  }

  render() {
    console.warn("state ", this.props.currentProduct)
    const data = this.state.realm ? 
    this.state.realm.objects('Products')
     : [];
    return (
     
      <View style={styles.container}>{
      data.map(((item, i) =>
       <Text key={`${item.name}_${i}`} style={styles.welcome}>{item.name}</Text>))
       }
       <TextInput onChangeText={(value) => this.handleText(value)}/>
        <TouchableOpacity>
          <Text onPress={this.addDog}>Add Product</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text onPress={this.delDogs}>Delete Products</Text>
        </TouchableOpacity>
        <Text style={styles.welcome}>{}</Text>
      </View>
    );
  }
}

const mapStateToProps = state =>({
  currentProduct: state.products.currentProduct
})

export default connect(mapStateToProps)(TestScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcome: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center'
  }
});