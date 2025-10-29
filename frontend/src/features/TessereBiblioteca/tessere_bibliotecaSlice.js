import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import { fetchCounStatTesseraBiblioteca , fetchLastTessereBibliotecaInsert , fetchDetailTesseraBiblioteca , createTessersBiblioteca} from "@/api/apiTessereBiblioteca";


//-----------------------------------------------------------GESTIONE STATISTICA-----------------------------------------------------------//


export const getCountStatTessereBibliotecaAPI = createAsyncThunk('tessere-biblioteca/statistics/' , async(_ , {rejectWithValue}) => {

    try {
        
        const response = await fetchCounStatTesseraBiblioteca();
        return response.data.count;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }

})


export const getLastTessereBibliotecaInsertAPI = createAsyncThunk('tessere-biblioteca/last_card_insert/' , async(_ , {rejectWithValue}) => {

    try {
        
        const response = await fetchLastTessereBibliotecaInsert();
        return response.data;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }

})


//-----------------------------------------------------------RICERCA TESSERA-----------------------------------------------------------//

export const getDetailTesseraBiblioteca = createAsyncThunk('tessera-biblioteca/get_detail_tessere_biblioteca/' , async(id_tessera , {rejectWithValue}) => {

    try {
        
        const response = await fetchDetailTesseraBiblioteca(id_tessera);
        return response.data;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }

})


//-----------------------------------------------------------INSERIMENTO TESSERA-----------------------------------------------------------//


export const postTesseraBibliotecaAPI = createAsyncThunk('tessere-biblioteca/upload_tessera/' , async(formData , {rejectWithValue})=>{

    try {
        
        const response = await createTessersBiblioteca(formData);
        return response.data;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }

})



const tessere_bibliotecaSlice = createSlice({

    name : 'tessere_bibilioteca',

    initialState : {

        //DETAIL PAGE
        tessera : null , 
        statusTessera : null , 
        errorTessera : null, 
        loadingTessera : false , 
        
        //GET STANDARD
        items : [] ,status : 'idle' , error : null ,
        
        //QUERY GET
        last_tessere_biblioteca_insert : [] , count_tessere_biblioteca : 0 ,  loading : false,

        //INSERT DATA POST
        tessera_post_items : [] , tessera_post_status : 'idle' , tessera_post_error : null , tessera_post_loading : false,

    },

    reducers : {
        
        clearTessera : (state) => {
            state.tessera = null;
            state.errorTessera = null;
            state.statusTessera = null;
            state.loadingTessera = false;
        }

    },


    extraReducers : (builder) => {

        builder 


        //THUNK GET GETSIONE STATISTICHE

        .addCase(getCountStatTessereBibliotecaAPI.pending , (state) => {
            state.loading = true;
            state.status = 'loading';
        })

        
        .addCase(getCountStatTessereBibliotecaAPI.fulfilled , (state , action) => {
            state.loading = false;
            state.status = 'succeeded';
            state.count_tessere_biblioteca = action.payload;
        })


        .addCase(getCountStatTessereBibliotecaAPI.rejected , (state , action) => {
            state.loading = false;
            state.status = 'rejected';
            state.error = action.payload || {detail : 'errore sconosciuto'};
        })

        
        //THUNK GET GETSIONE STATISTICHE ULTIMI INSERIMENTI

        .addCase(getLastTessereBibliotecaInsertAPI.pending , (state) => {
            state.loading = true;
            state.status = 'loading';
        })
        
        .addCase(getLastTessereBibliotecaInsertAPI.fulfilled , (state , action) => {
            state.loading = false;
            state.status = 'succeeded';
            state.last_tessere_biblioteca_insert = action.payload;
        })
        
        .addCase(getLastTessereBibliotecaInsertAPI.rejected , (state , action) => {
            state.loading = false;
            state.status = 'failed';
            state.error = action.payload || {detail : 'errore sconosciuto'};
        })


        //THINK GET DI RICERCA 

        .addCase(getDetailTesseraBiblioteca.pending , (state) => {
            state.loadingTessera = true;
            state.statusTessera = 'loading';
        })

        .addCase(getDetailTesseraBiblioteca.fulfilled , (state , action) => {
            state.loadingTessera = false;
            state.statusTessera = 'succeeded';
            state.tessera = action.payload;
        })

        .addCase(getDetailTesseraBiblioteca.rejected , (state , action) => {
            state.loadingTessera = false;
            state.statusTessera = 'failed';
            state.errorTessera = action.payload || {detail : 'errore sconosciuto'};
        })

        //THUNK POST TESSERA BIBLIOTECA

        .addCase(postTesseraBibliotecaAPI.pending , (state) => {
            state.tessera_post_loading = true;
            state.tessera_post_status = 'loading';
        })

        .addCase(postTesseraBibliotecaAPI.fulfilled , (state , action) => {
            state.tessera_post_loading = false;
            state.tessera_post_status = 'succeeded';
            state.tessera_post_items.push(action.payload);
        })

        .addCase(postTesseraBibliotecaAPI.rejected , (state , action) => {
            state.tessera_post_loading = false;
            state.tessera_post_status = 'failed';
            state.tessera_post_error = action.payload || {detail : 'errore sconosciuto'};
        })

    }
})


export const {clearTessera} = tessere_bibliotecaSlice.actions;
export default tessere_bibliotecaSlice.reducer;