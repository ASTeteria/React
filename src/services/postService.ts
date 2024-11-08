import axiosInstance from "./api.service";
import {IPost} from "../models/IPost";

export const getPosts = async (): Promise<IPost[]>=> {
    const axiosResponse = await axiosInstance. get('/posts');
    return axiosResponse.data
};