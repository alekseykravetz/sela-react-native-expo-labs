import React, { Component } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "./ListItem";

export default class SearchResults extends Component {

  _keyExtractor = (item, index) => index.toString();

  _renderItem = ({ item, index }) => <ListItem item={item} index={index} onPressItem={this._onPressItem} />;

  _onPressItem = (index, item) => {
    alert("alert from SearchResults component. Pressed row: " + index + " Item:" + item.name);
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.data}
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
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
