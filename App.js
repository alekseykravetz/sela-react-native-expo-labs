import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import MyButton from './labs/CounterButton';
import Blink from './labs/Blink';
import PhoneBook from './labs/PhoneBook';

import Demo1_ViewAndTextExample from './demo/ViewAndText';
import Demo2_TextInputAndButton from './demo/TextInputAndButton';
import Demo3_ImageAndTouchable from './demo/ImageAndTouchable';
import Demo4_SearchResults from './demo/FlatListExample/SearchResults';
import {FixedDimensionsBasics, FlexDimensionsBasics, FlexExamples} from './demo/FlexLayoutExample.js.js';
import Demo6_AnimationOpacity from './demo/AnimationOpacity';
import Demo7_AnimationTransform from './demo/AnimationTransform';

import TicTacToeExample from './tic-tac-toe-example/tic-tac-toe';


export default class MyApp extends React.Component {
  render() {
    return (
      <View style={styles.container}>

        <Text>Demo:</Text>

        {/* <Demo1_ViewAndTextExample /> */}
        {/* <Demo2_TextInputAndButton /> */}
        {/* <Demo3_ImageAndTouchable /> */}
        {/* <Demo4_SearchResults /> */}
        {/* demo5 
          <FixedDimensionsBasics />
          <FlexDimensionsBasics /> 
          <FlexExamples />
        */}
        {/* <Demo6_AnimationOpacity /> */}
        {/* <Demo7_AnimationTransform /> */}



        {/* <MyButton /> */}
        {/* <Blink text='I love to blink' /> */}
        {/* <PhoneBook /> */}

        <TicTacToeExample />

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 20, backgroundColor: '#fff', },
});

// alignItems: 'center', justifyContent: 'center',
