import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";  
import { fetchCountStatPostazioni , fetchHelperSelectionPostazioni } from "@/api/apiPostazioni";


//-----------------------------------------------------------GESTIONE STATISTICA-----------------------------------------------------------//


export const getCountStatPostazioniAPI = createAsyncThunk('postazioni/statistics/' , async(_ , {rejectWithValue}) => {

    try {
        
        const response = await fetchCountStatPostazioni();
        return response.data.count;

    } catch (err) {
    
        return rejectWithValue(err.response?.data || {"errore" : "Si è verificato un problema"});
    }

})


//-----------------------------------------------------------HELPER SELEZIONI-----------------------------------------------------------//


export const getHelperSelectionPostazioni = createAsyncThunk('postazioni/helper-selection-postazioni/' , async(_ , {rejectWithValue}) => {
    
    try {
        
        const response = await fetchHelperSelectionPostazioni();
        return response.data;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }

})


const postazioniSlice = createSlice({

    name : 'postazioni',

    initialState : {postazioni_helper : [] , postazioni_helperStatus : 'idle' , postazioni_helperError : null ,postazioni_helperLoading : false , items : [] , count_postazioni : 0 , status : 'idle' , error : null , loading : false },

    reducers : {},


    extraReducers : (builder) => {
        
        builder

        //THUNK GET GESTIONE STATISTICHE
        
        .addCase(getCountStatPostazioniAPI.pending , (state) => {
            state.loading = true;
            state.status = 'loading';
        })

        
        .addCase(getCountStatPostazioniAPI.fulfilled , (state , action) => {
            state.loading = false;
            state.status = 'succeeded';
            state.count_postazioni = action.payload;
        })


        .addCase(getCountStatPostazioniAPI.rejected , (state , action) => {
            state.loading = false;
            state.status = 'failed';
            state.error = action.payload || {detail : 'errore sconosciuto'}
        })


        //THUNK HELPER SELCETION GET DI POSTAZIONI

        .addCase(getHelperSelectionPostazioni.pending , (state) => {
            state.postazioni_helperLoading = true;
            state.postazioni_helperStatus = 'loading';
        })

        .addCase(getHelperSelectionPostazioni.fulfilled , (state , action) => {
            state.postazioni_helperLoading = false;
            state.postazioni_helperStatus = 'succeeded';
            state.postazioni_helper = action.payload;
        })

        .addCase(getHelperSelectionPostazioni.rejected , (state , action) => {
            state.postazioni_helperLoading = false;
            state.postazioni_helperStatus = 'failed';
            state.postazioni_helperError = action.payload || {detail : 'errore sconosciuto'};
        })

    
    }
})


export default postazioniSlice.reducer;