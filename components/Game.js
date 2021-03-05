import React, { Component } from 'react'
import { Alert, StyleSheet, Button, View, Text } from 'react-native'
import PropTypes from 'prop-types'

class Game extends Component {
    static propTypes = {
        randomNumberCount: PropTypes.number.isRequired,
    }
    // target = 3 + Math.floor(5 * Math.random())
    randomNumbers = Array
        .from({ length: this.props.randomNumberCount })
        .map(() => 1+ Math.floor(10* Math.random()))
    target = this.randomNumbers
        .slice(0, this.props.randomNumberCount - 2)
        .reduce((acc, curr) => acc + curr, 0)
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.target}>{this.target}</Text>
                {this.randomNumbers.map((randomNumber, index) =>
                    <Text key={index}>{randomNumber}</Text>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        flex: 1,
        paddingTop: 30,
    },

    target: {
        fontSize: 40,
        backgroundColor: '#aaa',
        marginHorizontal: 50,
        textAlign: 'center'
    }
})

export default Game;
