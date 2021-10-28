import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Swiper from 'react-native-swiper'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'






export default function TrangChu({navigation}) {

   
    return (
        <View>
            <FlatList style={styles.scroll}
                ListFooterComponent={() =>
                    <View>
                        <View style={styles.head1}>
                            <LinearGradient colors={['#ffd21d', '#ffd940', '#ffe16d']} style={styles.linearGradient}>
                                <View style={{flexDirection:'row'}}>
                                    <View>
                                        <TouchableOpacity>
                                        <Image
                                            source={require('./img/user.png')}
                                            style={styles.iconhead1}
                                        />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{flexDirection:'column', marginTop:35, marginLeft:20}}>
                                        <View>
                                        <Text style={{fontSize:20   , fontWeight:'bold'}}>Đạt</Text>
                                        <View style={{flexDirection:'row', marginTop:20}}>
                                        <FontAwesome5 name="chess-queen" size={15} color="#88b95d"/>
                                        <Text style={{marginLeft:10}}>Đậu vàng</Text>
                                        </View>
                                        </View>
                                    </View>
                                    <View >
                                        <TouchableOpacity style={{width:100, height:40, marginLeft:110, marginTop:50, borderRadius:30, flexDirection:'row', backgroundColor:'white'}}>
                                        <Image
                                        source={require('./img/coffee-beans.png')}
                                        style={{width:15, height:15, alignSelf:'center', marginLeft:30}}
                                        />
                                        <Text style={{marginLeft:5, alignSelf:'center'}}>0</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </LinearGradient>
                        </View>
                        <View style={styles.deli}>
                                <View>
                                    <TouchableOpacity >
                                        <Ionicons style={{paddingLeft:10,paddingTop:10 ,width:60, height:60, borderRadius:30, backgroundColor:'#eff7ec', }} name="card-outline" size={40} color="#88b95d" />
                                    </TouchableOpacity>
                                    <Text style={styles.txtDeli}>Nạp đậu</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={()=>navigation.navigate('Oder')}>
                                        <Fontisto style={{paddingLeft:14,paddingTop:10 ,width:60, height:60, borderRadius:30, backgroundColor:'#eff7ec'}} name="card-outline" size={40} color="#88b95d"  name="motorcycle" size={40} color="#88b95d" />  
                                    </TouchableOpacity>
                                    <Text style={styles.txtDeli}>Giao hàng</Text>
                                </View>
                                <View>
                                    <TouchableOpacity>
                                        <Ionicons style={{paddingLeft:10,paddingTop:10 ,width:60, height:60, borderRadius:30, backgroundColor:'#eff7ec'}} name="card-outline" size={40} color="#88b95d"  name="md-barcode-outline" size={40} color="#88b95d" />  
                                    </TouchableOpacity>
                                    <Text style={styles.txtDeli}>Tích Point</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={()=>navigation.navigate('KhuyenMai')}>
                                        <Ionicons style={{paddingLeft:11,paddingTop:10 ,width:60, height:60, borderRadius:30, backgroundColor:'#eff7ec'}} name="card-outline" size={40} color="#88b95d"  name="ios-gift" size={40} color="#88b95d" />      
                                    </TouchableOpacity>
                                    <Text style={styles.txtDeli}>Voucher</Text>
                                </View>
                            </View>
                            
                            
                       
                        <View style={{marginTop:10, width:'95%', alignSelf:'center'}}>
                            <TouchableOpacity style={{ width: '100%', height: 240, marginTop: 15 }}>
                                <Swiper style={styles.wrapper}
                                    index={0}
                                    autoplay={true}
                                    dot={
                                        <View
                                            style={{
                                                backgroundColor: 'silverred',
                                                width: 18,
                                                height: 3,
                                                marginBottom: 8,
                                                marginHorizontal: 2
                                            }}
                                        />
                                    }
                                    activeDot={
                                        <View
                                            style={{
                                                backgroundColor: 'white',
                                                width: 18,
                                                height: 3,
                                                marginBottom: 8,
                                                marginHorizontal: 2
                                            }}
                                        />
                                    }
                                >
                                    <View style={styles.slide}>
                                        <View style={styles.slide1}>
                                            <Image
                                                source={require('./img/slide.jpg')}
                                                style={{
                                                    width: '100%',
                                                    height: '90%',
                                                    alignSelf: 'center',
                                                    borderRadius: 10,
                                                }}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.slide}>
                                        <View style={styles.slide1}>
                                            <Image
                                                source={require('./img/slide1.jpg')}
                                                style={{
                                                    width: '100%',
                                                    height: '90%',
                                                    alignSelf: 'center',
                                                    borderRadius: 10,
                                                }}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.slide}>
                                        <View style={styles.slide1}>
                                            <Image
                                                source={require('./img/slide2.jpg')}
                                                style={{
                                                    width: '100%',
                                                    height: '90%',
                                                    alignSelf: 'center',
                                                    borderRadius: 10,
                                                }}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.slide}>
                                        <View style={styles.slide1}>
                                            <Image
                                                source={require('./img/slide3.jpg')}
                                                style={{
                                                    width: '100%',
                                                    height: '90%',
                                                    alignSelf: 'center',
                                                    borderRadius: 10,
                                                }}
                                            />
                                        </View>
                                    </View>
                                    <View style={styles.slide}>
                                        <View style={styles.slide1}>
                                            <Image
                                                source={require('./img/slide4.jpg')}
                                                style={{
                                                    width: '100%',
                                                    height: '90%',
                                                    alignSelf: 'center',
                                                    borderRadius: 10,
                                                }}
                                            />
                                        </View>
                                    </View>
                                </Swiper>
                            </TouchableOpacity>
                            </View>
                <View style={{flexDirection:'column', height:330}}>
                    <Text style={{ fontSize:20, fontWeight:'bold', marginLeft:10}}>Gợi ý cho bạn</Text>
                    <View style={{flexDirection:'row'}}>
                    <ScrollView horizontal style={{flexDirection:'row', marginTop:20, marginRight:15 }}>
                    <TouchableOpacity>
                            <View>
                                <Image
                                    source={require('./img/hotsoyamilk.jpg')}
                                    style={{
                                        width: 280,
                                        height: 180,
                                        alignSelf: 'center',
                                        borderRadius: 10,
                                        marginLeft:15,
                                    }}
                                />
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16, fontWeight:'bold'}}>Hot Soya Milk (MỚI)</Text>
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16}}>55.000 đ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Image
                                    source={require('./img/chocolatemilk.jpg')}
                                    style={{
                                        width: 280,
                                        height: 180,
                                        alignSelf: 'center',
                                        borderRadius: 10,
                                        marginLeft:15,
                                    }}
                                />
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16, fontWeight:'bold'}}>Hot Chocolate Latte (MỚI)</Text>
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16}}>55.000</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Image
                                    source={require('./img/soyaoganic.jpg')}
                                    style={{
                                        width: 280,
                                        height: 180,
                                        alignSelf: 'center',
                                        borderRadius: 10,
                                        marginLeft:15,
                                    }}
                                />
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16, fontWeight:'bold'}}>Soya Milk Organic</Text>
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16}}>45.000</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Image
                                    source={require('./img/soyabuoihong.jpg')}
                                    style={{
                                        width: 280,
                                        height: 180,
                                        alignSelf: 'center',
                                        borderRadius: 10,
                                        marginLeft:15,
                                    }}
                                />
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16, fontWeight:'bold'}}>Bưởi hồng hạt sen Macchiato (Đặc biệt)</Text>
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16}}>65.000</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Image
                                    source={require('./img/soyakhoailang.jpg')}
                                    style={{
                                        width: 280,
                                        height: 180,
                                        alignSelf: 'center',
                                        borderRadius: 10,
                                        marginLeft:15,
                                    }}
                                />
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16, fontWeight:'bold'}}>Khoai lang trà xanh Macchiato</Text>
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16}}>65.000</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
                    </View>
               
                </View>

                <View style={{flexDirection:'column', height:330}}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={{ fontSize:20, fontWeight:'bold', marginLeft:10, }}>Voucher/Khuyến Mãi</Text>
                        <TouchableOpacity>
                            <AntDesign style={{marginTop:8, marginLeft:160}} name="right" size={20} color="silver"/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView horizontal style={{flexDirection:'row', marginTop:20, marginRight:15}}>
                    <TouchableOpacity>
                            <View>
                                <Image
                                    source={require('./img/voucher1.jpg')}
                                    style={{
                                        width: 280,
                                        height: 180,
                                        alignSelf: 'center',
                                        borderRadius: 10,
                                        marginLeft:15,
                                    }}
                                />
                                <Text style={{width: 280,marginLeft:15, marginTop:10, fontSize:16, fontWeight:'bold'}}>Cùng Soya Chill quên lỗi. Thứ sáu "đen tối", đồng giá BEANCUP</Text>
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16}}>Giảm 20.000đ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Image
                                    source={require('./img/voucher2.jpg')}
                                    style={{
                                        width: 280,
                                        height: 180,
                                        alignSelf: 'center',
                                        borderRadius: 10,
                                        marginLeft:15,
                                    }}
                                />
                                <Text style={{width: 280,marginLeft:15, marginTop:10, fontSize:16, fontWeight:'bold'}}>Tiếp thêm năng lượng cổ vũ thêm sung. Mua 3 Tặng 2</Text>
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16}}>Tặng thêm 40.000đ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Image
                                    source={require('./img/voucher3.jpg')}
                                    style={{
                                        width: 280,
                                        height: 180,
                                        alignSelf: 'center',
                                        borderRadius: 10,
                                        marginLeft:15,
                                    }}
                                />
                                <Text style={{width: 280,marginLeft:15, marginTop:10, fontSize:16, fontWeight:'bold'}}>Thử ngay trân châu ô mai</Text>
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16}}>Giảm 10.000đ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Image
                                    source={require('./img/voucher4.png')}
                                    style={{
                                        width: 280,
                                        height: 180,
                                        alignSelf: 'center',
                                        borderRadius: 10,
                                        marginLeft:15,
                                    }}
                                />
                                <Text style={{width: 280,marginLeft:15, marginTop:10, fontSize:16, fontWeight:'bold'}}>Free 50 đậu bông cho hóa đơn đầu tiên giá trị từ 99k</Text>
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16}}>Tặng 50.000đ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View>
                                <Image
                                    source={require('./img/voucher5.png')}
                                    style={{
                                        width: 280,
                                        height: 180,
                                        alignSelf: 'center',
                                        borderRadius: 10,
                                        marginLeft:15,
                                    }}
                                />
                                <Text style={{width: 280,marginLeft:15, marginTop:10, fontSize:16, fontWeight:'bold'}}>Khi mua đồ uống từ 7h-10h tặng bánh Waffle</Text>
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16}}>Tặng 35.000đ</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
               
                </View>
            </View>}
                    
            />
            
            
        </View>

    )
}



