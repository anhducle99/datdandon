import React from 'react'
import { View, Text, Image,TouchableOpacity,ScrollView } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'


export default function ThongBao() {
    return (
        <ScrollView style={{flex:1, backgroundColor:'silver', width:'95%', alignSelf:'center'}}>
            <TouchableOpacity style={{flexDirection:'row', backgroundColor:'white',height:80, marginTop:2, alignItems:'center', justifyContent:'space-around'}}>
                <Image
                    source={require('./img/soyaavt.png')}
                    style={{width: 50,
                        height: 50,
                        flexDirection:'row',
                        borderRadius: 30,
                        backgroundColor:'white',
                        alignItems:'center',}}
                /> 
                <View style={{ }}> 
                    <Text style={{fontSize:18, fontWeight:'bold'}}>Đạt</Text>
                    <Text>0822626069</Text>
                </View>
                <AntDesign style={{marginTop:8, marginLeft:160}} name="right" size={20} color="silver"/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', backgroundColor:'white',height:80, marginTop:2, alignItems:'center'}}>
                <Image
                    source={require('./img/soyaavt.png')}
                    style={{width: 50,
                        height: 50,
                        flexDirection:'row',
                        borderRadius: 30,
                        backgroundColor:'white',
                        alignItems:'center',}}
                /> 
                <View style={{ }}> 
                    <Text style={{fontSize:18, fontWeight:'bold'}}>Đậu Vàng</Text>
                    <Text>+300 S-Point - Đậu kim cương</Text>
                </View>
                <AntDesign style={{marginTop:8, marginLeft:160}} name="right" size={20} color="silver"/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', backgroundColor:'white',height:80, marginTop:2, alignItems:'center', justifyContent:'space-around'}}>
                <Image
                    source={require('./img/soyaavt.png')}
                    style={{width: 50,
                        height: 50,
                        flexDirection:'row',
                        borderRadius: 30,
                        backgroundColor:'white',
                        alignItems:'center',}}
                /> 
                <View style={{ }}> 
                    <Text style={{fontSize:18, fontWeight:'bold'}}>Đạt</Text>
                    <Text>0822626069</Text>
                </View>
                <AntDesign style={{marginTop:8, marginLeft:160}} name="right" size={20} color="silver"/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', backgroundColor:'white',height:80, marginTop:2, alignItems:'center', justifyContent:'space-around'}}>
                <Image
                    source={require('./img/soyaavt.png')}
                    style={{width: 50,
                        height: 50,
                        flexDirection:'row',
                        borderRadius: 30,
                        backgroundColor:'white',
                        alignItems:'center',}}
                /> 
                <View style={{ }}> 
                    <Text style={{fontSize:18, fontWeight:'bold'}}>Đạt</Text>
                    <Text>0822626069</Text>
                </View>
                <AntDesign style={{marginTop:8, marginLeft:160}} name="right" size={20} color="silver"/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', backgroundColor:'white',height:80, marginTop:2, alignItems:'center', justifyContent:'space-around'}}>
                <Image
                    source={require('./img/soyaavt.png')}
                    style={{width: 50,
                        height: 50,
                        flexDirection:'row',
                        borderRadius: 30,
                        backgroundColor:'white',
                        alignItems:'center',}}
                /> 
                <View style={{ }}> 
                    <Text style={{fontSize:18, fontWeight:'bold'}}>Đạt</Text>
                    <Text>0822626069</Text>
                </View>
                <AntDesign style={{marginTop:8, marginLeft:160}} name="right" size={20} color="silver"/>
            </TouchableOpacity>
            <TouchableOpacity style={{flexDirection:'row', backgroundColor:'white',height:80, marginTop:2, alignItems:'center', justifyContent:'space-around'}}>
                <Image
                    source={require('./img/soyaavt.png')}
                    style={{width: 50,
                        height: 50,
                        flexDirection:'row',
                        borderRadius: 30,
                        backgroundColor:'white',
                        alignItems:'center',}}
                /> 
                <View style={{ }}> 
                    <Text style={{fontSize:18, fontWeight:'bold'}}>Đạt</Text>
                    <Text>0822626069</Text>
                </View>
                <AntDesign style={{marginTop:8, marginLeft:160}} name="right" size={20} color="silver"/>
            </TouchableOpacity>
        </ScrollView>
    )
}

