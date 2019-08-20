import React from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

import MyButton from './labs/CounterButton';
import Blink from './labs/Blink';
import PhoneBook from './labs/PhoneBook';
import AnimationOpacity from './labs/AnimationOpacity';
import AnimationTransform from './labs/AnimationTransform';
import SearchResults from './labs/SearchResults';
import {FixedDimensionsBasics, FlexDimensionsBasics} from './labs/Layout';
import ViewAndTextExample from './labs/ViewAndText';
import TextInputAndButton from './labs/TextInputAndButton';
import ImageAndTouchable from './labs/ImageAndTouchable';

import Game from './labs/tic-tac-toe/alex';


export default class MyApp extends React.Component {

  state = {
    users: [
      {
        name: "Proxima Midnight",
        email: "proxima@appdividend.com"
      },
      {
        name: "Ebony Maw",
        email: "ebony@appdividend.com"
      },
      {
        name: "Black Dwarf",
        email: "dwarf@appdividend.com"
      },
      {
        name: "Mad Titan",
        email: "thanos@appdividend.com"
      },
      {
        name: "Supergiant",
        email: "supergiant@appdividend.com"
      },
      {
        name: "Loki",
        email: "loki@appdividend.com"
      },
      {
        name: "corvus",
        email: "corvus@appdividend.com"
      },
      {
        name: "Proxima Midnight",
        email: "proxima1@appdividend.com"
      },
      {
        name: "Ebony Maw",
        email: "ebony1@appdividend.com"
      },
      {
        name: "Black Dwarf",
        email: "dwarf1@appdividend.com"
      },
      {
        name: "Mad Titan",
        email: "thanos1@appdividend.com"
      },
      {
        name: "Supergiant",
        email: "supergiant1@appdividend.com"
      },
      {
        name: "Loki",
        email: "loki1@appdividend.com"
      },
      {
        name: "corvus",
        email: "corvus1@appdividend.com"
      }
    ]
  };

  render() {
    return (
      <View style={styles.container}>


        {/* <Text>Open up App.js to start working on your app!</Text> */}

        {/* <ImageAndTouchable /> */}

        {/* <MyButton /> */}
        {/* <Blink text='I love to blink' /> */}
        {/* <MyButton /> */}
        {/* <Image source={require('./assets/icon.png')} /> */}
        {/* <FlatList data={this.state.users}
                  keyExtractor={(item, index) => `item: ${item} index: ${index}`}
                  renderItem={({item}) => (<Text>List item: {item.name}</Text>)}
                  /> */}
        {/* <PhoneBook /> */}
        <AnimationOpacity />
        <AnimationTransform />
        {/* <SearchResults data={this.state.users} /> */}

        {/* <Game /> */}

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', },
});

// alignItems: 'center', justifyContent: 'center',
