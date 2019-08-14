import React from 'react';
import { View, StyleSheet, Text, Image, Animated, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';


export default class AnimationOpacity extends React.Component {

    state = {
        toggle: false,
        fadeAnim: new Animated.Value(1),
    };

    _handleClick = () => {
        this.setState({ toggle: !this.state.toggle });

        Animated.timing(
            this.state.fadeAnim,
            {
                toValue: this.state.toggle ? 1 : 0,
                duration: 1000,
            }
        ).start();
    }

    render() {
        return (
            <View style={styles.container}>

                <Animated.View style={{ opacity: this.state.fadeAnim, width: this.state.widthAnim }}>
                    <TouchableWithoutFeedback onPress={() => this._handleClick()}>
                        <Image style={{ width: 100, height: 100 }}
                            source={require('../assets/red-button.png')} />
                    </TouchableWithoutFeedback>
                </Animated.View>

                {this.state.toggle === true && (
                    <TouchableOpacity onPress={() => this._handleClick()}>
                        <Text>return button</Text>
                    </TouchableOpacity>
                )}

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', marginTop: 50, },
});