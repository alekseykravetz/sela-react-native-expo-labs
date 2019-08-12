import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

export default class ImageAndTouchable extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
        <TouchableOpacity onPress={() => alert('clicked...')}>
          <Image style={{ width: 100, height: 100 }}
            source={require('../assets/red-button.png')} />
        </TouchableOpacity>
      </View>
    );
  }
}

