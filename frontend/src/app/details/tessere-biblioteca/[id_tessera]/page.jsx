'use client';
import { useParams } from "next/navigation";
import { useSelector , useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {Toaster , toast} from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

import AppWrapper from "@/components/AppWrapper";
import PrivateRoute from "@/components/PrivateRoute";

import { getDetailTesseraBiblioteca , clearTessera , patchTesseraBibliotecaAPI } from "@/features/TessereBiblioteca/tessere_bibliotecaSlice";
import { getFilteringPrestitiAPI , clearFilterItems , postPrestito , clearErrorPrestiti , deletePrestitoAPI , patchStatusPrestitoAPI , patchPendingPrestitoAPI} from "@/features/Prestiti/prestitiSlice";

import Banner from "@/components/Banner";
import SideBar from "@/components/SideBar";

import LockOpenIcon from '@mui/icons-material/LockOpen';
import UndoIcon from '@mui/icons-material/Undo';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import CloseIcon from "@mui/icons-material/Close";
import BackspaceIcon from '@mui/icons-material/Backspace';



export default function LibroPage() {
  
    const {

        data : {tessera_detail_item}

    } = useSelector((state) => state.tessere_bibilioteca);


    const {

        data : {filtering_presititi_items},

        requests : { 
            filtering_presititi_items : {filtering_presititi_status , filtering_presititi_error , filtering_presititi_loading}
        }

    } = useSelector((state) => state.prestiti);
    
    const dispatch = useDispatch();
    const {id_tessera} = useParams();

    const router = useRouter();

    const [popUpPrestito , setPopUpPrestito] = useState({open : false});


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


    //--------------------------POST PRESTITO------------------------------//

    //'tesserato' , 'libro' , 'data_inizio' , 'data_fine'
    const initialStatePrestito = {

        tesserato : id_tessera,
        libro : "",
        data_inizio : "",
        data_fine : ""
    }

    const [formDataPresitito , setFormDataPresitito] = useState(initialStatePrestito);

    const handleChangePrestito = (e) => {

        const {name , value} = e.target;

        setFormDataPresitito({
            ...formDataPresitito,
            [name] : value === "" ? null : value
        })
    }


    const handleSubmitPrestito = async(e) =>{

        e.preventDefault();

        const payload = { ...formDataPresitito , 
            tesserato : formDataPresitito.tesserato ? Number(formDataPresitito.tesserato) : null
        }
        
        try {
            
            await dispatch(postPrestito(payload)).unwrap();

            setFormDataPresitito(initialStatePrestito);
            toast.success('Presitito registrato');

            dispatch(clearErrorPrestiti());
            dispatch(getFilteringPrestitiAPI(id_tessera));

        } catch (error) {
            
            console.log(error , "dati : " , payload);
            toast.error("Azione rifiutata");
        }

    }


    //--------------------------DELETE PRESTITO------------------------------//

    const deletePrestito = async(id_prestito)=> {

        try {
            
            await dispatch(deletePrestitoAPI(id_prestito)).unwrap();
            toast.success("Eliminato");

            dispatch(getFilteringPrestitiAPI(id_tessera));

            return ()=> dispatch(clearFilterItems());

        } catch (error) {
            
            console.log(error , "id: " , id_prestito);
            toast.error("Azione rifiutata");
        }

    }


    //--------------------------PATCH PRESTITO------------------------------//

    const [restituito_set , setRestituito] = useState(false);
    

    const patchPrestito = async(e , id_prestito , restituito_set) => {

        e.preventDefault();

        try {
            
            await dispatch(patchStatusPrestitoAPI({
                id_prestito : id_prestito , updateData : {isRestituito : restituito_set}
            })).unwrap();

            if(restituito_set == false){
                toast.success('Da restituire');
            }
            else{
                toast.success("Restituito")
            }
            
            
            dispatch(getFilteringPrestitiAPI(id_tessera));

        } catch (error) {
            
            console.log(error);
            toast.error("Azione rifiutata");
        }

    }

    //--------------------------PATCH PENDING------------------------------//

    const [prestato_set , setPrestato] = useState(false);

    const patchPrestitoPending = async(e, id_prestito , prestato_set) => {

        e.preventDefault();

        try {
            
            await dispatch(patchPendingPrestitoAPI({

                id_prestito : id_prestito ,
                updateData : {isPrestato : prestato_set}

            })).unwrap();

            if(prestato_set === false){
                toast.success("In presitito")
            }
            else{
                toast.success("Saldato")
            }
            

            dispatch(getFilteringPrestitiAPI(id_tessera));

        } catch (error) {
            
            console.log(error);
            toast.error("Azione rifiutata");
        }

    }


    useEffect(() => {
        
        dispatch(getDetailTesseraBiblioteca(id_tessera));
       
        return () => dispatch(clearTessera());

    },[id_tessera , dispatch])

    useEffect(() => {
        dispatch(getFilteringPrestitiAPI(id_tessera));
        return () => dispatch(clearFilterItems());
    },[dispatch])


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

                                <div className="py-10">
                                   
                                    <h2 className="text-2xl font-light mb-4 text-gray-800">Gestione presiti <hr /></h2>

                                     <AnimatePresence>

                                        {popUpPrestito.open && (

                                            <motion.div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }}exit={{ opacity: 0 }}>
                                                
                                                <motion.div  className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl relative" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3 }}>
                                                    
                                                    <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={() => { 
                                                        
                                                        setPopUpPrestito({ open: false });
                                                        
                                                    
                                                    }}>
                                                        <CloseIcon />
                                                    </button>
                                                    
                                                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                                                        Registra un nuovo presito
                                                    </h2>

                                                    <form onSubmit={handleSubmitPrestito} className="flex flex-col gap-4">
                                                        
                                                        <label className="flex flex-col text-gray-700 text-sm">
                                                            ISBN
                                                            <input name="libro" value={formDataPresitito.libro} onChange={handleChangePrestito} type="text" className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                                        </label>

                                                        <label className="flex flex-col text-gray-700 text-sm">
                                                            Data inizio
                                                            <input name="data_inizio" value={formDataPresitito.data_inizio} onChange={handleChangePrestito} type="date" className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                                        </label>

                                                        <label className="flex flex-col text-gray-700 text-sm">
                                                            Data fine
                                                            <input name="data_fine" value={formDataPresitito.data_fine} onChange={handleChangePrestito} type="date" className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                                        </label>
                                                        

                                                        <button  type="submit" className="mt-4 p-2 rounded-md border border-blue-500 text-white bg-blue-900 hover:bg-blue-800 transition-colors text-sm">
                                                            Salva prestito
                                                        </button>
                                                        
                                                    </form>
                                                
                                                </motion.div>
                                        
                                            </motion.div>
                                        )}

                                    </AnimatePresence>
                                    
                                    <div className="bg-gray-100   p-2 flex items-center justify-between">
  
                                        
                                        <div className="flex items-center space-x-4">
                                            <button onClick={() => setPopUpPrestito({open : true})} className="text-green-500 hover:text-green-400 transition-colors">
                                                <AddBoxIcon sx={{ fontSize: 32 }} /> registra prestito
                                            </button>
                                        </div>

                                         
                                        <div className="flex items-center space-x-5">

                                            <label className="flex items-center space-x-1 cursor-pointer text-gray-700 font-medium">
                                                <p className="text-gray-600">ISBN</p>
                                                <input type="text" className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="prestito"/>
                                                <button className="text-white rounded-md hover:bg-blue-500 bg-blue-700"><ZoomInIcon sx={{fontSize:35}}/></button>
                                            </label>

                                            <p className="text-gray-600">data inizio</p>
                                            <input type="date" className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="prestito"/>

                                            <p className="text-gray-600">data fine</p>
                                            <input type="date" className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="prestito"/>
                                            
                                            <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="stato" >
                                            
                                                <option value="">Restituito</option>
                                                <option value="true">Si</option>
                                                <option value="false">No</option>
                                            
                                            </select>

                                            <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="stato" >
                                            
                                                <option value="">In prestito</option>
                                                <option value="true">Si</option>
                                                <option value="false">No</option>
                                            
                                            </select>

                                            <select className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="prestito" >
                                                <option value="">Operatore</option>
                                            
                                            </select>

                                            <button className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all">
                                                <BackspaceIcon/>
                                            </button>
                                            
                                        </div>
    
                                    </div>

                                    

                                    <div className="overflow-x-auto">

                                        <table className="w-full bg-gray-200 shadow-md rounded-lg overflow-hidden">

                                            <thead className="bg-blue-600 text-white">
                                                <tr>
                                                    <th className="py-3 px-6 text-left">NR. Prestito</th>
                                                    <th className="py-3 px-6 text-left">LIBRO</th>
                                                    <th className="py-3 px-6 text-left">DATA INIZIO</th>
                                                    <th className="py-3 px-6 text-left">DATA FINE</th>
                                                    <th className="py-3 px-6 text-left">RESTITUITO</th>
                                                    <th className="py-3 px-6 text-left">IN PRESTITO</th>
                                                    <th className="py-3 px-6 text-left">AZIONE</th>
                                                </tr>
                                            </thead>

                                            <tbody className="divide-y divide-gray-200">

                                               {Array.isArray(filtering_presititi_items) && filtering_presititi_items.map(filter_table => (

                                                    <tr key={filter_table.id_prestito} className="hover:bg-white transition-colors">

                                                        <td className="py-3 px-6 text-black">{filter_table.id_prestito}</td>

                                                        <td className="py-3 px-6 text-black">
                                                            
                                                            <Link href={`/details/libri/${filter_table.libro}`} className="hover:text-green-800" title="visualizza dettagli">
                                                                {filter_table.libro} <DoubleArrowIcon sx={{fontSize : 17}}/>
                                                            </Link>
                                                            
                                                        </td>

                                                        <td className="py-3 px-6 text-black">{filter_table.data_inizio}</td>
                                                        <td className="py-3 px-6 text-black">{filter_table.data_fine}</td>   
                                                        <td className="py-3 px-6 text-black">{filter_table.isRestituito ? 
                                                            
                                                            <div className="w-20 bg-green-800 rounded-full text-center"><span className=" w-20 h-10  text-green-500">SI</span></div> 
                                                            
                                                            : 

                                                            <div className="w-20 bg-red-800 rounded-full text-center"><span className=" w-20 h-10  text-red-300">NO</span></div>
                                                            
                                                            } 
                                                        
                                                        </td>
                                                        <td className="py-3 px-6 text-black">{filter_table.isPrestato ? 
                                                            
                                                            <div className="w-20 bg-green-800 rounded-full text-center"><span className=" w-20 h-10  text-green-500">SI</span></div> 
                                                            
                                                            : 
                                                            
                                                            <div className="w-20 bg-red-800 rounded-full text-center"><span className=" w-20 h-10  text-red-300">NO</span></div>
                                                        
                                                        
                                                            } 

                                                        </td>

                                                        <td className="py-3 px-6 text-black">
                                                           
                                                            <div className="flex flex-col sm:flex-row items-center gap-2">
                                                                
                                                                 
                                                                <label className="flex items-center space-x-2 cursor-pointer text-gray-700 font-medium">
                                                                    <span>restituito</span>
                                                                    <input checked={!!filter_table.isRestituito} onChange={(e) => patchPrestito(e , filter_table.id_prestito , e.target.checked)}  type="checkbox"   className="w-5 h-5 rounded border-gray-400 text-green-600 focus:ring-2 focus:ring-green-400 transition-all" />
                                                                </label>

                                                                <label className="flex items-center space-x-2 cursor-pointer text-gray-700 font-medium">
                                                                    <span>in prestito</span>
                                                                    <input checked={!!filter_table.isPrestato} onChange={(e) => patchPrestitoPending(e , filter_table.id_prestito , e.target.checked)}  type="checkbox"   className="w-5 h-5 rounded border-gray-400 text-green-600 focus:ring-2 focus:ring-green-400 transition-all" />
                                                                </label>
                                                            
                                                                <button onClick={() => deletePrestito(filter_table.id_prestito) } type="button" className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-1">
                                                                    Rimuovi
                                                                </button>

                                                            </div>

                                                        </td>

                                                    </tr>

                                                ))}
                                                    
                                            </tbody>

                                        </table>

                                    </div>

                                   

                                </div>

                            </div>

                        </div>
                
                    </div>
                
                </div>     
        
            </PrivateRoute>
        
        </AppWrapper>


        

    );
}
