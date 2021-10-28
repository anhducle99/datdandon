import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ScrollView, SafeAreaView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import axios from 'axios'
import { getImage } from '../utils'
import { getCate, getProductList } from '../services/Api'
import { useSelector, useDispatch } from "react-redux";





export default function Oder({ navigation }) {
    const dispatch = useDispatch();


    const [product, setProduct] = useState([])
    const [cate, setCate] = useState();
    // const dispatch = useDispatch();
    // const product = useSelector((store) => store.productReducer.products);

    useEffect(() => {
        // dispatch(getProduct({ page: 1, limit: 10 }));
        // getProductList()
        const callGetProductList = async () => {
            const response = await getProductList();
            console.log('rs', response.data.data); // data tu api tra ve
            setProduct(response.data.data)
        };
        const getCategoryIds = async () => {
            const response = await getCate();
            setCate(response.data.map(e => e.id));
        }
        getCategoryIds();
        callGetProductList()
    }, [])


    const onMoveToDetail = (data) => () => {
        // navigation.navigate('Detail', { detail: data });
    }
    const onAddToCart = (item) => () => {
        dispatch({ type: 'ADD_CART', data: { ...item, quantity: 1 } })
    }

    const renderItem = ({ item }) => {
        console.log('item', item)
        return (
            <View style={{ width: '45%', marginTop: 10 }}>
                <Image
                    style={styles.imgStyle}
                    source={{ uri: item.image }}
                />
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ width: "80%" }}>
                        <Text style={{ fontWeight: 'bold', marginTop: 10 }}>{item.product_name}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', }}>
                    <Text style={{ marginTop: 5 }}>{item.price}</Text>
                    <TouchableOpacity onPress={onAddToCart(item)}>
                        <Ionicons style={{ marginLeft: 95 }} name="md-add-circle" size={30} color='#ffce05' />
                    </TouchableOpacity>
                </View>
            </View>

        );
    }
    return (
        <View>
            <ScrollView >
                <View>
                    <View>
                        <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20, marginLeft: 15 }}>Danh Mục</Text>
                    </View>
                    <View horizontal style={{ height: 120 }}>

                        <View style={{ flexDirection: 'column', marginTop: 10 }}>

                            <View style={{ flexDirection: 'row', }}>
                                <TouchableOpacity
                                    style={styles.boxitem}
                                    onPress={() => setDataState(DATA1)}
                                >
                                    <Image
                                        source={require('./img/soyaavt.png')}
                                        style={{
                                            width: 30,
                                            height: 30,
                                            flexDirection: 'row',
                                            borderRadius: 30,
                                            backgroundColor: 'white',
                                            alignItems: 'center',
                                        }}

                                    />
                                    <Text>SOYA MILK</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.boxitem}
                                    onPress={() => setDataState(DATA2)}
                                >
                                    <Image
                                        source={require('./img/soyaavt.png')}
                                        style={{
                                            width: 30,
                                            height: 30,
                                            flexDirection: 'row',
                                            borderRadius: 30,
                                            backgroundColor: 'white',
                                            alignItems: 'center',
                                        }}

                                    />
                                    <Text>SOYA COFFEE</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.boxitem}
                                    onPress={() => setDataState(DATA1)}
                                >
                                    <Image
                                        source={require('./img/soyaavt.png')}
                                        style={{
                                            width: 30,
                                            height: 30,
                                            flexDirection: 'row',
                                            borderRadius: 30,
                                            backgroundColor: 'white',
                                            alignItems: 'center',
                                        }}

                                    />
                                    <Text style>SOYA COFFEE</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.boxitem}
                                    onPress={() => setDataState(DATA1)}
                                >
                                    <Image
                                        source={require('./img/soyaavt.png')}
                                        style={{
                                            width: 30,
                                            height: 30,
                                            flexDirection: 'row',
                                            borderRadius: 30,
                                            backgroundColor: 'white',
                                            alignItems: 'center',
                                        }}

                                    />
                                    <Text>SOYA COFFEE</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.boxitem}
                                    onPress={() => setDataState(DATA1)}
                                >
                                    <Image
                                        source={require('./img/soyaavt.png')}
                                        style={{
                                            width: 30,
                                            height: 30,
                                            flexDirection: 'row',
                                            borderRadius: 30,
                                            backgroundColor: 'white',
                                            alignItems: 'center',
                                        }}

                                    />
                                    <Text>SOYA COFFEE</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ flexDirection: 'row', marginTop: 10 }}>




                            </View>
                        </View>
                    </View>
                </View>



            </ScrollView>
            <Text style={{ fontSize: 16, padding: 12, fontWeight: 'bold' }}>Tất cả các món</Text>
            <FlatList
                data={product}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={item => item._id?.toString()}
                columnWrapperStyle={{ justifyContent: 'space-around', marginBottom: 10, flex: 1 }}
                style={{ marginBottom: 100 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    boxitem: {
        borderWidth: 0,
        alignSelf: 'center',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 10,
        width: 120,
        height: 70,
        backgroundColor: 'white',
        borderRadius: 15,
        padding: 15,
    },
    item: {
        backgroundColor: "#f9c2ff",
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16
    },
    title: {
        fontSize: 32
    },
    imgStyle: {
        height: 130,
        width: 'auto',
        borderRadius: 10
    }
});