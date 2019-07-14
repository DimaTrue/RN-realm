import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { initCurrentProduct } from '../actions/products';

const AddProductButton = props => (
  <View style={styles.container}>
    <TouchableOpacity 
    onPress={() => props.initCurrentProduct(props.props.current)}
    style={styles.button}
    >
      <Text>
        Add product to basket
      </Text>
    </TouchableOpacity>
  </View>
);


const  mapDispatchToProps = dispatch => ({
  initCurrentProduct: (currentProduct) => dispatch(initCurrentProduct(currentProduct)),
})

export default connect(null, mapDispatchToProps)(AddProductButton);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    backgroundColor: 'steelblue',
    padding: 10,
  }
});
