import axiosInstance from "./api.service";
import {IUser} from "../models/IUser";

export const getUsers = async (): Promise<IUser[]>=> {
    const axiosResponse = await axiosInstance. get('/users');
    return axiosResponse.data
};
