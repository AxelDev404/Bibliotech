import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import { createCategoria } from "@/api/apiCategorie";


//-----------------------------------------------------------INSERIMENTO CATEGORIA-----------------------------------------------------------//

export const postCategoriaAPI = createAsyncThunk('categorie/post_categoria/' , async(formData , {rejectWithValue}) => {
    
    try {

        const response = await createCategoria(formData);
        return response.data;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }

})



const categorieSlice = createSlice({

    name : 'categorie',

    initialState : {

        //POST
        categoria_post_items : [],
        categoria_post_status : 'idle',
        categoria_post_error : null,
        categoria_post_loading : false,

        //GET
        items : [],
        status : 'idle',
        error : null,
        loading : false
    },

    reducers : {},

    extraReducers : (builder) => {
        builder 

        //POST CATEGORIA

        .addCase(postCategoriaAPI.pending , (state) => {
            state.categoria_post_loading = true;
            state.categoria_post_status = 'loading';
        })

        .addCase(postCategoriaAPI.fulfilled , (state , action) => {
            state.categoria_post_loading = false;
            state.categoria_post_status = 'succeeded';
            state.categoria_post_items.push(action.payload);
        })

        .addCase(postCategoriaAPI.rejected , (state , action) => {
            state.categoria_post_loading = false;
            state.categoria_post_status = 'failed';
            state.categoria_post_error = action.payload || {detail : 'errore sconosciuto'};
        })
    }

});


export default categorieSlice.reducer;