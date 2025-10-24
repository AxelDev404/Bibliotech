'use client';

import { configureStore } from "@reduxjs/toolkit";
import authSlice from '@/features/Authentication/authSlice';
import libriSlice from '@/features/Libri/libriSlice';

const store = configureStore({

    reducer : {

        auth : authSlice,
        libri : libriSlice,

    },
});


export default store;
