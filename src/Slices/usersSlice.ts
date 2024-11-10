import {IUser} from "../models/IUser";
import {createAsyncThunk, createSlice, isFulfilled, isRejected, PayloadAction} from "@reduxjs/toolkit";
import {getUsers} from "../services/userService";

interface UsersState {
    users: IUser[];
    loading: boolean;
    error: string | null
}

const initialState: UsersState = {
    users: [],
    loading: false,
    error: null,
}

export const loadUsers = createAsyncThunk('users/loadUsers', async (_, ThunkAPI)=> {
    try {
        return await getUsers();
    } catch (e) {
        if (e instanceof Error) {
            return ThunkAPI.rejectWithValue(e.message);
        }
        return ThunkAPI.rejectWithValue('Error');
    }
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{},
    extraReducers: (builder)=> {
        builder
            .addCase(loadUsers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addMatcher(isFulfilled(loadUsers), (state, action: PayloadAction<IUser[]>)=>{
                state.loading = false;
                state.users= action.payload;
            })
            .addMatcher(isRejected(loadUsers), (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Error'

            });

    },
});

export default usersSlice.reducer;