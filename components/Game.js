import React, { Component } from 'react'
import { Alert, StyleSheet, Button, View, Text } from 'react-native'
import PropTypes from 'prop-types'

class Game extends Component {
    static propTypes = {
        randomNumberCount: PropTypes.string.isRequired,
    }
    ranNum = 3 + Math.floor(5 * Math.random())
    randomNumbers = Array.from({ length:this.props.randomNumberCount })
                         .maps(() => 1+ Math.floor))
        render() {
        return (
            <View style={styles.container}>
                <Text style={styles.target}>{this.ranNum}</Text>
                <Text>{this.props.randomNumberCount}</Text>

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
