'use client';

import { configureStore } from "@reduxjs/toolkit";
import authSlice from '@/features/Authentication/authSlice';


const store = configureStore({

    reducer : {

        auth : authSlice,

    },
});


export default store;
