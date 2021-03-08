import React from 'react'
import PropTypes from 'prop-types'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

export class RanNum extends React.Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
    }
    handlePress = () => {
        console.log(this.props.number)
    }
    render() {
        return (
            <TouchableOpacity style={styles.eachBox} onPress={this.handlePress} >
                <Text >{this.props.number}</Text>
            </TouchableOpacity>    
        )
    }
}

const styles = StyleSheet.create({
    eachBox: {
        backgroundColor: '#ddd',
        width: 100,
        marginHorizontal: 8,
        marginVertical:30,
        textAlign: 'center',
        fontSize: 35
    },
})

export default RanNum
