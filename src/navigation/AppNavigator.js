import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';

import AuthLoadingScreen from '../screens/AuthLoading';
import SignInScreen from '../screens/SignInScreen';
import ProductList from '../screens/ProductList';
import TestScreen from '../screens/TestScreen';


export const AppStack = createStackNavigator({ ProductList, TestScreen });

export default createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    SignIn: SignInScreen,
    // TestScreen
  },
  {
    initialRouteName: 'AuthLoading',
  }
));
