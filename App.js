import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MyButton from './CounterButton';



class Blink extends React.Component {

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  //state object
  state = { isShowingText: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
      <Text>{this.props.text}</Text>
    );
  }
}



export default class MyApp extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <MyButton />
        <Blink text='I love to blink' />

      </View>
    );
  }
}


const styles = StyleSheet.create({ 
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', },
});
