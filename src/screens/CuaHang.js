import React from 'react'
import { StyleSheet, Text, TextInput, View, Image, ImageBackground, TouchableOpacity, FlatList, ScrollView,  } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function CuaHang({navigation}) {
    return (
        <ScrollView>
            <View style={{flexDirection:'row', marginLeft:15, marginTop:15}}>
                <View style={{width:280, height:50, flexDirection:'row', borderWidth:0.5, borderRadius:5, borderColor:'sliver', marginLeft:30}}>
                    <Entypo style={{marginLeft:15, marginTop:8}} name="magnifying-glass" size={30} color="#88b95d"/>
                    <TextInput
                            style={{ marginLeft: 5, fontSize: 16,  }}
                            placeholder='Tìm kiếm của hàng'
                    />
                </View>
                <TouchableOpacity onPress={()=> navigation.navigate('BanDo')}>
                    <Entypo style={{marginLeft:15, marginTop:8}} name="direction" size={30} color="#88b95d"/> 
                </TouchableOpacity>
            </View>
            <ScrollView style={{flexDirection:'column', height:'auto', marginTop:20}}>
            <TouchableOpacity>
                <View style={{width:'90%', height:340, alignSelf:'center', backgroundColor:'white', borderRadius:20}}>
                    <View style={{}}>
                        <ImageBackground
                            source={require('./img/soyahdt.jpg')}
                            style={{
                            width: '100%',
                            height: 180,
                            alignSelf: 'center',
                            }}
                        >
                            <View style={{width:220, height:40, flexDirection:'row', backgroundColor:'#fad309', borderRadius:5, marginTop:5}}>
                                <Ionicons style={{alignSelf:'center', marginLeft:5}} name="alarm-outline" size={30} color="#88b95d" />
                                <Text style={{fontSize:15, fontWeight:'bold', alignSelf:'center'}}>8:00-23:00(Đang mở cửa)</Text>
                            </View>
                        </ImageBackground>
                    <Text style={{fontSize:15, fontWeight:'bold', marginTop:10 }}>Soya Garden - Hoàng Đạo Thúy</Text>
                    <View style={{flexDirection:'row', marginTop:10}}>
                        <Entypo style={{ marginTop:8}} name="location" size={30} color="#88b95d"/> 
                        <Text style={{fontSize:15, marginLeft:10, fontFamily:'vincHand' , width:300}}>N04, Tòa Nhà UDIC COMPLEX, Hoàng Đạo Thúy, Cầu Giấy, Hà Nội</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:10}}>
                        <Entypo style={{ marginTop:8}} name="phone" size={30} color="#88b95d"/> 
                        <Text style={{fontSize:15, marginLeft:10, marginTop:10 }}>0822 626 069</Text>
                    </View>
                    </View>
                </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
                <View style={{width:'90%', height:340, alignSelf:'center', backgroundColor:'white', marginTop:20, borderRadius:20}}>
                    <View style={{}}>
                        <ImageBackground
                            source={require('./img/soyahdd.jpg')}
                            style={{
                            width: '100%',
                            height: 180,
                            alignSelf: 'center',
                            }}
                        >
                            <View style={{width:220, height:40, flexDirection:'row', backgroundColor:'#fad309', borderRadius:5, marginTop:5}}>
                                <Ionicons style={{alignSelf:'center', marginLeft:5}} name="alarm-outline" size={30} color="#88b95d" />
                                <Text style={{fontSize:15, fontWeight:'bold', alignSelf:'center'}}>8:00-23:00(Đang mở cửa)</Text>
                            </View>
                        </ImageBackground>
                    <Text style={{fontSize:15, fontWeight:'bold', marginTop:10 }}>Soya Gadren - Hồ Đắc Di</Text>
                    <View style={{flexDirection:'row', marginTop:10}}>
                        <Entypo style={{ marginTop:8}} name="location" size={30} color="#88b95d"/> 
                        <Text style={{fontSize:15, marginLeft:10, fontFamily:'vincHand' , width:300}}>Số 3 Hồ Đắc Di, Quận Đống Đa, Hà Nội</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:10}}>
                        <Entypo style={{ marginTop:8}} name="phone" size={30} color="#88b95d"/> 
                        <Text style={{fontSize:15, marginLeft:10, marginTop:10 }}>0776 333 693</Text>
                    </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{width:'90%', height:340, alignSelf:'center', backgroundColor:'white', marginTop:20, borderRadius:20}}>
                    <View style={{}}>
                        <ImageBackground
                            source={require('./img/soyanct.jpg')}
                            style={{
                            width: '100%',
                            height: 180,
                            alignSelf: 'center',
                            }}
                        >
                            <View style={{width:220, height:40, flexDirection:'row', backgroundColor:'#fad309', borderRadius:5, marginTop:5}}>
                                <Ionicons style={{alignSelf:'center', marginLeft:5}} name="alarm-outline" size={30} color="#88b95d" />
                                <Text style={{fontSize:15, fontWeight:'bold', alignSelf:'center'}}>8:00-23:00(Đang mở cửa)</Text>
                            </View>
                        </ImageBackground>
                    <Text style={{fontSize:15, fontWeight:'bold', marginTop:10 }}>Soya Garden - Nguyễn Chí Thanh</Text>
                    <View style={{flexDirection:'row', marginTop:10}}>
                        <Entypo style={{ marginTop:8}} name="location" size={30} color="#88b95d"/> 
                        <Text style={{fontSize:15, marginLeft:10, fontFamily:'vincHand' , width:300}}>93 Nguyễn Chí Thanh, Láng Hạ, Quận Đống Đa, Hà Nội</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:10}}>
                        <Entypo style={{ marginTop:8}} name="phone" size={30} color="#88b95d"/> 
                        <Text style={{fontSize:15, marginLeft:10, marginTop:10 }}>090 469 66 48</Text>
                    </View>
                    </View>
                </View>
            </TouchableOpacity>
            <TouchableOpacity>
                <View style={{width:'90%', height:340, alignSelf:'center', backgroundColor:'white', marginTop:20, borderRadius:20}}>
                    <View style={{}}>
                        <ImageBackground
                            source={require('./img/soyald.jpg')}
                            style={{
                            width: '100%',
                            height: 180,
                            alignSelf: 'center',
                            }}
                        >
                            <View style={{width:220, height:40, flexDirection:'row', backgroundColor:'#fad309', borderRadius:5, marginTop:5}}>
                                <Ionicons style={{alignSelf:'center', marginLeft:5}} name="alarm-outline" size={30} color="#88b95d" />
                                <Text style={{fontSize:15, fontWeight:'bold', alignSelf:'center'}}>8:00-23:00(Đang mở cửa)</Text>
                            </View>
                        </ImageBackground>
                    <Text style={{fontSize:15, fontWeight:'bold', marginTop:10 }}>Soya Garden - Linh Đàm</Text>
                    <View style={{flexDirection:'row', marginTop:10}}>
                        <Entypo style={{ marginTop:8}} name="location" size={30} color="#88b95d"/> 
                        <Text style={{fontSize:15, marginLeft:10, fontFamily:'vincHand' , width:300}}>Kiot 8, Tầng 1, Tòa Nhà Rainbow, KĐT Tây Nam Linh Đàm, Quận Hoàng Mai, Hà Nội</Text>
                    </View>
                    <View style={{flexDirection:'row', marginTop:10}}>
                        <Entypo style={{ marginTop:8}} name="phone" size={30} color="#88b95d"/> 
                        <Text style={{fontSize:15, marginLeft:10, marginTop:10 }}>0782 366 628</Text>
                    </View>
                    </View>
                </View>
            </TouchableOpacity>
            </ScrollView>
            </ScrollView>
    )
}
