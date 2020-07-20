import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';

import Routes from './routes';

import store from './store';

const App = () => (
  <Provider store={store}>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <Routes />
  </Provider>
);

export default App;
