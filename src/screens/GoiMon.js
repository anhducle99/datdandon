import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
// import { Colors, Metrics } from '../themes';

import { useDispatch, useSelector } from "react-redux";
import { getImage } from '../utils'

export default function ThongBao() {
    const [data, setDate] = useState([])
    const productList = useSelector((store) => store.cartReducer.products);
    const dispatch = useDispatch();


    console.log('productList', productList)

    const onChangeQuantity = (type, item) => () => {
        if (type === 'reduce' && item.quantity === 1) {
            dispatch({ type: 'REMOVE_ITEM', data: item })
        } else {
            dispatch({ type: 'CHANGE_QUANTITY', data: item, changeQuantityType: type })
        }
    }

    const onRemoveItem = (item) => () => {
        dispatch({ type: 'REMOVE_ITEM', data: item })
    }
    const onRemoveAll = () => dispatch({ type: 'REMOVE_ALL' })

    const renderItem = ({ item }) => {
        return (
            <View style={{ flex: 1, flexDirection: 'row', marginTop:15, marginLeft:15, marginRight:15, backgroundColor:'#ffd21d', borderRadius:15 }}>
                <Image
                    style={{ width: 100, borderRadius:20 }}
                    source={{ uri: item.image }}
                />
                <View style={{ marginLeft: 5, marginVertical: 10, width: '100%', flex: 1, marginLeft: 10, marginTop:15  }}>
                    <Text style={{ fontSize: 17, }}>{item.product_name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1, width: '100%' }}>
                        <View style={{ flex: 1}}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 19, fontWeight: 'bold', marginRight: 10 }}>{item.price}</Text>
                                <Text style={{ fontSize: 19, textDecorationLine: 'line-through', textDecorationStyle: 'solid' }}>{item.price}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <Text style={{ textAlign: 'center', width: 50, borderWidth: 1, padding: 5, borderRadius: 5, backgroundColor: '#90ee90', borderColor: 'transparent' }}>
                                    50%
                                </Text>
                                <View style={{ flexDirection: 'row', marginRight: 10 }}>
                                    <TouchableOpacity onPress={onChangeQuantity('reduce', item)}>
                                        <Ionicons name="md-remove" size={25} color={'black'} />
                                    </TouchableOpacity>
                                    <Text style={{ fontSize: 20, marginHorizontal: 10 }}>{item?.quantity}</Text>
                                    <TouchableOpacity onPress={onChangeQuantity('increase', item)}>
                                        <Ionicons name="add-outline" size={25} color={'black'} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <TouchableOpacity onPress={onRemoveItem(item)} style={{marginTop:18}}>
                            <Ionicons name="ios-trash-outline" size={30} color={'red'} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    };


    return (
        <View>
            <FlatList
                style={{ backgroundColor: 'silver' }}
                data={productList}
                renderItem={renderItem}
                keyExtractor={(item) => item._id?.toString()}
            // extraData={}
            />
            {productList?.length ?
                <TouchableOpacity style={{ marginTop: 10 }} onPress={onRemoveAll}>
                    <Text>
                        Xóa tất cả
                    </Text>
                </TouchableOpacity> :
                <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                    <Text>Trống</Text>
                </View>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    wishlistIcon: {
        marginRight: 5,
        position: 'absolute',
        top: 5,
        right: 5,
        zIndex: 1
    },
    imgStyle: {
        height: 130,
        width: 'auto',
        borderRadius:10
    }

});