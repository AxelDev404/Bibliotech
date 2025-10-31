import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import { fetchCounStatTesseraBiblioteca , fetchLastTessereBibliotecaInsert , fetchDetailTesseraBiblioteca , createTessersBiblioteca , modifyTesseraBiblioteca} from "@/api/apiTessereBiblioteca";


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


//-----------------------------------------------------------MODIFICA TESSERA-----------------------------------------------------------//


export const patchTesseraBibliotecaAPI = createAsyncThunk('tessera-biblioteca/update_tessera_biblioteca/' , async({id_tessera , updateData} , {rejectWithValue})=> {

    try {
        
        const response = await modifyTesseraBiblioteca(id_tessera , updateData);
        return response.data || response;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }
})


const tessere_bibliotecaSlice = createSlice({

    name : 'tessere_bibilioteca',

    initialState : {

        data : {
            count_tessere_biblioteca : 0,
            tessera_detail_item : [],
            last_tessere_biblioteca_insert : [],
            tessera_post_items : [],
            tessera_patch_items : [],
        },

        requests : {

            tessera_detail_item : { tessera_detail_status : 'idle' ,  tessera_detail_error : null, tessera_detail_loading : false },
            count_tessere_biblioteca : { count_tessra_status : 'idle' , count_tessra_error : null ,count_tessra_loading : false},
            last_tessere_biblioteca_insert : { last_tessere_biblioteca_status : 'idle' , last_tessere_biblioteca_error : null , last_tessere_biblioteca_loading : false},
            tessera_post_items : {tessera_post_status : 'idle' , tessera_post_error : null , tessera_post_loading : false},
            tessera_patch_items : { tessera_patch_status : 'idle' , tessera_patch_error : null , tessera_patch_loading : false}
        }

    },

    reducers : {
        
        clearTessera : (state) => {
            state.data.tessera_detail_item = null;
            state.requests.tessera_detail_item.tessera_detail_error = null;
            state.requests.tessera_detail_item.tessera_detail_status = null;
            state.requests.tessera_detail_item.tessera_detail_loading = false;
        }

    },


    extraReducers : (builder) => {

        builder 


        //THUNK GET GETSIONE STATISTICHE

        .addCase(getCountStatTessereBibliotecaAPI.pending , (state) => {
            state.requests.count_tessere_biblioteca.count_tessra_loading = true;
            state.requests.count_tessere_biblioteca.count_tessra_status = 'loading';
        })

        
        .addCase(getCountStatTessereBibliotecaAPI.fulfilled , (state , action) => {
            state.requests.count_tessere_biblioteca.count_tessra_loading = false;
            state.requests.count_tessere_biblioteca.count_tessra_status = 'succeeded';
            state.data.count_tessere_biblioteca = action.payload;
        })


        .addCase(getCountStatTessereBibliotecaAPI.rejected , (state , action) => {
            state.requests.count_tessere_biblioteca.count_tessra_loading = false;
            state.requests.count_tessere_biblioteca.count_tessra_status = 'rejected';
            state.requests.count_tessere_biblioteca.count_tessra_error = action.payload || {detail : 'errore sconosciuto'};
        })

        
        //THUNK GET GETSIONE STATISTICHE ULTIMI INSERIMENTI

        .addCase(getLastTessereBibliotecaInsertAPI.pending , (state) => {
            state.requests.last_tessere_biblioteca_insert.last_tessere_biblioteca_loading = true;
            state.requests.last_tessere_biblioteca_insert.last_tessere_biblioteca_status = 'loading';
        })
        
        .addCase(getLastTessereBibliotecaInsertAPI.fulfilled , (state , action) => {
            state.requests.last_tessere_biblioteca_insert.last_tessere_biblioteca_loading = false;
            state.requests.last_tessere_biblioteca_insert.last_tessere_biblioteca_status = 'succeeded';
            state.data.last_tessere_biblioteca_insert = action.payload;
        })
        
        .addCase(getLastTessereBibliotecaInsertAPI.rejected , (state , action) => {
            state.requests.last_tessere_biblioteca_insert.last_tessere_biblioteca_loading = false;
            state.requests.last_tessere_biblioteca_insert.last_tessere_biblioteca_status = 'failed';
            state.requests.last_tessere_biblioteca_insert.last_tessere_biblioteca_error = action.payload || {detail : 'errore sconosciuto'};
        })


        //THINK GET DI RICERCA 

        .addCase(getDetailTesseraBiblioteca.pending , (state) => {
            state.requests.tessera_detail_item.tessera_detail_loading = true;
            state.requests.tessera_detail_item.tessera_detail_status = 'loading';
        })

        .addCase(getDetailTesseraBiblioteca.fulfilled , (state , action) => {
            state.requests.tessera_detail_item.tessera_detail_loading = false;
            state.requests.tessera_detail_item.tessera_detail_status = 'succeeded';
            state.data.tessera_detail_item = action.payload;
        })

        .addCase(getDetailTesseraBiblioteca.rejected , (state , action) => {
            state.requests.tessera_detail_item.tessera_detail_loading = false;
            state.requests.tessera_detail_item.tessera_detail_status = 'failed';
            state.requests.tessera_detail_item.tessera_detail_error = action.payload || {detail : 'errore sconosciuto'};
        })

        //THUNK POST TESSERA BIBLIOTECA

        .addCase(postTesseraBibliotecaAPI.pending , (state) => {
            state.requests.tessera_post_items.tessera_post_loading = true;
            state.requests.tessera_post_items.tessera_post_status = 'loading';
        })

        .addCase(postTesseraBibliotecaAPI.fulfilled , (state , action) => {
            state.requests.tessera_post_items.tessera_post_loading = false;
            state.requests.tessera_post_items.tessera_post_status = 'succeeded';
            state.data.tessera_post_items.push(action.payload);
        })

        .addCase(postTesseraBibliotecaAPI.rejected , (state , action) => {
            state.requests.tessera_post_items.tessera_post_loading = false;
            state.requests.tessera_post_items.tessera_post_status = 'failed';
            state.requests.tessera_post_items.tessera_post_error = action.payload || {detail : 'errore sconosciuto'};
        })

        //THUNK PATCH TESSERA BIBLIOTECA

        .addCase(patchTesseraBibliotecaAPI.pending , (state) => {
            state.requests.tessera_patch_items.tessera_patch_loading = true;
            state.requests.tessera_patch_items.tessera_patch_status = 'loading';
        })

        .addCase(patchTesseraBibliotecaAPI.fulfilled , (state , action) => {
            state.requests.tessera_patch_items.tessera_patch_loading = false;
            state.requests.tessera_patch_items.tessera_patch_status = 'succeeded';
            
            const index = state.data.tessera_patch_items.findIndex( t => t.id_tessera === action.payload.id_tessera);

            if (index !== -1){
                state.data.tessera_patch_items[index] = {...state.data.tessera_patch_items[index] , ...action.payload};
            }

        })

        .addCase(patchTesseraBibliotecaAPI.rejected , (state , action) => {
            state.requests.tessera_patch_items.tessera_patch_loading = false;
            state.requests.tessera_patch_items.tessera_patch_status = 'failed';
            state.requests.tessera_patch_items.tessera_patch_error = action.payload || {detail : 'errore sconosciuto'};
        })
    }
})


export const {clearTessera} = tessere_bibliotecaSlice.actions;
export default tessere_bibliotecaSlice.reducer;