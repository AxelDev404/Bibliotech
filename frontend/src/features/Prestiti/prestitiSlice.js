import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import { fetchCountStatPrestitiAttivi , fetchCountStatPrestitiSaldati } from "@/api/apiPrestiti";


//-----------------------------------------------------------GESTIONE STATISTICA-----------------------------------------------------------//


export const getCountStatPresititAttiviAPI = createAsyncThunk('presitit/presitit_attivi/' , async(_ , {rejectWithValue}) => {

    try {
        
        const response = await fetchCountStatPrestitiAttivi();
        return response.data.count_active;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }
})



export const getCountStatPresititiSaldatiAPI = createAsyncThunk('presitit/prestiti_saldati/' , async(_ , {rejectWithValue}) => {

    try {
        
        const response = await fetchCountStatPrestitiSaldati();
        return response.data.count_deactive;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificatp un problema"});
    }
})




const prestitiSlice = createSlice({

    name : 'prestiti',

    initialState : {items : [] , count_presiti_attivi : 0 , count_prestiti_saldati : 0 , status : 'idle' , error : null , loading : false },

    reducers : {},

    extraReducers : (builder) => {

        builder

        //THUNK GET GESTIONE STATSITICHE

        .addCase(getCountStatPresititAttiviAPI.pending , (state) => {
            state.loading = true;
            state.status = 'loading';
        })

        .addCase(getCountStatPresititAttiviAPI.fulfilled , (state , action) => {
            state.loading = false;
            state.status = 'succeeded';
            state.count_presiti_attivi = action.payload;
        })

        .addCase(getCountStatPresititAttiviAPI.rejected , (state , action) => {
            state.loading = false;
            state.status = 'failed';
            state.error = action.payload || {detail : 'errore sconosciuto'};
        })


        .addCase(getCountStatPresititiSaldatiAPI.pending , (state) => {
            state.loading = true;
            state.status = 'loading';
        })

        .addCase(getCountStatPresititiSaldatiAPI.fulfilled , (state , action) => {
            state.loading = false;
            state.status = 'succeeded';
            state.count_prestiti_saldati = action.payload;
        })

        .addCase(getCountStatPresititiSaldatiAPI.rejected , (state , action) => {
            state.loading = false;
            state.status = 'failed';
            state.error = action.payload || {detail : 'errore sconosciuto'};
        })
    }
})


export default prestitiSlice.reducer;


