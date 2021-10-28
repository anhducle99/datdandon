import axios from 'axios'
import { baseURL } from './config'

// khai bao instance = setup cho axios, base url
const instance = axios.create({
    baseURL: 'https://api.thecoffeehouse.com/api',
    timeout: 60000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
});

// export const getProductList = () => axios.get('https://forever21.hungvu.net/get-products')
// export const getProductList = () => {
//   return instance.get('get-products')
// }
// man goi san pham cua b dau o tren app co chonMon
// https://forever21.hungvu.net/      get-products
// goi phuong thuc + phan duoi domain
export const getProductList = (params) => instance.get('/v2/menu', params)
export const getCate = (params) => instance.get('/v2/category/web', params)
export const login = (params) => instance.post('verify_mobile', params)