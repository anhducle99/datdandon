import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CuaHang from '../screens/CuaHang';
import DangNhap from '../screens/DangNhap';
import GoiMon from '../screens/GoiMon';
import ThongBao from '../screens/ThongBao';
import Trangchu from '../screens/TrangChu';
import Oder from '../screens/Oder';
import Voucher from '../screens/Voucher';
import map from '../screens/map';





const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


const HomeStack = () => {
    return (
        <Stack.Navigator  >
            <Stack.Screen  options={{ headerShown: false }} name="Home" component={Trangchu} />
            <Stack.Screen name="DangNhap" component={DangNhap} />
            <Stack.Screen name="CuaHang" component={CuaHang} />
            <Stack.Screen name="GoiMon" component={GoiMon} />
            <Stack.Screen name="ThongBao" component={ThongBao} />
            <Stack.Screen name="KhuyenMai" component={Voucher} />
            <Stack.Screen name="BanDo" component={map} />

           
            
            <Stack.Screen tabBarOptions={{headerShow: false}} name="Oder" component={Oder} />
            
        </Stack.Navigator>
    )
}
export default function App() {
    return (
        // <DangNhap />
        <NavigationContainer>
            <Tab.Navigator initialRouteName='TrangChu'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'TrangChu') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } 
            else if (route.name === 'CuaHang') {
              iconName = focused
               ? 'storefront' 
               : 'storefront-outline';
               return      <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            }
            else if (route.name === 'GoiMon') {
              iconName = focused
               ? 'cup' 
               : 'cup-outline';
               return      <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            }
            else if (route.name === 'ThongBao') {
              iconName = focused
               ? 'bell' 
               : 'bell-outline';
               return      <MaterialCommunityIcons name={iconName} size={size} color={color} />;
            }
            else if (route.name === 'DangNhap') {
              iconName = focused
               ? 'md-ellipsis-horizontal' 
               : 'md-ellipsis-horizontal-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;

            
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown:'false'
        })}
      >
      <Tab.Screen  options={{ headerShown: false }} name="TrangChu" component={HomeStack} />
      <Tab.Screen  options={{ headerShown: false }} name="CuaHang" component={CuaHang} />
      <Tab.Screen  options={{ headerShown: false }} name="GoiMon" component={GoiMon} />
      <Tab.Screen  name="ThongBao" component={ThongBao} />
      <Tab.Screen  options={{ headerShown: false }} name="DangNhap" component={DangNhap} />

    </Tab.Navigator>
    </NavigationContainer>
    );
}