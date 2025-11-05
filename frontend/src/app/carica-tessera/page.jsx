'use client';

import { useRouter } from "next/navigation";
import AppWrapper from "@/components/AppWrapper";
import PrivateRoute from "@/components/PrivateRoute";
import Banner from "@/components/Banner";
import SideBar from "@/components/SideBar";

import { useSelector , useDispatch } from "react-redux";
import { clearErrorTessera, postTesseraBibliotecaAPI } from "@/features/TessereBiblioteca/tessere_bibliotecaSlice";
import { useState } from "react";
import {Toaster , toast} from "react-hot-toast";

import BadgeIcon from '@mui/icons-material/Badge';

export default function InsertTesseraPage() {

    const {
        
        data : {tessera_post_items},

        requests : {
            tessera_post_items : {tessera_post_status, tessera_post_error }
        }, 
    
    } = useSelector((state) => state.tessere_bibilioteca);
    const dispatch = useDispatch();

    const router = useRouter();

    const initialState = {

        nome_tesserato : "",
        cognome_tesserato : "",
        codice_fiscale : "",
        data_nascita : "",
        telefono : "",
        email : "",
        indirizzo : ""
    }

    const [formData , setFormData] = useState(initialState);

    const handleChange = (e) =>{

        const {name , value} = e.target;

        setFormData({
            ...formData,
            [name] : value === "" ? null : value
        })
    }

    const hanleSubmitTesseraBibilioteca = async(e) => {

        e.preventDefault();

        try {
            
            await dispatch(postTesseraBibliotecaAPI(formData)).unwrap();

            setFormData(initialState);
            toast.success("Tessera registrata");

            dispatch(clearErrorTessera());

        } catch (error) {
            console.log(formData , "error : " , error);
            toast.error("Azione rifiutata");
        }

    }
    


    return (

        <AppWrapper>
        
            <PrivateRoute>
                
                <div className="flex min-h-screen bg-gray-100">
                
                    <SideBar />

                    <div className="flex-1 flex flex-col transition-all duration-300">
                        
                        <Banner />

                        <div className="min-h-screen flex justify-center">

                            <Toaster position="top-center" reverseOrder={false} />
                            
                            <div className="w-full max-w-8xl bg-white rounded-xl shadow p-8">
                                <h1 className="text-2xl py-20 font-thin text-gray-600 mb-6 text-left">
                                    <BadgeIcon sx={{fontSize : 40}}/>
                                    Inserisci Nuovo Tesserato
                                    <hr />
                                </h1>

                                <form onSubmit={hanleSubmitTesseraBibilioteca} className=" sm:grid-cols-2 gap-40">

                                    <div className="mb-5">
                                        <label className="block text-gray-700 mb-2">Nome</label>
                                        <input name="nome_tesserato" value={formData.nome_tesserato} onChange={handleChange} type="text" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />
                                        {tessera_post_error?.nome_tesserato && ( <p className="text-red-500 text-sm px-1 mt-1">{tessera_post_error.nome_tesserato[0]}</p>)}
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-gray-700 mb-2">Cognome</label>
                                        <input name="cognome_tesserato" value={formData.cognome_tesserato} onChange={handleChange} type="text" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />
                                        {tessera_post_error?.cognome_tesserato && ( <p className="text-red-500 text-sm px-1 mt-1">{tessera_post_error.cognome_tesserato[0]}</p>)}
                                    </div>

                                    <div className="mb-5"> 
                                        <label className="block text-gray-700 mb-2">Codice Fiscale</label>
                                        <input name="codice_fiscale" value={formData.codice_fiscale} onChange={handleChange} type="text" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />
                                        {tessera_post_error?.codice_fiscale && ( <p className="text-red-500 text-sm px-1 mt-1">{tessera_post_error.codice_fiscale[0]}</p>)}
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-gray-700 mb-2">Data di nascita</label>
                                        <input name="data_nascita" value={formData.data_nascita} onChange={handleChange} type="date" className="w-full text-gray-700 border bg-gray-100 border-gray-400 rounded px-3 py-2" />
                                        {tessera_post_error?.data_nascita && ( <p className="text-red-500 text-sm px-1 mt-1">{tessera_post_error.data_nascita[0]}</p>)}
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-gray-700 mb-2">Telefono</label>
                                        <input name="telefono" value={formData.telefono}  onChange={handleChange} type="text" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />
                                        {tessera_post_error?.telefono && ( <p className="text-red-500 text-sm px-1 mt-1">{tessera_post_error.telefono[0]}</p>)}
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-gray-700 mb-2">Email</label>
                                        <input name="email" value={formData.email} onChange={handleChange} type="email" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-gray-700 mb-2">Indirizzo</label>
                                        <input name="indirizzo" value={formData.indirizzo} onChange={handleChange} type="text" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />
                                        {tessera_post_error?.indirizzo && ( <p className="text-red-500 text-sm px-1 mt-1">{tessera_post_error.indirizzo[0]}</p>)}
                                    </div>

                               

                                    <div className="mt-6 flex justify-center gap-4 col-span-full">
                                        
                                        <button type="submit" className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-blue-800">
                                        Salva
                                        </button>

                                        <button type="button" onClick={() => router.push('/cerca-tesserato')} className="bg-gray-200 px-6 py-2 rounded text-gray-700 hover:bg-gray-300">
                                            Vai alla lista
                                        </button>

                                    </div>

                                </form>

                            </div>

                        </div>

                    </div>
                
                </div>
            
            </PrivateRoute>
        
        </AppWrapper>

    );
}
