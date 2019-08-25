import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default class TextInputAndButton extends React.Component {

  state = { name: 'Enter name' };

  handleTextChange = text => {

    let fixedText = text;
    if (this.state.name === 'Enter name') {
      fixedText = text.replace('Enter name', '');
    } else if (text === '') {
      fixedText = text.replace('', 'Enter name');
    }

    this.setState({ name: fixedText });
  }

  handleButtonClick = () => {
    const helloText = `Hello ${this.state.name}`;
    alert(helloText);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>

        <TextInput
          style={styles.textInput}
          onChangeText={this.handleTextChange}
          value={this.state.name}
        />

        <Button
          onPress={this.handleButtonClick}
          title="Click Me"
          color="#841584"
        />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  textInput: { height: 40, borderColor: 'gray', borderWidth: 1 },
});

