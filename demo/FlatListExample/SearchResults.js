import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "./ListItem";

export default class SearchResults extends Component {

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

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({ item, index }) => <ListItem item={item} index={index} onPressItem={this._onPressItem} />;

  _onPressItem = (index, item) => {
    alert("alert from SearchResults component. Pressed row: " + index + " Item:" + item.name);
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.users}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
