import React from 'react';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Lista from './Lista';
import Framedata from './Framedata';

export class App extends React.Component {
  static navigationOptions = {
    title: 'Wybierz postac',
    headerStyle: {
      backgroundColor: '#7f7fff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  render() {
    return (
      <View style={{flex: 1,justifyContent: 'center', alignItems: 'center'}}>
        <Lista/>
      </View>
      );
  }
}

const RootStack = createStackNavigator({
  Home: App,
  Lista: Lista,
  Framedata: Framedata
});

export default createAppContainer(RootStack);