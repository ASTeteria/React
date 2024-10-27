import axios from "axios";
import {IUserWithToken} from "../models/IUserWithToken";
import {BaseResponseModelType} from "../models/BaseResponseModelType";
import {IProduct} from "../models/IProduct";
import {retriveLocalStorage} from "../helpers/helpers";
import {ITokenPair} from "../models/ITokenPairs";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
});


type LoginData = {
    username: string,
    password: string,
    expiresInMins: number
}

axiosInstance.interceptors.request.use(request => {

    if (request.method?.toUpperCase() === 'GET') {
        let user = retriveLocalStorage<IUserWithToken>('user');
        request.headers.Authorization = 'Bearer ' + user.accessToken
    }
    return request;
})

export const login = async ({username, password, expiresInMins}: LoginData):Promise<IUserWithToken> => {
    const {data:UserWithToken}= await axiosInstance.post<IUserWithToken>('/login', {username, password, expiresInMins});
   localStorage.setItem('user', JSON.stringify(UserWithToken));
    return UserWithToken
}

export const loadAuthProducts = async ():Promise<IProduct[]| undefined> => {
   const {data} = await axiosInstance.get<BaseResponseModelType>('/products');
   return data.products
}

export const refresh = async () => {
    const iUserWithToken = retriveLocalStorage<IUserWithToken>('user');
    const {data:{accessToken,refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithToken.refreshToken,
        expiresInMins: 1
    });
    iUserWithToken.accessToken = accessToken;
    iUserWithToken.refreshToken = refreshToken;
    localStorage.setItem('user', JSON.stringify(iUserWithToken));
}