import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Image, Easing, View, Button, Text } from 'react-native';


const calculateWinner = squares => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
};

export default class Game extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            history: [
                {
                    squares: Array(9).fill(null)
                }
            ],
            stepNumber: 0,
            xIsNext: true
        };
    }

    handleClick = i => {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }

        squares[i] = this.state.xIsNext ? 'X' : 'O';
        const historyWithNewStep = history.concat([{ squares }]);

        this.setState({
            history: historyWithNewStep,
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
    }


    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0
        });
    }

    render() {
        console.log('Game rendering');

        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const status = winner ? `Winner: ${winner}` : `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;

        return (
            <View style={styles.game}>
                <Board squares={current.squares} onClick={i => this.handleClick(i)} />
                <View style={styles.gameInfo}>
                    <Text>{status}</Text>
                    <View>
                        {history.map((step, move) => (
                            <View key={move}>
                                <Button
                                    style={move === this.state.stepNumber ? styles.selectedMove : {}}
                                    onPress={() => this.jumpTo(move)}
                                    title={move ? `Go to move #${move}` : 'Go to game start'}>
                                </Button>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        );
    }

}


class Board extends React.Component {
    renderSquare(i) {
        return <Square key={i} squareIndex={i} value={this.props.squares[i]} onClick={this.props.onClick} />;
    }

    render() {
        console.log('Board rendering');

        return (
            <View style={styles.board}>

                {[0, 3, 6].map(rowVal => (
                    <View key={rowVal} style={styles.boarRrow} height={100}>
                        {[0, 1, 2].map(columnVal => this.renderSquare(rowVal + columnVal))}
                    </View>
                ))}

            </View>
        );
    }
}

class Square extends React.Component {
    render() {
        console.log(`Square #${this.props.squareIndex} rendering`);

        return (
            <TouchableOpacity style={styles.boardSquare} onPress={() => this.props.onClick(this.props.squareIndex)}>
                <Text>{this.props.value ? this.props.value : ''}</Text>
            </TouchableOpacity>
        );
    };
}

const styles = {
    game: { padding: 20, flex: 1, flexDirection: 'column' },
    gameInfo: { marginTop: 20 },

    board: { padding: 20, border: '1px solid #e4e4e4' },

    boarRrow: { display: 'flex', flexDirection: 'row' },

    boardSquare: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundColor: 'green',
    },

    selectedMove: { backgroundColor: 'greenyellow' },

}

