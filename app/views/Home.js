import React from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';

export default class Home extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            timesClicked:0,
        };
    }
    updateClicker = (i) =>{
        this.setState(prevState =>{
            let evt = prevState.timesClicked;
            if(i == 1){
                return { timesClicked: evt + i };
            }else{
                if(evt + i < 0){
                    Alert.alert("Sorry, it's not possible this value.");
                    return;
                }else{
                    return { timesClicked: evt + i };
                }
            }
            
        });
    }
    resetClicker = () => {
        this.setState(prevState => {
            return {timesClicked: 0};
        });
    }
    render(){
        let quantity = this.state.timesClicked;
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <View style={{flex:5, justifyContent:'center',alignItems:'center'}}>
                    <Text style={{margin:10, fontSize:20, fontWeight:'bold'}} >
                        {this.props.text}: {quantity}
                    </Text>
                    <Button title=" + 1 " onPress={ () => {this.updateClicker(1)} } />
                </View>
                <View style={{flex:1, margin:10, flexDirection:'row', justifyContent:'center',alignItems:'flex-end'}}>
                    <Button 
                        color='purple' 
                        title=" - 5 " 
                        onPress={() => {this.updateClicker(-5)}} />
                    <Button 
                        title="Reset" 
                        onPress={() => {this.resetClicker()}} />
                    <Button 
                        color='purple' 
                        title=" + 5 " 
                        onPress={() => {this.updateClicker(5)}} />
                </View>
            </View>
        );
    }
}