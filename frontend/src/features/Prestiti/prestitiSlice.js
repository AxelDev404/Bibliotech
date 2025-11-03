import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import { fetchCountStatPrestitiAttivi , fetchCountStatPrestitiSaldati , fetchFilteringPrestiti , createPrestito , destroyPrestito , modifyPrestito , modifyPendingPrestito} from "@/api/apiPrestiti";



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


//-----------------------------------------------------------ELIMINAZIONE PRESTITO-----------------------------------------------------------//


export const deletePrestitoAPI = createAsyncThunk('prestito/delete_prestito/' , async(id_prestito , {rejectWithValue}) => {

    try {
        
        const response = await destroyPrestito(id_prestito);
        return id_prestito;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }

})


//-----------------------------------------------------------PATCH PRESTITO-----------------------------------------------------------//


export const patchStatusPrestitoAPI = createAsyncThunk('prestiti/patch_status_prestito/' , async({id_prestito , updateData} , {rejectWithValue}) => {

    try {
        
        const response = await modifyPrestito(id_prestito , updateData);
        return response.data || response;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }
})


export const patchPendingPrestitoAPI = createAsyncThunk('pretiti/patch_pending_presitito/' , async({id_prestito , updateData} , {rejectWithValue}) => {

    try {
        
        const response = await modifyPendingPrestito(id_prestito , updateData);
        return response.data || response;

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
            post_prestiti_items : [],
            delete_prestiti_items : [],
            patch_status_presiti_items : [],
            patch_pending_presititi_items : [],
            
        },

        requests : {

            count_presiti_attivi : { count_presiti_attivi_stauts : 'idle' , count_presiti_attivi_error : null , count_presiti_attivi_loading : false },
            count_prestiti_saldati : { count_prestiti_saldati_status : 'idle' , count_prestiti_saldati_error : null , count_prestiti_saldati_loading : false },
            filtering_presititi_items : { filtering_presititi_status : 'idle' , filtering_presititi_error : null , filtering_presititi_loading : false},
            post_prestiti_items : { post_prestiti_status : 'idle' , post_prestiti_error : null , post_prestiti_loading : false},
            delete_prestiti_items : { delete_prestiti_status : 'idle' , delete_prestiti_error : null , delete_prestiti_loading : false},
            patch_status_presiti_items : { patch_status_presiti_status : 'idle' , patch_status_presiti_error : null , patch_status_presiti_loading : false}, 
            patch_pending_presititi_items : { patch_pending_presititi_status : 'idle' , patch_pending_presititi_error : null , patch_pending_presititi_loading : false},
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


        //DELETE PRESTITI

        .addCase(deletePrestitoAPI.pending , (state) => {
            state.requests.delete_prestiti_items.delete_prestiti_loading = true;
            state.requests.delete_prestiti_items.delete_prestiti_status = 'loading';
        })

        .addCase(deletePrestitoAPI.fulfilled , (state , action) => {
            state.requests.delete_prestiti_items.delete_prestiti_loading = false;
            state.requests.delete_prestiti_items.delete_prestiti_status = 'succeeded';

            state.data.delete_prestiti_items.filter(
                (p) => p.id_prestito !== action.payload
            )
        })

        .addCase(deletePrestitoAPI.rejected , (state , action) => {
            state.requests.delete_prestiti_items.delete_prestiti_loading = false;
            state.requests.delete_prestiti_items.delete_prestiti_status = 'failed';
            state.requests.delete_prestiti_items.delete_prestiti_error = action.payload || {detail : 'errore sconosciuto'};
        })


        //PATCH STATUS PRESTITO

        .addCase(patchStatusPrestitoAPI.pending , (state) => {
            state.requests.patch_status_presiti_items.patch_status_presiti_loading = true;
            state.requests.patch_status_presiti_items.patch_status_presiti_status = 'loading';
        })

        .addCase(patchStatusPrestitoAPI.fulfilled , (state , action) => {
            state.requests.patch_status_presiti_items.patch_status_presiti_loading = false;
            state.requests.patch_status_presiti_items.patch_status_presiti_status = 'succeeded';
            
            const index = state.data.patch_status_presiti_items.findIndex( p => p.id_prestito === action.payload.id_prestito);

            if(index !== -1){
                state.data.patch_status_presiti_items[index] = { 

                    ...state.data.patch_status_presiti_items[index] , ...action.payload , 
                    isRestituito: action.payload.isRestituito === true || action.payload.isRestituito === "true"

                }
            }
        })

        .addCase(patchStatusPrestitoAPI.rejected , (state , action) => {
            state.requests.patch_status_presiti_items.patch_status_presiti_loading = false;
            state.requests.patch_status_presiti_items.patch_status_presiti_status = 'failed';
            state.requests.patch_status_presiti_items.patch_status_presiti_error = action.payload || {detail : 'errore sconosciuto'};
        })

        //PATCH STATUS PENDING

        .addCase(patchPendingPrestitoAPI.pending , (state) => {
            state.requests.patch_pending_presititi_items.patch_pending_presititi_loading = true;
            state.requests.patch_pending_presititi_items.patch_pending_presititi_status = 'loading';
        })

        .addCase(patchPendingPrestitoAPI.fulfilled , (state , action) => {
            state.requests.patch_pending_presititi_items.patch_pending_presititi_loading = false;
            state.requests.patch_pending_presititi_items.patch_pending_presititi_status = 'succeeded';
            
            const index = state.data.patch_pending_presititi_items.findIndex( p => p.id_prestito === action.payload.id_prestito);

            if(index !== -1){
                state.data.patch_pending_presititi_items[index] = {

                    ...state.data.patch_pending_presititi_items[index] , ...action.payload,
                    isPrestato : action.payload.isPrestato === true || action.payload.isPrestato === "true"
                }
            }
        })

        .addCase(patchPendingPrestitoAPI.rejected , (state , action) => {
            state.requests.patch_pending_presititi_items.patch_pending_presititi_loading = false;
            state.requests.patch_pending_presititi_items.patch_pending_presititi_status = 'failed';
            state.requests.patch_pending_presititi_items.patch_pending_presititi_error = action.payload || {detail : 'errore sconosciuto'};
        })

    }
})

export const {clearFilterItems , clearErrorPrestiti} = prestitiSlice.actions; 
export default prestitiSlice.reducer;


