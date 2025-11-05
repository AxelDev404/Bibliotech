import { createAsyncThunk , createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { fetchTableLibri , fetchCountSatat, fetchLastInsertBookStat , fetchLibroDetailPage , createLibro , modifyLibro , filterBookFetch} from "@/api/apiLibri";




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


export const getFilterBookAPI = createAsyncThunk('libri/filter-book/' , async({params} , {rejectWithValue})=> { //{params}

    try {
        
        const response = await filterBookFetch(params);
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

//-----------------------------------------------------------MODIFICA LIBRI-----------------------------------------------------------//


export const patchLibroAPI = createAsyncThunk('libri/patch_book/' , async({isbn , updateData} , {rejectWithValue}) => {

    try {
        
        
        const response = await modifyLibro(isbn , updateData);
        return response.data || response;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }

})
  
const libriSlice = createSlice({

    name : 'libri',

    initialState : {
        
        data : {

            items : [],
            book_patch_items : [],
            libroDetail : [],
            last_insert_book : [],
            filter_book_items : [],
            count : 0
        },

        requests : {

            items : { status : 'idle' , error : null , loading : false},
            libroDetail : {statusLibroDetail : null , errorLibroDetail : null, loadingDetail : false},
            count : { count_status : 'idle' , count_error : null , count_loading : false},
            last_insert_book : {last_insert_book_status : 'idle' , last_insert_book_error : null , last_insert_book_loading : false},
            book_patch_items : { book_patch_status : 'idle' , book_patch_error : null , book_patch_loading : false},
            filter_book_items : { filter_book_status : 'idle' , filter_book_error : null , filter_book_loading : false},
        }
    },

    reducers : {

        clearLibro : (state) => {

            state.requests.libroDetail.loadingDetail = false;
            state.data.libroDetail = null;
            state.requests.libroDetail.errorLibroDetail = null;
            state.requests.libroDetail.statusLibroDetail = 'idle'; 
        },

        clearErrorLibro : (state) => {
            state.requests.items.loading = false;
            state.requests.items.status = 'idle';
            state.requests.items.error = null;
        }
        
    },


    extraReducers : (builder) => {

        builder

        //THUNK GET GESTIONE LIBRI  

        .addCase(getTableLibriAPI.pending , (state) => {
            state.requests.items.loading = 'loading';
            state.requests.items.loading = true;
        })

        .addCase(getTableLibriAPI.fulfilled , (state , action) => {
            state.requests.items.loading = false;
            state.requests.items.status = 'succeeded';
            state.data.items = action.payload;
        })

        .addCase(getTableLibriAPI.rejected , (state , action) => {
            state.requests.items.loading = false;
            state.requests.items.status = 'failed';
            state.requests.items.error = action.payload || {detail : 'errore sconosciuto'};
        })


        //RICERCA LIBRI

        .addCase(getLibroDetailPageAPI.pending , (state) => {
            state.requests.libroDetail.loadingDetail = true;
            state.requests.libroDetail.statusLibroDetail = 'loading';
        })

        .addCase(getLibroDetailPageAPI.fulfilled , (state , action) => {
            state.requests.libroDetail.loadingDetail = false;
            state.requests.libroDetail.statusLibroDetail = 'succeeded';
            state.data.libroDetail = action.payload;
        })

        .addCase(getLibroDetailPageAPI.rejected , (state , action) => {
            state.requests.libroDetail.loadingDetail = false;
            state.requests.libroDetail.statusLibroDetail = 'failed';
            state.requests.libroDetail.errorLibroDetail = action.payload || {detail : 'errore sconosciuto'};
        })


        //THUNK GET GESTIONE STATISTICHE

        .addCase(getCountStatAPI.pending , (state) => {
            state.requests.count.count_status = 'loading';
            state.requests.count.count_loading = true;
        })

        .addCase(getCountStatAPI.fulfilled , (state , action) => {
            state.requests.count.count_loading = false;
            state.requests.count.count_status = 'succeeded';
            state.data.count = action.payload; 
        })

        .addCase(getCountStatAPI.rejected , (state , action) => {
            state.requests.count.count_loading = false;
            state.requests.count.count_status = 'failed';
            state.requests.count.count_error = action.payload || {detail : 'errore sconosciuto'};
        })
        

        //THUNK GET GESTIONE STATISTICHE ULTIMI INSERIMENTI

        .addCase(getLastInsertBookStatAPI.pending , (state) => {
            state.requests.last_insert_book.last_insert_book_loading = true;
            state.requests.last_insert_book.last_insert_book_status = 'loading';
        })

        .addCase(getLastInsertBookStatAPI.fulfilled , (state , action) => {
            state.requests.last_insert_book.last_insert_book_loading = false;
            state.requests.last_insert_book.last_insert_book_status = 'succeeded';
            state.data.last_insert_book = action.payload;
        })

        .addCase(getLastInsertBookStatAPI.rejected , (state , action) => {
            state.requests.last_insert_book.last_insert_book_loading = false;
            state.requests.last_insert_book.last_insert_book_status = 'failed';
            state.requests.last_insert_book.last_insert_book_error = action.payload || {detail : 'errore sconosciuto'};
        })


        //GET TABELLA DI FILTRAGGIO

        .addCase(getFilterBookAPI.pending , (state , action) => {
            state.requests.filter_book_items.filter_book_loading = true;
            state.requests.filter_book_items.filter_book_status = 'pending';
        })

        .addCase(getFilterBookAPI.fulfilled , (state , action) => {
            state.requests.filter_book_items.filter_book_loading = false;
            state.requests.filter_book_items.filter_book_status = 'succeeded';
            state.data.filter_book_items = action.payload;
        })

        .addCase(getFilterBookAPI.rejected , (state , action) => {
            state.requests.filter_book_items.filter_book_loading = false;
            state.requests.filter_book_items.filter_book_status = 'failed';
            state.requests.filter_book_items.filter_book_error = action.payload || {detail : 'errore sconosciuto'};
        })


        //THUNK POST LIBRO 

        .addCase(postLibroAPI.pending , (state) => {
            state.requests.items.loading = true;
            state.requests.items.status = 'loading';
        })

        .addCase(postLibroAPI.fulfilled , (state , action) => {
            state.requests.items.loading = false;
            state.requests.items.status = 'succeeded';
            state.data.items.push(action.payload);
        })
        
        .addCase(postLibroAPI.rejected , (state , action) => {
            state.requests.items.loading = false;
            state.requests.items.status = 'failed';
            state.requests.items.error = action.payload || {detail : 'errore sconosciuto'};
        })


        //PATCH LIBRO

        .addCase(patchLibroAPI.pending , (state) => {
            state.requests.book_patch_items.book_patch_loading = true;
            state.requests.book_patch_items.book_patch_status = 'failed';
        })

        .addCase(patchLibroAPI.fulfilled , (state , action) => {
            state.requests.book_patch_items.book_patch_loading = false;
            state.requests.book_patch_items.book_patch_status = 'succeeded';
            
            const index = state.data.book_patch_items.findIndex( l => l.isbn === action.payload.isbn);

            if(index !== -1){
                state.data.book_patch_items[index] = {...state.data.book_patch_items[index] , ...action.payload};
            }
        })

        .addCase(patchLibroAPI.rejected , (state , action) => {
            state.requests.book_patch_items.book_patch_loading = false;
            state.requests.book_patch_items.book_patch_status = 'failed';
            state.requests.book_patch_items.book_patch_error = action.payload || {detail : 'errore sconosciuto'};
        })

    }

});

export const {clearLibro , clearErrorLibro} = libriSlice.actions;
export default libriSlice.reducer;