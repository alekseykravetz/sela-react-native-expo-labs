import React, { PureComponent } from "react";
import { TouchableHighlight, View, Text, StyleSheet } from "react-native";

export default class ListItem extends PureComponent {

  _onPress = () => {
    this.props.onPressItem(this.props.index, this.props.item);
  };

  render() {
    const { item } = this.props;

    return (
      <TouchableHighlight onPress={this._onPress} underlayColor="#dddddd">
        <View style={styles.flatview}>
          <Text style={styles.name} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.email} numberOfLines={2}>
            {item.email}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  flatview: { justifyContent: "center", paddingTop: 30, borderRadius: 2 }, 
  name: { fontSize: 18 }, 
  email: { color: "red" }
});
