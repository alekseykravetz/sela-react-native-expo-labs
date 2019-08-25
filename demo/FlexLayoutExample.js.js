import React from 'react';
import { View, StyleSheet } from 'react-native';

export class FixedDimensionsBasics extends React.Component {
  render() {
    return (
      <View>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 100, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 150, height: 150, backgroundColor: 'steelblue'}} />
      </View>
    );
  }
}

export class FlexDimensionsBasics extends React.Component {
    render() {
      return (
        // Try removing the `flex: 1` on the parent View.
        // The parent will not have dimensions, so the children can't expand.
        // What if you add `height: 300` instead of `flex: 1`?
        <View style={{flex: 1}}>
          <View style={{flex: 1, backgroundColor: 'powderblue'}} />
          <View style={{flex: 2, backgroundColor: 'skyblue'}} />
          <View style={{flex: 3, backgroundColor: 'steelblue'}} />
        </View>
      );
    }
  }

  export class FlexExamples extends React.Component {

    renderSqure = color => <View style={{width: 50, height: 50, backgroundColor: color}} />

    render() {
      return (
        <View style={styles.container}>
          {this.renderSqure('powderblue')}
          {this.renderSqure('skyblue')}
          {this.renderSqure('steelblue')}
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: "space-around",
      alignItems: "center",
    }
  });
  