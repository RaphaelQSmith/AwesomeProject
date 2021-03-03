import React, { Component } from 'react'
import { Alert, StyleSheet, Button, View, Text } from 'react-native'

class Game extends Component {
    ranNum = 3 + Math.floor(5 * Math.random())
        render() {
        return (
            <View style={styles.container}>
                <Text style={styles.target}>{this.ranNum}</Text>
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
    target:{
        fontSize: 40,
        backgroundColor: '#aaa',
        marginHorizontal: 50,
        textAlign: 'center'
    }
})

export default Game;
