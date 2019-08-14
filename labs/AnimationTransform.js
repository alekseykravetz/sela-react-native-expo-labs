import React, { Component } from 'react';
import { Animated, StyleSheet, Image, Easing, View } from 'react-native';

export default class AnimationTransform extends Component {

    constructor() {
        super();
        this.spinValue = new Animated.Value(0);
        this.widthValue = new Animated.Value(227);
    }

    componentDidMount() {
        this.spin();
        this.animateWidthShrink();
    }

    spin() {
        this.spinValue.setValue(0);
        Animated.timing(this.spinValue, {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear
        }).start(() => this.spin());
    }

    animateWidthShrink() {
        Animated.timing(this.widthValue, {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear
        }).start(() => this.animateWidthExpand());
    }

    animateWidthExpand() {
        Animated.timing(this.widthValue, {
            toValue: 227,
            duration: 4000,
            easing: Easing.linear
        }).start(() => this.animateWidthShrink());
    }

    render() {
        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        return (
            <View style={styles.container}>
                <Animated.Image
                    style={{ width: this.widthValue, height: 200, transform: [{ rotate: spin }] }}
                    source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
                />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F5FCFF' },
    welcome: { fontSize: 20, textAlign: 'center', margin: 10 },
    instructions: { textAlign: 'center', color: '#333333', marginBottom: 5 }
});
