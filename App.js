import React from 'react';
import { StackNavigator } from 'react-navigation';

import HomeScreen from './src/screens/Home';

const OCMS = StackNavigator({
  Home: { screen: HomeScreen }
});

export default class App extends React.Component {
  render() {
    return (
      <OCMS />
    );
  }
}
