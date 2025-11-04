import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { fetchHelperSelectionUser } from "@/api/apiCustomUser";


//------------------------------------------------------CUSTOMUSER HELPER SELECTION-----------------------------------------------------//


export const getHelperSelectionUserAPI = createAsyncThunk('customuser/get_helper_selection_user/' , async(_ , {rejectWithValue}) => {

    try {
        
        const response = await fetchHelperSelectionUser();
        return response.data;

    } catch (err) {
        
        return rejectWithValue(err.response?.data || {"error" : "Si è verificato un problema"});
    }

})



const customuserSlice = createSlice({

    name : 'customuser',

    initialState : {

        data : {

            customuser_helper_selection_items : [],

        },

        requests : {

            customuser_helper_selection_items : { customuser_helper_selection_status : 'idle' , customuser_helper_selection_error : null , customuser_helper_selection_loading : false},
        }

    },

    reducers : {},

    extraReducers : (builder) => {

        builder

        //GET SLECTION HELPER

        .addCase(getHelperSelectionUserAPI.pending , (state) => {
            state.requests.customuser_helper_selection_items.customuser_helper_selection_loading = true;
            state.requests.customuser_helper_selection_items.customuser_helper_selection_status = 'loading';
        })

        .addCase(getHelperSelectionUserAPI.fulfilled , (state , action) => {
            state.requests.customuser_helper_selection_items.customuser_helper_selection_loading = false;
            state.requests.customuser_helper_selection_items.customuser_helper_selection_status = 'succeeded';
            state.data.customuser_helper_selection_items = action.payload;
        })

        .addCase(getHelperSelectionUserAPI.rejected , (state , action) => {
            state.requests.customuser_helper_selection_items.customuser_helper_selection_loading = false;
            state.requests.customuser_helper_selection_items.customuser_helper_selection_status = 'failed';
            state.requests.customuser_helper_selection_items.customuser_helper_selection_error = action.payload || {detail : 'errore sconosciuto'};
        })


    }
})

export default customuserSlice.reducer;
