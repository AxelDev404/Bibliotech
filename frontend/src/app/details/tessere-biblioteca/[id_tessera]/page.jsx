'use client';


'use client';

import { useParams } from "next/navigation";
import { useSelector , useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import AppWrapper from "@/components/AppWrapper";
import PrivateRoute from "@/components/PrivateRoute";

import { getDetailTesseraBiblioteca , clearTessera } from "@/features/TessereBiblioteca/tessere_bibliotecaSlice";

import Banner from "@/components/Banner";
import SideBar from "@/components/SideBar";

export default function LibroPage() {
  
    const {tessera , statusTessera , errorTessera } = useSelector((state) => state.tessere_bibilioteca);
    const dispatch = useDispatch();
    const {id_tessera} = useParams();

    const router = useRouter();

    useEffect(() => {
        dispatch(getDetailTesseraBiblioteca(id_tessera));
    },[id_tessera , dispatch])
  
    return (

        <AppWrapper>
                    
            <PrivateRoute>
        
                <div className="flex min-h-screen bg-white">
                                           
                    <SideBar />
                        
                                        
                    <div className="flex-1 flex flex-col  transition-all duration-300">
                                
                        <Banner />
                        
                        <div className="min-h-screen bg-gray-100 py-10 px-6 flex flex-col items-between">
                    
                            <div className="max-w-8xl py-20 w-full">
                            
                                <h1 className="text-2xl font-thin text-gray-800 mb-6 text-left">
                                    Dettagli Tesserato
                                </h1>

                                <div className="bg-white p-8 rounded-2xl transition-all duration-300 space-y-4">
                                    
                                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-20">

                                        <div className="flex justify-between border-b pb-2">
                                            <h2 className="text-sm text-gray-500">ID</h2>
                                            <p className="text-lg font-medium text-gray-900">{tessera?.id_tessera || "----"}</p>
                                        </div>

                                        <div className="flex justify-between border-b pb-2">
                                            <h2 className="text-sm text-gray-500">Nome tesserato</h2>
                                            <p className="text-lg font-medium text-gray-900">{tessera?.nome_tesserato || "----"}</p>
                                        </div>

                                        <div className="flex justify-between border-b pb-2">
                                            <h2 className="text-sm text-gray-500">Cognome tesserato</h2>
                                            <p className="text-lg font-medium text-gray-900">{tessera?.cognome_tesserato || "----"}</p>
                                        </div>

                                        <div className="flex justify-between border-b pb-2">
                                            <h2 className="text-sm text-gray-500">Codice Fiscale</h2>
                                            <p className="text-lg font-medium text-gray-900">{tessera?.codice_fiscale || "----"}</p>
                                        </div>

                                        <div className="flex justify-between border-b pb-2">
                                            <h2 className="text-sm text-gray-500">Data di nascita</h2>
                                            <p className="text-lg font-medium text-gray-900">{tessera?.data_nascita || "----"} </p>
                                        </div>

                                        <div className="flex justify-between border-b pb-2">
                                            <h2 className="text-sm text-gray-500">Telefono</h2>
                                            <p className="text-lg font-medium text-gray-900">{tessera?.telefono || "----"}</p>
                                        </div>

                                        <div className="flex justify-between border-b pb-2">
                                            <h2 className="text-sm text-gray-500">Email</h2>
                                            <p className="text-lg font-medium text-gray-900">{tessera?.email || "----"}</p>
                                        </div>

                                        <div className="flex justify-between border-b pb-2">
                                            <h2 className="text-sm text-gray-500">Indirizzo</h2>
                                            <p className="text-lg font-medium text-gray-900">{tessera?.indirizzo || "----"}</p>
                                        </div>

                                        <div className="flex justify-between border-b pb-2">
                                            <h2 className="text-sm text-gray-500">Registrato dall'operatore </h2>
                                            <p className="text-lg font-medium text-gray-900">{tessera?.utente_operatore || "----"}</p>
                                        </div>

                                    </div>

                                </div>

                                <div className="mt-3 text-left">
                                    <button onClick={() => router.push('/dashboard')} className="bg-rose-900 text-white px-6 py-2 rounded-xl hover:bg-rose-800 transition">
                                        Torna alla lista
                                    </button>
                                </div>

                            </div>

                        </div>
                
                    </div>
                
                </div>     
        
            </PrivateRoute>
        
        </AppWrapper>


        

    );
}
