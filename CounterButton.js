import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class CounterButton extends React.Component {
  state = {
    counter: 0,
  }
  render() {
    return (
      <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center',  width: 100, height: 100, backgroundColor: 'red' }} onPress={() => this.setState({ counter: this.state.counter + 1 })}>
        <Text style={{ fontSize: 20, }}>
          {this.state.counter}
        </Text>
      </TouchableOpacity>
    );
  }
}