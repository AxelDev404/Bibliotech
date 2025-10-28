'use client';

import { useRouter } from "next/navigation";
import AppWrapper from "@/components/AppWrapper";
import PrivateRoute from "@/components/PrivateRoute";
import Banner from "@/components/Banner";
import SideBar from "@/components/SideBar";

export default function InsertTesseraPage() {
  const router = useRouter();

    return (

        <AppWrapper>
        
            <PrivateRoute>
                
                <div className="flex min-h-screen bg-gray-100">
                
                    <SideBar />

                    <div className="flex-1 flex flex-col transition-all duration-300">
                        
                        <Banner />

                        <div className="min-h-screen flex justify-center">
                        
                            <div className="w-full max-w-8xl bg-white rounded-xl shadow p-8">
                                <h1 className="text-2xl py-20 font-thin text-gray-800 mb-6 text-left">
                                    Inserisci Nuovo Tesserato
                                </h1>

                                <form className=" sm:grid-cols-2 gap-40">

                                    <div className="mb-5">
                                        <label className="block text-gray-700 mb-2">Nome</label>
                                        <input type="text" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-gray-700 mb-2">Cognome</label>
                                        <input type="text" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />
                                    </div>

                                    <div className="mb-5"> 
                                        <label className="block text-gray-700 mb-2">Codice Fiscale</label>
                                        <input type="text" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-gray-700 mb-2">Data di nascita</label>
                                        <input type="date" className="w-full text-gray-700 border bg-gray-100 border-gray-400 rounded px-3 py-2" />
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-gray-700 mb-2">Telefono</label>
                                        <input type="text" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-gray-700 mb-2">Email</label>
                                        <input type="email" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-gray-700 mb-2">Indirizzo</label>
                                        <input type="text" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />
                                    </div>

                                    <div className="mb-5">
                                        <label className="block text-gray-700 mb-2">Utente Operatore</label>
                                        <input type="text" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />
                                    </div>

                                    <div className="mt-6 flex justify-center gap-4 col-span-full">
                                        
                                        <button type="submit" className="bg-rose-900 text-white px-6 py-2 rounded hover:bg-rose-800">
                                        Salva
                                        </button>

                                        <button type="button" onClick={() => router.push('/dashboard')} className="bg-gray-200 px-6 py-2 rounded text-gray-700 hover:bg-gray-300">
                                        Torna alla lista
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
