import axios from 'axios';
import {IUser} from "../models/IUser";
import {IDJResponse} from "../models/IDJResponse";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {"Content-Type": "application/json"},
});


export const apiService = {
    user: {
        getAll: async (page: number): Promise<IDJResponse & { users: IUser[] }> => {
            const limit = 10;
            const skip = (page-1)  * limit;


            const {data} = await axiosInstance.get<IDJResponse & { users: IUser[] }>('/users', {
                params: {
                    skip: skip,
                    limit: limit,
                }
            });


            return data;
        }
    }
}