import React, { Component } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
export default class Splash extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                                source={require('./img/logofb.png')}
                                style={{
                                    
                                    alignSelf: 'center',
                                    marginLeft: 10
                                }}
                            />
            </View>
        )
    }
} 
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
   
})