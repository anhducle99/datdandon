import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView } from 'react-native'


export default function Voucher() {
    return (
        <View>
             <ScrollView horizontal style={{width:'100%'}}>
        <TouchableOpacity
          style={{ borderWidth: 1, borderColor: "red", marginRight: 10, width:'47%' }}
          
        >
          <Text>Uu dai khac biet</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ borderWidth: 1, borderColor: "green", width:'47%' }}
        
        >
          <Text>cap nha tu nha</Text>
        </TouchableOpacity>
      </ScrollView>
                    
                    <ScrollView>
                    <TouchableOpacity style={{marginTop:20}}>
                            <View>
                                <Image
                                    source={require('./img/voucher1.jpg')}
                                    style={{
                                        width: '90%',
                                        height: 180,
                                        alignSelf: 'center',
                                        borderRadius: 10,
                                    }}
                                />
                                <Text style={{width: 280,marginLeft:15, marginTop:10, fontSize:16, fontWeight:'bold'}}>Cùng Soya Chill quên lỗi. Thứ sáu "đen tối", đồng giá BEANCUP</Text>
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16, color:'#5d8e5f'}}>Giảm 20.000đ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:20}}>
                            <View>
                                <Image
                                    source={require('./img/voucher2.jpg')}
                                    style={{
                                        width: '90%',
                                        height: 180,
                                        alignSelf: 'center',
                                        borderRadius: 10,
                                    }}
                                />
                                <Text style={{width: 280,marginLeft:15, marginTop:10, fontSize:16, fontWeight:'bold'}}>Tiếp thêm năng lượng cổ vũ thêm sung. Mua 3 Tặng 2</Text>
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16, color:'#5d8e5f'}}>Tặng thêm 40.000đ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:20}}>
                            <View>
                                <Image
                                    source={require('./img/voucher3.jpg')}
                                    style={{
                                        width: '90%',
                                        height: 180,
                                        alignSelf: 'center',
                                        borderRadius: 10,
                                    }}
                                />
                                <Text style={{width: 280,marginLeft:15, marginTop:10, fontSize:16, fontWeight:'bold'}}>Thử ngay trân châu ô mai</Text>
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16, color:'#5d8e5f'}}>Giảm 10.000đ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:20}}>
                            <View>
                                <Image
                                    source={require('./img/voucher4.png')}
                                    style={{
                                        width: '90%',
                                        height: 180,
                                        alignSelf: 'center',
                                        borderRadius: 10,
                                    }}
                                />
                                <Text style={{width: 280,marginLeft:15, marginTop:10, fontSize:16, fontWeight:'bold'}}>Free 50 đậu bông cho hóa đơn đầu tiên giá trị từ 99k</Text>
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16, color:'#5d8e5f'}}>Tặng 50.000đ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{marginTop:20}}>
                            <View>
                                <Image
                                    source={require('./img/voucher5.png')}
                                    style={{
                                        width: '90%',
                                        height: 180,
                                        alignSelf: 'center',
                                        borderRadius: 10,
                                    }}
                                />
                                <Text style={{width: 280,marginLeft:15, marginTop:10, fontSize:16, fontWeight:'bold'}}>Khi mua đồ uống từ 7h-10h tặng bánh Waffle</Text>
                                <Text style={{marginLeft:15, marginTop:10, fontSize:16, color:'#5d8e5f'}}>Tặng 35.000đ</Text>
                            </View>
                        </TouchableOpacity>
                    </ScrollView>
               
                
        </View>
    )
}
