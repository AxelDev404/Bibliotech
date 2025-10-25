'use client';

import { configureStore } from "@reduxjs/toolkit";
import authSlice from '@/features/Authentication/authSlice';
import libriSlice from '@/features/Libri/libriSlice';
import postazioniSlice from '@/features/Postazioni/postazioniSlice'
import tessere_bibliotecaSlice from '@/features/TessereBiblioteca/tessere_bibliotecaSlice';

const store = configureStore({

    reducer : {

        auth : authSlice,
        libri : libriSlice,
        postazioni : postazioniSlice,
        tessere_bibilioteca : tessere_bibliotecaSlice,

    },
});


export default store;
