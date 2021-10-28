import React from 'react'
import { View, Text, Image } from 'react-native'

export default function Khac() {
    return (
        <View>
            <View>
                <Image
                    source={require('./img/soyaavt.png')}
                    style={{width: 30,
                        height: 30,
                        flexDirection:'row',
                        borderRadius: 30,
                        backgroundColor:'white',
                        alignItems:'center',}}
            
                />  
            </View>
        </View>
    )
}
