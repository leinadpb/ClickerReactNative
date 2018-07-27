import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './app/views/Home.js';

export default class App extends React.Component {
  render() {
      return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Home text="Click times" />
        </View>
      );
  }
}
