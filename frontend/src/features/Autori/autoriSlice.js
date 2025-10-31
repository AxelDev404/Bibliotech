import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAutoreHelperSelection , createAutore} from "@/api/apiAutore";


//-----------------------------------------------------------HELPER SELECTION-----------------------------------------------------------//


export const getHelperAutoriAPI = createAsyncThunk('autori/get_autori/' , async(_ , {rejectWithValue}) => {

    try {
        
        const response = await fetchAutoreHelperSelection();
        return response.data;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }
})  


//-----------------------------------------------------------INSERIMENTO AUTORE-----------------------------------------------------------//


export const postAutoriAPI = createAsyncThunk('autori-/post_autore/' , async(formData , {rejectWithValue}) => {

    try {
        
        const response = await createAutore(formData);
        return response.data;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }
})


const autoriSlice = createSlice({

    name : 'autori',

    initialState : {

        data : {

            items : [],
            autore_helper_items : [],
            autore_post_items : []
            
        },

        requests : {

            items : {status : 'idle' , error : null , loading : false},
            autore_helper_items : { autori_helper_Status : 'idle' , autori_helper_Error : null , autori_helperLoading : false},
            autore_post_items : {autore_post_status : 'idle' , autore_post_error : null ,  autore_post_loading : false}
                 
        }
    },

    reducers : {

        clearErrorAutori : (state) => {
            state.requests.autore_post_items.autore_post_loading = false;
            state.requests.autore_post_items.autore_post_status = 'idle';
            state.requests.autore_post_items.autore_post_error = null;
        }

    },

    extraReducers : (builder) => {
        builder

        //THUNK POST AUTORI

        .addCase(postAutoriAPI.pending , (state) => {
            state.requests.autore_post_items.autore_post_loading = true;
            state.requests.autore_post_items.autore_post_status = 'loading';
        })

        .addCase(postAutoriAPI.fulfilled , (state , action) => {
            state.requests.autore_post_items.autore_post_loading = false;
            state.requests.autore_post_items.autore_post_status = 'succeeded';
            state.data.autore_post_items.push(action.payload);
        })

        .addCase(postAutoriAPI.rejected , (state , action) => {
            state.requests.autore_post_items.autore_post_loading = false;
            state.requests.autore_post_items.autore_post_status = 'failed';
            state.requests.autore_post_items.autore_post_error = action.payload || {detail : 'errore sconosciuto'};
        })

        //THUNK GET HELPER SELECTION

        .addCase(getHelperAutoriAPI.pending , (state) => {
            state.requests.autore_helper_items.autori_helperLoading = true;
            state.requests.autore_helper_items.autori_helper_Status = 'loading';
        })

        .addCase(getHelperAutoriAPI.fulfilled , (state , action) => {
            state.requests.autore_helper_items.autori_helperLoading = false;
            state.requests.autore_helper_items.autori_helper_Status = 'succeeded';
            state.data.autore_helper_items = action.payload;
        })

        .addCase(getHelperAutoriAPI.rejected , (state , action) => {
            state.requests.autore_helper_items.autori_helperLoading = false;
            state.requests.autore_helper_items.autori_helper_Status = 'failed';
            state.requests.autore_helper_items.autori_helper_Error = action.payload || {detail : 'errore sconosciuto'};
        })

    }

});

export const {clearErrorAutori} = autoriSlice.actions;
export default autoriSlice.reducer;