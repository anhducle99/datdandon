import React, { useState } from 'react'
import { View, Text, TextInput, Image, StyleSheet, TouchableOpacity,Dimensions } from 'react-native'
import Modal from "react-native-modal";
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { login } from '../services/Api'

const {width, height} = Dimensions.get('window')



export default function DangNhap() {
    
    const [phone, setPhone] = useState('0822626069')
	const [code, setCode] = useState()
	const [isVisible, setIsVisible] = useState(false)

	console.log('height', height)

	const onChangePhone = (val) => setPhone(val)
	const onChangeCode = (val) => setCode(val)

	const onCloseModal = () => setIsVisible(false)

	const onVerifyPhone = async () => {
		try {
			const response = await login({ phone: phone });
			console.log('rs', response.data.data); // data tu api tra ve
			setIsVisible(true) // // hien thi modal nhap code len
		} catch (error) {
			console.error(error.response);
		}
	}

	const onVerifyCode = async () => {
		try {
			const response = await login({ phone: phone, otp: code });
			console.log('rs', response.data); // data tu api tra ve
			setIsVisible(false) // an modal nhap code di
			// save lai token
			navigation.navigate('DangNhap')
		} catch (error) {
			console.error(error.response);
		}
	}

    return (
        <View>
            <Image
                source={require('./img/login1.jpg')}
                style={{
                    width: '100%',
                    height: 150,
                    position: 'absolute'
                }}
            />
            <TouchableOpacity >
                <AntDesign name={'closecircle'} size={30} color={'red'} style={{ alignSelf: 'flex-end', margin: 12 }} />
            </TouchableOpacity>
            <View style={styles.modalL}>
                
                <View style={styles.input}>
                    <Image
                        source={require('./img/flagred.png')}
                        style={{
                            width: 25,
                            height: 25,
                            alignSelf: 'center',
                            marginLeft: 10
                        }}
                    />
                    <Text style={{ alignSelf: 'center', fontSize: 16, marginLeft: 3 }}>+84</Text>
                    <View
                        style={{
                            width: 1,
                            height: '45%',
                            backgroundColor: 'silver',
                            alignSelf: 'center',
                            marginLeft: 15
                        }}
                    />
                    <TextInput
                        style={{ width: '65%', marginLeft: 15, fontSize: 16 }}
                        placeholder='Nhập số điện thoại'
                        onChangeText={onChangePhone}
				        value={phone}
                    />
                    <TextInput />
                </View>
                <TouchableOpacity style={{ width: '95%' }} onPress={onVerifyPhone}>
                    <LinearGradient colors={['#CA4600', '#fe8f01', '#CA4600']} style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20, borderRadius: 8, }} start={{ x: -0.5, y: 0 }} end={{ x: 2, y: 0 }} >
                        <Text style={{ fontSize: 18, color: 'white', fontWeight: '400' }}>Đăng nhập</Text>
                    </LinearGradient>
                </TouchableOpacity>

                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 50, width: '95%' }}>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'silver' }} />
                    <View>
                        <Text style={{ width: 50, textAlign: 'center' }}>Hoặc</Text>
                    </View>
                    <View style={{ flex: 1, height: 1, backgroundColor: 'silver' }} />
                </View>

                <View style={[styles.input1, { marginTop: 50 }]}>
                    <TouchableOpacity style={{ width: '100%' }}>
                        <LinearGradient colors={['#0056ff', '#0056ff', '#0056ff']} style={{ height: 50, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 8, }} start={{ x: -0.5, y: 0 }} end={{ x: 2, y: 0 }} >
                            <Image
                                source={require('./img/logofb.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    alignSelf: 'center',
                                    marginLeft: 10
                                }}
                            />
                            <Text style={{ fontSize: 18, color: 'white', fontWeight: '400' }}>Tiếp Tục Với FaceBook</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <View style={[styles.input1, { marginTop: 30, flexDirection: 'row' }]}>
                    <TouchableOpacity style={{ width: '100%' }}>
                        <LinearGradient colors={['white', 'white', 'white']} style={{ borderWidth: 1, height: 50, width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderColor: 'black', borderRadius: 8, }} start={{ x: -0.5, y: 0 }} end={{ x: 2, y: 0 }} >
                            <Image
                                source={require('./img/logogg.png')}
                                style={{
                                    width: 25,
                                    height: 25,
                                    alignSelf: 'center',
                                    marginLeft: 10
                                }}
                            />
                            <Text style={{ fontSize: 18, color: 'black', fontWeight: '400' }}>Tiếp Tục Với Google</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>

            </View>
            
			<Modal
				testID={'modal'}
				isVisible={isVisible}
				onSwipeComplete={onCloseModal}
				swipeDirection={['up', 'left', 'right', 'down']}
				style={{ justifyContent: 'flex-end', margin: 0, }}>
				<View style={styles.content}>
					<TouchableOpacity style={styles.closeBtn} onPress={onCloseModal}>
						<Ionicons name="close" size={30} color="black" />
					</TouchableOpacity>
					<Text>Nhập mã..... sdt {phone}</Text>
					<TextInput
						style={{ height: 45, borderWidth: 1, borderRadius: 5, marginTop: 20, width: '100%' }}
						onChangeText={onChangeCode}
						value={code}
					/>
					<TouchableOpacity
						onPress={onVerifyCode}
						style={{ marginTop: 20, borderWidth: 1, borderRadius: 5, padding: 15, width: '100%', backgroundColor: 'grey' }}>
						<Text style={{ textAlign: 'center', color: 'white', fontSize: 18 }}>Send Code</Text>
					</TouchableOpacity>
				</View>
			</Modal>

        </View>

    )
}

const styles = StyleSheet.create({
    modalL: {
        width: '100%',
        height: '85%',
        backgroundColor: 'white',
        marginTop: '35%',
        borderRadius: 30,
        borderColor: 'silver',
        borderWidth: 0.5,
        alignItems: 'center'
    },
    content: {
		backgroundColor: 'white',
		padding: 22,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 4,
		borderColor: 'rgba(0, 0, 0, 0.1)',
		height: height - 50
	},
    input: {
        width: '95%',
        height: 50,
        flexDirection: 'row',
        borderWidth: 0.5,
        borderColor: 'silver',
        borderRadius: 8,
        marginTop: 30

    },
    input1: {
        width: '95%',
        height: 50,
        flexDirection: 'column',
        borderWidth: 0.5,
        borderColor: 'silver',
        borderRadius: 8,
        marginTop: 60,
    },
    contentTitle: {
		fontSize: 20,
		marginBottom: 12,
	},
	closeBtn: {
		position: 'absolute',
		top: 10,
		right: 10
	}
});
