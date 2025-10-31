'use client';


'use client';

import { useParams } from "next/navigation";
import { useSelector , useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {Toaster , toast} from "react-hot-toast";

import AppWrapper from "@/components/AppWrapper";
import PrivateRoute from "@/components/PrivateRoute";

import { getDetailTesseraBiblioteca , clearTessera , patchTesseraBibliotecaAPI } from "@/features/TessereBiblioteca/tessere_bibliotecaSlice";

import Banner from "@/components/Banner";
import SideBar from "@/components/SideBar";

export default function LibroPage() {
  
    const {

        data : {tessera_detail_item}

    } = useSelector((state) => state.tessere_bibilioteca);
    
    const dispatch = useDispatch();
    const {id_tessera} = useParams();

    const router = useRouter();


    //--------------------------PATCH TESSERA BIBLIOTECA------------------------------//

    //'nome_tesserato' , 'cognome_tesserato' , 'codice_fiscale' , 'data_nascita' , 'telefono' , 'email' , 'indirizzo'

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
    const [isModify , setModify] = useState(true);
    const [save , setSave] = useState(false);

    const handleChange = (e) => {

        const {name , value} = e.target;

        setFormData({
            ...formData,
            [name] : value
        })
    }


    const handlePatch = async(e) => {

        e.preventDefault();

        setSave(true);

        const updateData = Object.fromEntries(
            Object.entries(formData).filter(([key , value]) => value !== tessera_detail_item[key])
        );

        if(updateData.data_nascita){

            updateData.data_nascita = new Date(updateData.data_nascita).toISOString().split("T")[0];
        }

        if(Object.keys(updateData).length === 0){

            toast.success("Nessuna modifica da fare");
            return;
        }


        try {
            
            await dispatch(patchTesseraBibliotecaAPI({ id_tessera : id_tessera , updateData : updateData})).unwrap();

            toast.success("Tessera aggiornata");

        } catch (error) {
            toast.error("Azione rifiutata");
        }finally{
            setSave(true);
        }


    }


    useEffect(() => {
        
        dispatch(getDetailTesseraBiblioteca(id_tessera));
        return () => dispatch(clearTessera());

    },[id_tessera , dispatch])


    useEffect(() => {

        if(tessera_detail_item && Object.keys(tessera_detail_item).length > 0){
            setFormData({...formData , ...tessera_detail_item});
        }
        
    },[tessera_detail_item])
  
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
                                
                                <Toaster position="top-center" reverseOrder={false} />
                                
                                <div className="bg-white p-8 rounded-2xl transition-all duration-300 space-y-4">

                                    <form onSubmit={handlePatch}>
                                    
                                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-20">

                                            <div className="flex justify-between border-b pb-2">
                                                <h2 className="text-sm text-gray-500">ID</h2>
                                                <p className="text-lg font-medium text-gray-900">{tessera_detail_item?.id_tessera || "----"}</p>
                                            </div>

                                            <div className="flex justify-between border-b pb-2">
                                                <h2 className="text-sm text-gray-500">Nome tesserato</h2>
                                                <input type="text" name="nome_tesserato" onChange={handleChange} value={formData?.nome_tesserato ?? ""} className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 "/>
                                            </div>

                                            <div className="flex justify-between border-b pb-2">
                                                <h2 className="text-sm text-gray-500">Cognome tesserato</h2>
                                                <input type="text" name="cognome_tesserato" onChange={handleChange} value={formData?.cognome_tesserato ?? ""} className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 "/>
                                            </div>

                                            <div className="flex justify-between border-b pb-2">
                                                <h2 className="text-sm text-gray-500">Codice Fiscale</h2>
                                                <input type="text" name="codice_fiscale" onChange={handleChange} value={formData?.codice_fiscale ?? ""} className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 "/>
                                            </div>

                                            <div className="flex justify-between border-b pb-2">
                                                <h2 className="text-sm text-gray-500">Data di nascita</h2>
                                                <input type="date" name="data_nascita" onChange={handleChange} value={formData?.data_nascita ?? ""} className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 "/>
                                            </div>

                                            <div className="flex justify-between border-b pb-2">
                                                <h2 className="text-sm text-gray-500">Telefono</h2>
                                                <input type="text" name="telefono" onChange={handleChange} value={formData?.telefono ?? ""} className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 "/>
                                            </div>

                                            <div className="flex justify-between border-b pb-2">
                                                <h2 className="text-sm text-gray-500">Email</h2>
                                                <input type="text" name="email" onChange={handleChange} value={formData?.email ?? ""} className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 "/>
                                            </div>

                                            <div className="flex justify-between border-b pb-2">
                                                <h2 className="text-sm text-gray-500">Indirizzo</h2>
                                                <input type="text" name="indirizzo" onChange={handleChange} value={formData?.indirizzo ?? ""} className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 "/>
                                            </div>

                                            <div className="flex justify-between border-b pb-2">
                                                <h2 className="text-sm text-gray-500">Registrato dall'operatore </h2>
                                                <p className="text-lg font-medium text-gray-900">{tessera_detail_item?.utente_operatore || "----"}</p>
                                            </div>

                                            <div className="py-6 flex  flex-col w-52 ">

                                                <button type="submit" className="bg-rose-900 text-white px-6 py-2 rounded-md hover:bg-rose-800 transition">
                                                    Salva
                                                </button>

                                                <div className="py-2"></div>

                                                <button onClick={() => router.back()} className="bg-rose-900 text-white px-6 py-2 rounded-md hover:bg-rose-800 transition">
                                                    Torna alla lista
                                                </button>

                                            </div>
                                        
                                        </div>

                                    </form>

                                     
                                </div>

                            </div>

                        </div>
                
                    </div>
                
                </div>     
        
            </PrivateRoute>
        
        </AppWrapper>


        

    );
}
