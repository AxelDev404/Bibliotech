import { createAsyncThunk , createSlice } from "@reduxjs/toolkit";
import { createCategoria , fetchCategoriaHelper} from "@/api/apiCategorie";
import { m } from "framer-motion";


//-----------------------------------------------------------HELPER CATEGORIA-----------------------------------------------------------//

export const getHelperCategoriaSlectionAPI = createAsyncThunk('categorie/helper_selection_categorie/' , async(_ , {rejectWithValue}) => {

    try {

        const response = await fetchCategoriaHelper();
        return response.data;
        
    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }

})



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

        data : {

            categoria_post_items : [],
            categoria_helper_items : [],

        },

        requests : {

            categoria_post_items : { categoria_post_status : 'idle', categoria_post_error : null,categoria_post_loading : false},
            categoria_helper_items : { categoria_helper_status : 'idle' , categoria_helper_error : null , categoria_helper_loading : false }
        }

    },

    reducers : {

        clearCategorieError : (state) => {
            state.requests.categoria_post_items.categoria_post_loading = false;
            state.requests.categoria_post_items.categoria_post_status = 'idle';
            state.requests.categoria_post_items.categoria_post_error = null;
        }

    },

    extraReducers : (builder) => {
        builder 

        //POST CATEGORIA

        .addCase(postCategoriaAPI.pending , (state) => {
            state.requests.categoria_post_items.categoria_post_loading = true;
            state.requests.categoria_post_items.categoria_post_status = 'loading';
        })

        .addCase(postCategoriaAPI.fulfilled , (state , action) => {
            state.requests.categoria_post_items.categoria_post_loading = false;
            state.requests.categoria_post_items.categoria_post_status = 'succeeded';
            state.data.categoria_post_items.push(action.payload);
            
        })

        .addCase(postCategoriaAPI.rejected , (state , action) => {
            state.requests.categoria_post_items.categoria_post_loading = false;
            state.requests.categoria_post_items.categoria_post_status = 'failed';
            state.requests.categoria_post_items.categoria_post_error = action.payload || {detail : 'errore sconosciuto'};
        })


        //THUNK GET HELPER CATEGORIA

        .addCase(getHelperCategoriaSlectionAPI.pending , (state) => {
            state.requests.categoria_helper_items.categoria_helper_loading = true;
            state.requests.categoria_helper_items.categoria_helper_status = 'loading';
        })

        .addCase(getHelperCategoriaSlectionAPI.fulfilled , (state ,action) => {
            state.requests.categoria_helper_items.categoria_helper_loading = false;
            state.requests.categoria_helper_items.categoria_helper_status = 'succeeded';
            state.data.categoria_helper_items = action.payload;
        })

        .addCase(getHelperCategoriaSlectionAPI.rejected , (state , action) => {
            state.requests.categoria_helper_items.categoria_helper_loading = false;
            state.requests.categoria_helper_items.categoria_helper_status = 'failed';
            state.requests.categoria_helper_items.categoria_helper_error = action.payload || {detail : 'errore sconosciuto'};
        })
    }

});

export const {clearCategorieError} = categorieSlice.actions;
export default categorieSlice.reducer;