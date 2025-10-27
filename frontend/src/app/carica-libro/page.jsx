'use client';

import { useRouter } from "next/navigation";
import { useState } from "react";

import AppWrapper from "@/components/AppWrapper";
import PrivateRoute from "@/components/PrivateRoute";
import Banner from "@/components/Banner";
import SideBar from "@/components/SideBar";

import AddBoxIcon from '@mui/icons-material/AddBox';
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from '@mui/icons-material/Settings';



export default function InsertLibroPage() {
  const router = useRouter();


  const [popupAutore , setPopUpAutore] = useState({open : false});



  return (
    <AppWrapper>
      
      <PrivateRoute>
        
        <div className="flex min-h-screen bg-gray-100">
          
          <SideBar />

            <div className="flex-1 flex flex-col transition-all duration-300">
            
                <Banner />

                <div className="min-h-screen flex justify-center">
                
                    <div className="w-full max-w-8xl bg-white rounded-xl shadow p-8">

                        <h1 className="text-2xl py-20 font-thin text-gray-600 mb-6 text-left">
                           <SettingsIcon sx={{fontSize : 40}}/> Inserisci Nuovo Libro
                            <hr />
                            
                        </h1>

                        


                        <div className=" text-left py-4">
                            
                            <span className="text-green-600 hover:text-green-700">

                                <button onClick={() => setPopUpAutore({open : true})}>
                                    <AddBoxIcon sx={{fontSize : 30}}/>
                                </button>
                                
                            </span>
                            
                            <span className="text-gray-600 px-2">
                                 Aggiungi nuova categoria
                            </span>
                            
                        </div>

                        <hr />


                        <div className=" text-left py-4">
                            
                            <span className="text-green-600 hover:text-green-700">
                                <button>
                                    <AddBoxIcon sx={{fontSize : 30}}/>
                                </button>
                                
                            </span>
                            
                            <span className="text-gray-600 px-2">
                                 Aggiungi nuova postazione
                            </span>
                            
                        </div>

                        <hr />

                        <div className=" text-left py-4">
                            
                            <span className="text-green-600 hover:text-green-700">

                                <button onClick={() => setPopUpAutore({open : true})}>
                                    <AddBoxIcon sx={{fontSize : 30}}/>
                                </button>
                                
                            </span>
                            
                            <span className="text-gray-600 px-2">
                                 Aggiungi nuovo autore
                            </span>
                            
                        </div>

                        <hr />




                        {popupAutore.open && (
                           
                            <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
                                
                                <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl relative">
                                
                            
                                    <button  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={() => setPopUpAutore({ open: false })}  >
                                        <CloseIcon />
                                    </button>

                                
                                    <h2 className="text-xl font-semibold mb-4 text-gray-800">Aggiungi Nuovo Autore</h2>

                                
                                    <form className="flex flex-col gap-4">
                                        <label className="flex flex-col text-gray-700 text-sm">
                                            Nome Autore
                                            <input type="text" className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                        </label>

                                        <label className="flex flex-col text-gray-700 text-sm">
                                            Cognome Autore
                                            <input  type="text" className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                        </label>

                                        <button type="submit" className="mt-4 p-2 rounded-md border border-rose-500 text-white bg-rose-900 hover:bg-rose-800 transition-colors text-sm">
                                            Aggiungi Autore
                                        </button>
                                        
                                    </form>
                                
                                </div>
                            
                            </div>
                        )}





                        

                        <form className="grid grid-cols-1 sm:grid-cols-2 py-10 gap-6">

                            <div>
                                <label className="block text-gray-700 mb-2">Titolo</label>
                                <input type="text" className="w-full border text-gray-700 border-gray-300 rounded px-3 py-2" />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Autore</label>
                                <input type="text" className="w-full border text-gray-700 border-gray-300 rounded px-3 py-2" />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">ISBN</label>
                                <input type="text" className="w-full border text-gray-700 border-gray-300 rounded px-3 py-2" />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Editore</label>
                                <input type="text" className="w-full border text-gray-700 border-gray-300 rounded px-3 py-2" />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Data di uscita</label>
                                <input type="date" className="w-full text-gray-700 border border-gray-300 rounded px-3 py-2" />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Formato</label>
                                <input type="text" className="w-full border text-gray-700 border-gray-300 rounded px-3 py-2" />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Lingua</label>
                                <input type="text" className="w-full border text-gray-700 border-gray-300 rounded px-3 py-2" />
                            </div>

                            <div>
                                <label className="block text-gray-700 mb-2">Postazione</label>
                                <input type="text" className="w-full border text-gray-700 border-gray-300 rounded px-3 py-2" />
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
