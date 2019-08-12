import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';


export default class PhoneBook extends React.Component {

    state = {
        data: [
            { name: 'aaaa', phone: '050-111-2222' },
            { name: 'bbbb', phone: '050-111-2222' },
            { name: 'cccc', phone: '050-111-2222' },
            { name: 'dddd', phone: '050-111-2222' },
            { name: 'eeee', phone: '050-111-2222' },
            { name: 'ffff', phone: '050-111-2222' },
            { name: 'gggg', phone: '050-111-2222' },
            { name: 'hhhh', phone: '050-111-2222' },
        ],
        selected: { name: 'cccc', phone: '050-111-2222' },
    };

    _handleClick = (item) => {
        this.setState({ selected: item })
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.data.map(item => {
                    return (
                        <TouchableOpacity key={item.name + item.phone} onPress={() => this._handleClick(item)}>
                            <Text style={{ color: this.state.selected.name === item.name ? 'red' : 'green' }}>
                                {item.name} - {item.phone}
                            </Text>
                        </TouchableOpacity>
                    );
                })}

                <Text>{this.state.selected.name}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center', },
});