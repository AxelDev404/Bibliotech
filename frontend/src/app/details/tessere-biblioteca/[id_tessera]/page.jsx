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

import LockOpenIcon from '@mui/icons-material/LockOpen';
import UndoIcon from '@mui/icons-material/Undo';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import LockOutlineIcon from '@mui/icons-material/LockOutline';

export default function LibroPage() {
  
    const {

        data : {tessera_detail_item}

    } = useSelector((state) => state.tessere_bibilioteca);
    
    const dispatch = useDispatch();
    const {id_tessera} = useParams();

    const router = useRouter();


    //--------------------------PATCH TESSERA BIBLIOTECA------------------------------//


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
    const [locked , setLocked] = useState(true);
    const [save , setSave] = useState(false);

    const handleChange = (e) => {

        const {name , value} = e.target;

        setFormData({
            ...formData,
            [name] : value
        })
    }


    const handlePatch = async() => {

        //e.preventDefault();

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
                                    <ZoomInIcon sx={{fontSize : 40}}/>
                                    Dettagli Tesserato
                                    <hr />
                                </h1>
                                
                                <Toaster position="top-center" reverseOrder={false} />
                                
                                <div className="bg-white p-8 rounded-2xl transition-all duration-300 space-y-4">
                                    
                                    <div className="mb-4">
                                        <div className="flex flex-row items-center gap-2">
                                            
                                            <button onClick={() => router.back()} className="bg-blue-400 text-white px-2 py-2 rounded-md hover:bg-blue-600 transition" >
                                                <UndoIcon />
                                            </button>

                                            <button title="sblocca modifiche" type="button" onClick={() => { setLocked(false); toast.success("Modifiche abilitate"); }} className="bg-green-700 text-white px-2 py-2 rounded-md hover:bg-green-400 transition" >
                                                <LockOpenIcon />
                                            </button>

                                            <button title="blocca modifiche" type="button" onClick={() => { setLocked(true); toast.error("Modifiche disabilitate"); }} className="bg-red-800 text-white px-2 py-2 rounded-md hover:bg-rose-800 transition" >
                                                <LockOutlineIcon />
                                            </button>

                                            <button type="button" onClick={() => handlePatch()} className="bg-blue-400 text-white px-2 py-2 rounded-md hover:bg-blue-600 transition" >
                                                <SaveAltIcon />
                                            </button>
                                        </div>
                                    </div>

                                    <form >
                                    
                                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-20">

                                            <div className="flex justify-between border-b pb-2 flex-col">
                                                <h2 className="text-sm text-gray-500">ID</h2>
                                                <p className="text-md font-medium text-gray-900">{tessera_detail_item?.id_tessera || "----"}</p>
                                            </div>

                                            <div className="flex justify-between border-b pb-2 flex-col">
                                                <h2 className="text-sm text-gray-500">Nome tesserato</h2>
                                                <input readOnly={locked} type="text" name="nome_tesserato" onChange={handleChange} value={formData?.nome_tesserato ?? ""} className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 "/>
                                            </div>

                                            <div className="flex justify-between border-b pb-2 flex-col">
                                                <h2 className="text-sm text-gray-500">Cognome tesserato</h2>
                                                <input readOnly={locked} type="text" name="cognome_tesserato" onChange={handleChange} value={formData?.cognome_tesserato ?? ""} className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 "/>
                                            </div>

                                            <div className="flex justify-between border-b pb-2 flex-col">
                                                <h2 className="text-sm text-gray-500">Codice Fiscale</h2>
                                                <input readOnly={locked} type="text" name="codice_fiscale" onChange={handleChange} value={formData?.codice_fiscale ?? ""} className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 "/>
                                            </div>

                                            <div className="flex justify-between border-b pb-2 flex-col">
                                                <h2 className="text-sm text-gray-500">Data di nascita</h2>
                                                <input readOnly={locked} type="date" name="data_nascita" onChange={handleChange} value={formData?.data_nascita ?? ""} className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 "/>
                                            </div>

                                            <div className="flex justify-between border-b pb-2 flex-col">
                                                <h2 className="text-sm text-gray-500">Telefono</h2>
                                                <input readOnly={locked} type="text" name="telefono" onChange={handleChange} value={formData?.telefono ?? ""} className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 "/>
                                            </div>

                                            <div className="flex justify-between border-b pb-2 flex-col">
                                                <h2 className="text-sm text-gray-500">Email</h2>
                                                <input readOnly={locked} type="text" name="email" onChange={handleChange} value={formData?.email ?? ""} className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 "/>
                                            </div>

                                            <div className="flex justify-between border-b pb-2 flex-col">
                                                <h2 className="text-sm text-gray-500">Indirizzo</h2>
                                                <input readOnly={locked} type="text" name="indirizzo" onChange={handleChange} value={formData?.indirizzo ?? ""} className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 "/>
                                            </div>

                                            <div className="flex justify-between border-b pb-2 flex-col">
                                                <h2 className="text-sm text-gray-500">Registrato dall'operatore </h2>
                                                <p className="text-md font-medium text-gray-900">{tessera_detail_item?.utente_operatore || "----"}</p>
                                            </div>

                                            <div className="py-6 flex  flex-col w-52 ">

                                           

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
