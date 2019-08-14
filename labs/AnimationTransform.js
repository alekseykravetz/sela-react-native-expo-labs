import React, { Component } from 'react';
import { Animated, StyleSheet, Image, Easing, View } from 'react-native';

export default class AnimationTransform extends Component {

    constructor() {
        super();
        this.spinValue = new Animated.Value(0);
        this.widthValue = new Animated.Value(227);
        this.colorValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.animateSpin();
        this.animateWidthShrink();
        this.animateColor();
    }

    animateSpin() {
        this.spinValue.setValue(0);
        Animated.timing(this.spinValue, {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear
        }).start(() => this.animateSpin());
    }

    animateColor() {
        this.colorValue.setValue(0);
        Animated.timing(this.colorValue, {
            toValue: 1,
            duration: 4000,
            easing: Easing.linear
        }).start(() => this.animateColor());
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

        const color = this.colorValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['red', 'green']
        });

        return (
                <Animated.View style={{ ...styles.container, backgroundColor: color }}>
                    <Animated.Image
                        style={{ width: this.widthValue, height: 200, transform: [{ rotate: spin }] }}
                        source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
                    />
                </Animated.View>
        );
    }

}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