const styles = StyleSheet.create({
    scroll: {
        height:'auto'
       
    },
    linearGradient: {
        width: '100%',
        height: 200,
        
    },
    slide: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '100%',
        height: '90%',
    },
    slide1: {
        flex: 1,
        width: 'auto',
        height: 'auto',
        marginRight: 5,
        overflow: 'hidden'
    },
    slide2:{
        width:250,
        height:150,
        marginLeft: 10,
    },
    head1:{
        width:'100%',
        height:110,
        alignSelf:'center',
        flexDirection: 'row'
    },
   
    wrapper: {
        
        
    },
    deli: {
        width: '95%',
        height: 130,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        borderColor:'white',
        borderRadius: 10
        
    },
    Delivery: {
        width: '25%',
        height: 100,
        backgroundColor: 'white',
        borderRadius: 8,
        marginLeft: 5,
        marginRight: 5,

    },
    DeliIcon: {
        width: 40,
        height: 40,
        marginLeft: 10,
        marginTop: 15,
        alignSelf: 'center',
        borderRadius: 20,
        backgroundColor:'#60dc8f'
    },
    iconhead1:{
        width: 60,
        height: 60,
        marginLeft: 10,
        marginTop: 40,
        flexDirection:'row',
        borderRadius: 30,
        backgroundColor:'white',
        alignItems:'center',
        
    },
    txtDeli: {
        fontSize: 15,
        marginLeft: 10,
        marginTop: 10
    },
    Log: {
        width: '95%',
        height: 200,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 8,
        alignItems: 'center',
        borderWidth: 0.3,
        borderColor: 'silver',
    },
    banner: {
        width: '95%',
        height: 150,
        alignSelf: 'center',
        marginTop: 20
    },
    reward: {
        width: '95%',
        height: 1000,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 20,
        borderWidth: 0.3,
        borderColor: 'silver',
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'center'
    },
    Notif: {
        width: '95%',
        height: 'auto',
        backgroundColor: 'white',
        alignSelf: 'center',
        borderColor: '#f9f9f9',
        borderWidth: 0.5,
        borderRadius: 8,
    },
    Noti: {
        margin: 15,
        flexDirection: 'row'
    },
    NotiTxt: {
        marginLeft: 20
    },
})