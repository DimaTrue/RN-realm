import React, { Component } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import LoadingComponent from '../components/LoadingComponent';


class AuthLoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    const { navigation } = this.props;
    const userToken = await AsyncStorage.getItem('userData');
    navigation.navigate(userToken !== null ? 'App' : 'SignIn');
  };

  render() {
    return <LoadingComponent />;
  }
}

export default AuthLoadingScreen;
