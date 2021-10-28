import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'


export default function Home() {
    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRightWidth: 1 }}>
                    <Text>Sort By</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Giao Hàng</Text>
                </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Text>aaaaa</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 18 }}>Filter</Text>
                </View>
            </View>
        </View>
        

        
    )
}
