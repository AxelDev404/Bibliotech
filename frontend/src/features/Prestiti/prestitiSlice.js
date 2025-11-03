import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import { fetchCountStatPrestitiAttivi , fetchCountStatPrestitiSaldati , fetchFilteringPrestiti , createPrestito} from "@/api/apiPrestiti";


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


//-----------------------------------------------------------GESTIONE FILTRAGGIO-----------------------------------------------------------//


export const getFilteringPrestitiAPI = createAsyncThunk('prestiti/filtering/' , async(tesserato , {rejectWithValue}) => {

    try {
        
        const response = await fetchFilteringPrestiti(tesserato);
        return response.data;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }
})


//-----------------------------------------------------------INSERIMENTO PRESTITO-----------------------------------------------------------//


export const postPrestito = createAsyncThunk('prestito/post-prestito/' , async(formData, {rejectWithValue}) => {

    try {
        
        const response = await createPrestito(formData);
        return response.data;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }


})


const prestitiSlice = createSlice({

    name : 'prestiti',

    initialState : {
        
        data : {
            count_presiti_attivi : 0,
            count_prestiti_saldati : 0,
            filtering_presititi_items : [],
            post_prestiti_items : []
            
        },

        requests : {

            count_presiti_attivi : { count_presiti_attivi_stauts : 'idle' , count_presiti_attivi_error : null , count_presiti_attivi_loading : false },
            count_prestiti_saldati : { count_prestiti_saldati_status : 'idle' , count_prestiti_saldati_error : null , count_prestiti_saldati_loading : false },
            filtering_presititi_items : { filtering_presititi_status : 'idle' , filtering_presititi_error : null , filtering_presititi_loading : false},
            post_prestiti_items : { post_prestiti_status : 'idle' , post_prestiti_error : null , post_prestiti_loading : false}
        }    
    },

    reducers : {

        clearFilterItems : (state) => {
            state.data.filtering_presititi_items = [];
            state.requests.filtering_presititi_items.filtering_presititi_status = 'idle';
            state.requests.filtering_presititi_items.filtering_presititi_error = null;
            state.requests.filtering_presititi_items.filtering_presititi_loading = false;
        },

        clearErrorPrestiti : (state) => {
            state.requests.post_prestiti_items.post_prestiti_loading = false;
            state.requests.post_prestiti_items.post_prestiti_status = 'idle';
            state.requests.post_prestiti_items.post_prestiti_error = null;
            state.data.post_prestiti_items = [];
        }

    },

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


        //GET FILTRAGGIO DATI

        .addCase(getFilteringPrestitiAPI.pending , (state) => {
            state.requests.filtering_presititi_items.filtering_presititi_loading = true;
            state.requests.filtering_presititi_items.filtering_presititi_status = 'loading';
        })

        .addCase(getFilteringPrestitiAPI.fulfilled , (state , action) => {
            state.requests.filtering_presititi_items.filtering_presititi_loading = false;
            state.requests.filtering_presititi_items.filtering_presititi_status = 'succeeded';
            state.data.filtering_presititi_items = action.payload;
        })

        .addCase(getFilteringPrestitiAPI.rejected , (state , action) => {
            state.requests.filtering_presititi_items.filtering_presititi_loading = false;
            state.requests.filtering_presititi_items.filtering_presititi_status = 'failed';
            state.requests.filtering_presititi_items.filtering_presititi_error = action.payload || {detail : 'errore sconosciuto'};
        })


        //POST PRESTITI

        .addCase(postPrestito.pending , (state) => {
            state.requests.post_prestiti_items.post_prestiti_loading = true;
            state.requests.post_prestiti_items.post_prestiti_status = 'loading';
        })

        .addCase(postPrestito.fulfilled , (state , action) => {
            state.requests.post_prestiti_items.post_prestiti_loading = false;
            state.requests.post_prestiti_items.post_prestiti_status = 'succeeded';
            state.data.post_prestiti_items.push(action.payload);
        })

        .addCase(postPrestito.rejected , (state , action) => {
            state.requests.post_prestiti_items.post_prestiti_loading = false;
            state.requests.post_prestiti_items.post_prestiti_status = 'failed';
            state.requests.post_prestiti_items.post_prestiti_error = action.payload || {detail : 'errore sconosciuto'};
        })

    }
})

export const {clearFilterItems , clearErrorPrestiti} = prestitiSlice.actions; 
export default prestitiSlice.reducer;


