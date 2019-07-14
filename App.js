import React from 'react';
import { Provider } from 'react-redux';

import { store } from './src/store';
import NavigatorService from './src/navigation/NavigationService';
import AppNavigator from './src/navigation/AppNavigator';

const App = () => (
  <Provider store={store}>
    <AppNavigator ref={(navigatorRef) => {
      NavigatorService.setContainer(navigatorRef);
    }}
    />
  </Provider>
);

export default App;
