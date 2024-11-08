import axiosInstance from "./api.service";
import {IComment} from "../models/IComment";

export const getComments = async (): Promise<IComment[]>=> {
    const axiosResponse = await axiosInstance. get('/comments');
    return axiosResponse.data
};