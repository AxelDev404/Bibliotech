import { createAsyncThunk , createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { fetchTableLibri , fetchCountSatat, fetchLastInsertBookStat , fetchLibroDetailPage , createLibro } from "@/api/apiLibri";




//--------------------------------------------------------------GESTIONE LIRBI--------------------------------------------------------------//


export const getTableLibriAPI = createAsyncThunk('libri/table/' , async(_ , {rejectedWithValue}) => {

    try {
        
        const response = await fetchTableLibri();
        return response.data;

    } catch (err) {
        
        return rejectedWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }
})



//--------------------------------------------------------------RICERCA LIRBI--------------------------------------------------------------//


export const getLibroDetailPageAPI = createAsyncThunk('libti/get_book_detail/' , async(isbn , {rejectWithValue}) => {

    try {
        
        const response = await fetchLibroDetailPage(isbn);
        return response.data;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }

})



//-----------------------------------------------------------GESTIONE STATISTICA-----------------------------------------------------------//


export const getCountStatAPI = createAsyncThunk('libti/count_stat/' , async(_ , {rejectedWithValue}) => {

    try {
        
        const response = await fetchCountSatat();
        return response.data.count;

    } catch (err) {
        
        return rejectedWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }

})


export const getLastInsertBookStatAPI = createAsyncThunk('libri/last_book_insert/' , async(_ , {rejectWithValue}) => {

    try {
        
        const response = await fetchLastInsertBookStat();
        return response.data;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }

})


//-----------------------------------------------------------INSERIMENTO LIBRI-----------------------------------------------------------//


export const postLibroAPI = createAsyncThunk('libri/upload_book/' , async(formData , {rejectWithValue}) => {

    try {
        
        const response = await createLibro(formData);
        return response.data;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }


})


const libriSlice = createSlice({

    name : 'libri',

    initialState : {libro : null , statusLibroDetail : null , errorLibroDetail : null, loadingDetail : false , items : [], last_insert_book : [] , count : 0 , status : 'idle' , error : null , loading : false},

    reducers : {

        clearLibro : (state) => {
            state.loadingDetail = false;
            state.libro = null;
            state.errorLibroDetail = null;
            state.statusLibroDetail = null;
        },

        clearErrorLibro : (state) => {
            state.loading = false;
            state.status = 'idle';
            state.error = null;
        }
        
    },


    extraReducers : (builder) => {

        builder

        //THUNK GET GESTIONE LIBRI  

        .addCase(getTableLibriAPI.pending , (state) => {
            state.status = 'loading';
            state.loading = true;
        })

        .addCase(getTableLibriAPI.fulfilled , (state , action) => {
            state.loading = false;
            state.status = 'succeeded';
            state.items = action.payload;
        })

        .addCase(getTableLibriAPI.rejected , (state , action) => {
            state.loading = false;
            state.status = 'failed';
            state.error = action.payload || {detail : 'errore sconosciuto'};
        })


        //RICERCA LIBRI

        .addCase(getLibroDetailPageAPI.pending , (state) => {
            state.loadingDetail = true;
            state.statusLibroDetail = 'loading';
        })

        .addCase(getLibroDetailPageAPI.fulfilled , (state , action) => {
            state.loadingDetail = false;
            state.statusLibroDetail = 'succeeded';
            state.libro = action.payload;
        })

        .addCase(getLibroDetailPageAPI.rejected , (state , action) => {
            state.loadingDetail = false;
            state.statusLibroDetail = 'failed';
            state.errorLibroDetail = action.payload || {detail : 'errore sconosciuto'};
        })


        //THUNK GET GESTIONE STATISTICHE

        .addCase(getCountStatAPI.pending , (state) => {
            state.status = 'loading';
            state.loading = true;
        })

        .addCase(getCountStatAPI.fulfilled , (state , action) => {
            state.loading = false;
            state.status = 'succeeded';
            state.count = action.payload; 
        })

        .addCase(getCountStatAPI.rejected , (state , action) => {
            state.loading = false;
            state.status = 'failed';
            state.error = action.payload || {detail : 'errore sconosciuto'};
        })
        

        //THUNK GET GESTIONE STATISTICHE ULTIMI INSERIMENTI

        .addCase(getLastInsertBookStatAPI.pending , (state) => {
            state.loading = true;
            state.status = 'loading';
        })

        .addCase(getLastInsertBookStatAPI.fulfilled , (state , action) => {
            state.loading = false;
            state.status = 'succeeded';
            state.last_insert_book = action.payload;
        })

        .addCase(getLastInsertBookStatAPI.rejected , (state , action) => {
            state.loading = false;
            state.status = 'failed';
            state.error = action.payload || {detail : 'errore sconosciuto'};
        })


        //THUNK POST LIBRO 

        .addCase(postLibroAPI.pending , (state) => {
            state.loading = true;
            state.status = 'loading';
        })

        .addCase(postLibroAPI.fulfilled , (state , action) => {
            state.loading = false;
            state.status = 'succeeded';
            state.items.push(action.payload);
        })
        
        .addCase(postLibroAPI.rejected , (state , action) => {
            state.loading = false;
            state.status = 'failed';
            state.error = action.payload || {detail : 'errore sconosciuto'};
        })

    }

});

export const {clearLibro , clearErrorLibro} = libriSlice.actions;
export default libriSlice.reducer;