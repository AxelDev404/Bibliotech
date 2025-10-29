import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";  
import { fetchCountStatPostazioni , fetchHelperSelectionPostazioni , createPostazione } from "@/api/apiPostazioni";


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

//-----------------------------------------------------------INSERIMENTO POSTAZIONE-----------------------------------------------------------//


export const postPostazioneAPI = createAsyncThunk('postazioni/post_postazione/' , async(formData , {rejectWithValue}) => {

    try {
        
        const response = await createPostazione(formData);
        return response.data;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }

})


const postazioniSlice = createSlice({

    name : 'postazioni',

    initialState : {
        
        data : {

            items : [] ,
            postazioni_helper_items : [],
            postazioni_post_items : [],
            count_postazioni : 0  

        }, 

        requests : {

            items : {status : 'idle' , error : null , loading : false },
            count_postazioni : { statusCount : 'idle' , errorCount : null , loadingCount : false},
            postazioni_helper_items : {postazioni_helperStatus : 'idle' , postazioni_helperError : null ,postazioni_helperLoading : false},
            postazioni_post_items : { postazioni_post_status : 'idle' , postazioni_post_error : null , postazioni_post_loading : false}
        }
    
    },

    reducers : {},


    extraReducers : (builder) => {
        
        builder

        //THUNK GET GESTIONE STATISTICHE
        
        .addCase(getCountStatPostazioniAPI.pending , (state) => {
            state.requests.count_postazioni.loadingCount = true;
            state.requests.count_postazioni.statusCount = 'loading';
        })

        
        .addCase(getCountStatPostazioniAPI.fulfilled , (state , action) => {
            state.requests.count_postazioni.loadingCount = false;
            state.requests.count_postazioni.statusCount = 'succeeded';
            state.data.count_postazioni = action.payload;
        })


        .addCase(getCountStatPostazioniAPI.rejected , (state , action) => {
            state.requests.count_postazioni.loadingCount = false;
            state.requests.count_postazioni.statusCount = 'failed';
            state.requests.count_postazioni.errorCount = action.payload || {detail : 'errore sconosciuto'}
        })


        //THUNK HELPER SELCETION GET DI POSTAZIONI

        .addCase(getHelperSelectionPostazioni.pending , (state) => {
            state.requests.postazioni_helper_items.postazioni_helperLoading = true;
            state.requests.postazioni_helper_items.postazioni_helperStatus = 'loading';
        })

        .addCase(getHelperSelectionPostazioni.fulfilled , (state , action) => {
            state.requests.postazioni_helper_items.postazioni_helperLoading = false;
            state.requests.postazioni_helper_items.postazioni_helperStatus = 'succeeded';
            state.data.postazioni_helper_items = action.payload;
        })

        .addCase(getHelperSelectionPostazioni.rejected , (state , action) => {
            state.requests.postazioni_helper_items.postazioni_helperLoading = false;
            state.requests.postazioni_helper_items.postazioni_helperStatus = 'failed';
            state.requests.postazioni_helper_items.postazioni_helperError = action.payload || {detail : 'errore sconosciuto'};
        })

    
    }
})


export default postazioniSlice.reducer;