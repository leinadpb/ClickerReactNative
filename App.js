import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './app/views/Home.js';
/*
export class Home extends React.Component{
  constructor(props){
      super(props);
      this.state = {
          timesClicked:0,
      }
  }
  updateClicker = () =>{
      this.setState(prevState =>{
          return { timesClicked: prevState.timesClicked + 1 };
      });
  }
  render(){
      return(
          <View>
              <Text>
                  {this.props.text}: {this.state.timesClicked}
              </Text>
              <Button title="Click" onPress={ () => {this.updateClicker} } />
          </View>
      );
  }
}*/

export default class App extends React.Component {
  render() {
      return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
          <Home text="Click times" />
        </View>
      );
  }
}
