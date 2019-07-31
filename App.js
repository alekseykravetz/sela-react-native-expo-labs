import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MyButton from './CounterButton';


export default class MyApp extends React.Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <MyButton />
      </View>
    );
  }
}


const styles = StyleSheet.create({ 
  container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', },
});
