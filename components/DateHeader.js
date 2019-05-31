import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class DateHeader extends Component {

    render() {
        return (
            <View>
                <Text>this.props.date</Text>
            </View>
        )
    }
}
