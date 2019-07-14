import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, TouchableHighlight,
} from 'react-native';
import ScrollableTabView, {
  ScrollableTabBar
} from 'react-native-scrollable-tab-view';
import { connect } from 'react-redux';

import { logOut } from '../actions/userData';
import { getProductsList } from '../actions/products';
import LoadingComponent from '../components/LoadingComponent';
import ProductItem from '../components/ProductItem';
import AddProductButton from '../components/AddProductButton';
import RenderTab from '../components/RenderTab';


class ProductList extends Component  {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: <AddProductButton props={navigation.state.params} />
    };
  };

  componentDidMount() {
    const { getProducts } = this.props;
    getProducts();
    this.props.navigation.setParams({current: 0})
  }

  render() {
    const {
      isLoading, products, signOut, navigation
    } = this.props;
    if (isLoading === true) {
      return <LoadingComponent />;
    }
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={signOut}>
          <Text>LOGOUT</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TestScreen')}>
          <Text>TestScreen</Text>
        </TouchableOpacity>
        <ScrollableTabView
          style={styles.container}
          renderTabBar={() => <ScrollableTabBar renderTab={RenderTab} />}
          prerenderingSiblingsNumber={3}
          tabBarUnderlineStyle={{backgroundColor: 'green'}}
          tabBarPosition="top"
           onChangeTab={({i, ref} ) => this.props.navigation.setParams({current: i})}
        >
          {products.map((item, i) => (
            <ProductItem
              tabLabel={item}
              i={i}
              key={item.pk}
              item={item}
            />
          ))}
        </ScrollableTabView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.products.isLoading,
  products: state.products.productList,
});

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(logOut()),
  getProducts: () => dispatch(getProductsList())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
