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

    initialState : {
        
        data : {
            count_presiti_attivi : 0,
            count_prestiti_saldati : 0 
        },

        requests : {

            count_presiti_attivi : { count_presiti_attivi_stauts : 'idle' , count_presiti_attivi_error : null , count_presiti_attivi_loading : false },
            count_prestiti_saldati : { count_prestiti_saldati_status : 'idle' , count_prestiti_saldati_error : null , count_prestiti_saldati_loading : false }
        }    
    },

    reducers : {},

    extraReducers : (builder) => {

        builder

        //THUNK GET GESTIONE STATSITICHE

        .addCase(getCountStatPresititAttiviAPI.pending , (state) => {

            state.requests.count_presiti_attivi.count_presiti_attivi_loading = true;
            state.requests.count_presiti_attivi.count_presiti_attivi_stauts = 'loading';
        })

        .addCase(getCountStatPresititAttiviAPI.fulfilled , (state , action) => {

            state.requests.count_presiti_attivi.count_presiti_attivi_loading = false;
            state.requests.count_presiti_attivi.count_presiti_attivi_stauts = 'succeeded';
            state.data.count_presiti_attivi = action.payload;
        })

        .addCase(getCountStatPresititAttiviAPI.rejected , (state , action) => {
            state.requests.count_presiti_attivi.count_presiti_attivi_loading = false;
            state.requests.count_presiti_attivi.count_presiti_attivi_stauts = 'failed';
            state.error = action.payload || {detail : 'errore sconosciuto'};
        })


        .addCase(getCountStatPresititiSaldatiAPI.pending , (state) => {
            state.requests.count_prestiti_saldati.count_prestiti_saldati_loading = true;
            state.requests.count_prestiti_saldati.count_prestiti_saldati_status = 'loading';
        })

        .addCase(getCountStatPresititiSaldatiAPI.fulfilled , (state , action) => {
            state.requests.count_prestiti_saldati.count_prestiti_saldati_loading = false;
            state.requests.count_prestiti_saldati.count_prestiti_saldati_status = 'succeeded';
            state.data.count_prestiti_saldati = action.payload;
        })

        .addCase(getCountStatPresititiSaldatiAPI.rejected , (state , action) => {
            state.requests.count_prestiti_saldati.count_prestiti_saldati_loading = false;
            state.requests.count_prestiti_saldati.count_prestiti_saldati_status = 'failed';
            state.requests.count_prestiti_saldati.count_prestiti_saldati_error = action.payload || {detail : 'errore sconosciuto'};
        })
    }
})


export default prestitiSlice.reducer;


