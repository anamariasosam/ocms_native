import React from 'react';
import { StackNavigator } from 'react-navigation';

import Agenda from './src/screens/Agenda';

const OCMS = StackNavigator({
  Agenda: { screen: Agenda },
});

const App = () => (
  <OCMS />
);

export default App;
