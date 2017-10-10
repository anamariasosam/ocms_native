import React from 'react';
import { StackNavigator } from 'react-navigation';

import Home from './src/screens/Home';

const OCMS = StackNavigator({
  Home: { screen: Home },
});

const App = () => (
  <OCMS />
);

export default App;
