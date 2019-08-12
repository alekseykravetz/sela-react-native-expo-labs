import React from 'react';
import { Text } from 'react-native';


export default class Blink extends React.Component {
  
    //state object
    state = { isShowingText: true };

    componentDidMount(){
      // Toggle the state every second
      setInterval(() => (
        this.setState(previousState => (
          { isShowingText: !previousState.isShowingText }
        ))
      ), 1000);
    }

    render = () => <Text>{this.state.isShowingText ? this.props.text: ''}</Text>
  }