'use client';

import { useParams } from "next/navigation";
import { useSelector , useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

import { getLibroDetailPageAPI , clearLibro } from "@/features/Libri/libriSlice";
import AppWrapper from "@/components/AppWrapper";
import PrivateRoute from "@/components/PrivateRoute";

import Banner from "@/components/Banner";
import SideBar from "@/components/SideBar";

export default function LibroPage() {
  
    const {libro , statusLibroDetail , errorLibroDetail} = useSelector((state) => state.libri);
    const dispatch = useDispatch();
    const {isbn} = useParams();

    const router = useRouter();
    

    useEffect(() => {
        if(isbn) dispatch(getLibroDetailPageAPI(isbn));

        return () => dispatch(clearLibro());
    },[isbn , dispatch])
  
  
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
                                    Dettagli Libro
                                </h1>

                                <div className="bg-white p-8 rounded-2xl transition-all duration-300 space-y-4">
                                    
                                    <div className="grid grid-cols-2 sm:grid-cols-2 gap-20">

                                        <div className="flex justify-between border-b pb-2">
                                            <h2 className="text-sm text-gray-500">Titolo</h2>
                                            <input className="text-lg w-96 h-10 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-gray-100 " value={libro?.titolo || "----"} />
                                        </div>

                                        <div className="flex justify-between border-b pb-2">
                                            <h2 className="text-sm text-gray-500">Autore</h2>
                                            <p className="text-lg font-medium text-gray-900">{libro?.autore_libro || "----"}</p>
                                        </div>

                                        <div className="flex justify-between border-b pb-2">
                                            <h2 className="text-sm text-gray-500">ISBN</h2>
                                            <p className="text-lg font-medium text-gray-900">{libro?.isbn || "----"}</p>
                                        </div>

                                        <div className="flex justify-between border-b pb-2">
                                            <h2 className="text-sm text-gray-500">Editore</h2>
                                            <p className="text-lg font-medium text-gray-900">{libro?.editore || "----"}</p>
                                        </div>

                                        <div className="flex justify-between border-b pb-2">
                                            <h2 className="text-sm text-gray-500">Data di uscita</h2>
                                            <p className="text-lg font-medium text-gray-900">{libro?.data_uscita || "----"}</p>
                                        </div>

                                        <div className="flex justify-between border-b pb-2">
                                            <h2 className="text-sm text-gray-500">Formato</h2>
                                            <p className="text-lg font-medium text-gray-900">{libro?.formato || "----"}</p>
                                        </div>

                                        <div className="flex justify-between border-b pb-2">
                                            <h2 className="text-sm text-gray-500">Lingua</h2>
                                            <p className="text-lg font-medium text-gray-900">{libro?.lingua || "----"}</p>
                                        </div>

                                        <div className="flex justify-between border-b pb-2">
                                            <h2 className="text-sm text-gray-500">Postazione</h2>
                                            <p className="text-lg font-medium text-gray-900">{libro?.postazione || "----"}</p>
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
