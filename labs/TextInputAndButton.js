import React from 'react';
import { View, TextInput, Button } from 'react-native';

export default class TextInputAndButton extends React.Component {

  state = { text: 'Some Placeholder' };

  render() {
    return (
      <View style={{ flex: 1, marginTop: 50 }}>
    
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
        />

        <Button
          onPress={() => alert(this.state.text)}
          title="Click Me"
          color="#841584"
        />

      </View>
    );
  }
}

