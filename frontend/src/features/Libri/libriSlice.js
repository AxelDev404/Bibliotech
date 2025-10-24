import { createAsyncThunk , createSlice, isRejectedWithValue } from "@reduxjs/toolkit";
import { fetchTableLibri , fetchCountSatat } from "@/api/apiLibri";




//--------------------------------------------------------------GESTIONE LIRBI--------------------------------------------------------------//


export const getTableLibriAPI = createAsyncThunk('libri/table/' , async(_ , {rejectedWithValue}) => {

    try {
        
        const response = await fetchTableLibri();
        return response.data;

    } catch (err) {
        
        return rejectedWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
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




const libriSlice = createSlice({

    name : 'libri',

    initialState : {items : [], count : 0 , status : 'idle' , error : null , loading : false},

    reducers : {},


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

    }

});

export default libriSlice.reducer;