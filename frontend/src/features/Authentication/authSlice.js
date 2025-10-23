import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import { LogIn , LogOut , CheckUser } from "@/api/apiAuth";


export const LogInAPI = createAsyncThunk('api/login/' , async(updateData , {rejectWithValue}) => {

    try {
        
        const response = await LogIn(updateData);
        return response.data;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }
})


export const LogOutAPI = createAsyncThunk('api/logout/' , async(_ , {rejectWithValue}) => {

    try {
        
        const response = await LogOut();
        document.cookie = "access_token=; path=/; max-age=0";
        return response.data;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }
})


export const CheckUserAPI = createAsyncThunk('api/check_user/' , async(_ , {rejectWithValue}) => {
    
    try {
        
        const response = await CheckUser();
        return response.data;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }

})


const authSlice = createSlice({

    name : 'auth',

    initialState : {user : null ,  status : 'idle' , error : null , checked : false , loading : false},

    reducers : {},


    extraReducers : (builder) => {

        builder
        
        .addCase(LogInAPI.pending , (state) => {
            state.status = 'loading';            
        })

        .addCase(LogInAPI.fulfilled , (state , action) => {
            state.status = 'succeeded';
            state.user = action.payload;
            state.checked = true;
        })

        .addCase(LogInAPI.rejected , (state , action) => {
            state.status = 'failed';
            state.error = action.payload || {detail : "errore sconosciuto"};
        })


        .addCase(LogOutAPI.fulfilled , (state) => {
            state.status = 'idle';
            state.checked = true;
            state.user = null;
        })


        .addCase(CheckUserAPI.pending , (state) => {
            state.loading = true;
        })
          
        .addCase(CheckUserAPI.fulfilled , (state , action) =>{
            state.loading = false
            state.checked = true;
            
            if (action.payload.loggedIn) {
                state.user = { username: action.payload.username , nome : action.payload.nome , cognome : action.payload.cognome};
            } else {
                state.user = null;
                state.status = 'idle';
            }
        })

        .addCase(CheckUserAPI.rejected, (state) => {
            state.status = 'idle';
            state.checked = true;
            state.user = null;
            state.loading = false;
        });

    }
})


export default authSlice.reducer;