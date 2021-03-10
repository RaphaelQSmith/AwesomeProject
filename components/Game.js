import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import PropTypes from 'prop-types'
import RandomNumber from './RanNum'

class Game extends React.Component {
    static propTypes = {
        randomNumberCount: PropTypes.number.isRequired,
    }
    // target = 3 + Math.floor(5 * Math.random())
    randomNumbers = Array
        .from({ length: this.props.randomNumberCount })
        .map(() => 1+ Math.floor(8 * Math.random()))
    target = this.randomNumbers
        .slice(0, this.props.randomNumberCount - 2)
        .reduce((acc, curr) => acc + curr, 0)
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.target}>{this.target}</Text>
                <View style={styles.numContainer}>
                    {this.randomNumbers.map((randomNumber, index) =>
                        <RandomNumber key={index} number={randomNumber} />
                    )}
                </View>
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
    },
    numContainer:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap', 
        margin: '15%',
        justifyContent: 'space-around',
    },
})

export default Game;
