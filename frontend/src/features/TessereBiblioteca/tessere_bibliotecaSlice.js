import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import { fetchCounStatTesseraBiblioteca } from "@/api/apiTessereBiblioteca";


//-----------------------------------------------------------GESTIONE STATISTICA-----------------------------------------------------------//


export const getCountStatTessereBibliotecaAPI = createAsyncThunk('tessere-biblioteca/statistics/' , async(_ , {rejectWithValue}) => {

    try {
        
        const response = await fetchCounStatTesseraBiblioteca();
        return response.data.count;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }

})


const tessere_bibliotecaSlice = createSlice({

    name : 'tessere_bibilioteca',

    initialState : {items : [] , count_tessere_biblioteca : 0 , status : 'idle' , error : null , loading : false},

    reducers : {},


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


    }
})



export default tessere_bibliotecaSlice.reducer;