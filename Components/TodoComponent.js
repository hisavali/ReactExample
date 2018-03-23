import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from "react-redux"
import { Button } from 'react-native';
import { store } from '../Reducers/Store';

let todoId = 0
export default class TodoComponent extends React.Component {
    handleOnPress() {
        console.log('Pressed')
    }
    render() {
        return (
            <View>    
            <Button title = 'Tap'
                    onPress = {this.handleOnPress}></Button>
            </View>
        )            
    }
}