import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class CounterButton extends React.Component {
 
  state = { counter: 0, }

  render() {
    const backgroundColor = this.state.counter % 2 ? 'green' : 'red';

    return (
      <TouchableOpacity style={[styles.buttonContainer, { backgroundColor }]}
        onPress={() => this.setState({ counter: this.state.counter + 1 })}>
        <Text style={styles.text}>
          {this.state.counter}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: { alignItems: 'center', justifyContent: 'center', width: 100, height: 100 },
  text: { fontSize: 20, }
});