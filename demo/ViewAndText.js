import React from 'react';
import { View, Text } from 'react-native';

export default class ViewAndTextExample extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{backgroundColor: 'red'}}>Red Text</Text>
        <Text style={{backgroundColor: 'green'}}>Green Text</Text>
        <Text style={{backgroundColor: 'blue'}}>Blue Text</Text>
        <Text style={{backgroundColor: 'gray'}}>Gray Text</Text>
        <Text style={{backgroundColor: 'powderblue'}}>Powderblue Text</Text>
      </View>
    );
  }
}

