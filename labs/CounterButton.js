import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

export default class CounterButton extends React.Component {
  state = {
    counter: 0,
  }

  _styles = {
    buttonContainer: { alignItems: 'center', justifyContent: 'center', width: 100, height: 100, backgroundColor: 'green' },
    text: { fontSize: 20, }
  }

  render() {
    this._styles.buttonContainer.backgroundColor = this.state.counter % 2 ? 'green' : 'red';
   
    return (
      <TouchableOpacity style={this._styles.buttonContainer}
        onPress={() => this.setState({ counter: this.state.counter + 1 })}>
        <Text style={this._styles.text}>
          {this.state.counter}
        </Text>
      </TouchableOpacity>
    );
  }
}