'use client';

import { useSelector , useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Toaster , toast} from "react-hot-toast";

import AppWrapper from "@/components/AppWrapper";
import PrivateRoute from "@/components/PrivateRoute";
import Banner from "@/components/Banner";
import SideBar from "@/components/SideBar";

import AddBoxIcon from '@mui/icons-material/AddBox';
import CloseIcon from "@mui/icons-material/Close";
import SettingsIcon from '@mui/icons-material/Settings';


import { getHelperSelectionPostazioni, postPostazioneAPI , clearErrorPostazione } from "@/features/Postazioni/postazioniSlice";
import { postLibroAPI , clearErrorLibro } from "@/features/Libri/libriSlice";
import { postCategoriaAPI , clearCategorieError } from "@/features/Categorie/categorieSlice";
import { getHelperCategoriaSlectionAPI } from "@/features/Categorie/categorieSlice";
import { getHelperAutoriAPI, postAutoriAPI , clearErrorAutori } from "@/features/Autori/autoriSlice";

export default function InsertLibroPage() {
 
    const {

        data : {postazioni_helper_items , postazioni_post_items},

        requests : {
            postazioni_helper_items : {postazioni_helperStatus, postazioni_helperError},
            postazioni_post_items : {postazioni_post_error}
        },


    } = useSelector((state) => state.postazioni);
    
    const {  
        
        data: { autore_helper_items , autore_post_items },
        
        requests: {
        
            autore_helper_items: { autori_helper_Status,  autori_helper_Error,  autori_helperLoading },
            autore_post_items : {  autore_post_status, autore_post_error, autore_post_loading }
        },

    } = useSelector((state) => state.autori);


    const {

        data : {categoria_helper_items , categoria_post_items},

        requests : {
            categoria_helper_items : {categoria_helper_status , categoria_helper_error , categoria_helper_loading},
            categoria_post_items : {categoria_post_error}
        },

    } = useSelector((state) => state.categorie);


    const {
        
        data : {items},

        requests :{
            items : {error}
        }

    } = useSelector((state) => state.libri);
   
 
    const dispatch = useDispatch();
    const router = useRouter();

    const [popupAutore , setPopUpAutore] = useState({open : false});
    const [popupCategoria , setPopUpCategoria] = useState({open : false});
    const [popupPostazione , setPopUpPostazione] = useState({open : false});


    //--------------------------------------------------------------POST LIBRO--------------------------------------------------------------//

    const initialState = {

        isbn : "",
        titolo : "",
        autore : null,
        data_uscita : "",
        editore : "",
        formato : "",
        lingua : "",
        postazione : null
    }

    const [formData , setFormData] = useState(initialState);


    const handleChange = (e) =>{

        const {name , value} = e.target;

        setFormData({
            ...formData,
            [name] : value  === "" ? null : value
        })
    }


    
    const handleSubmitLibro = async(e) => {

        e.preventDefault();

        const payload = {...formData , 
            
            postazione: formData.postazione ? Number(formData.postazione) : null ,
            autore : formData.autore ? Number(formData.autore) : null
        };
        

        try {
            
            await dispatch(postLibroAPI(payload)).unwrap();
            toast.success("Libro inserito");

            setFormData(initialState);
            dispatch(clearErrorLibro());

        } catch (error) {
            console.log(payload , "errore : " , error);
            toast.error("Azione rifiutata");            
        }

    }


    //--------------------------------------------------------------POST CATEGORIA--------------------------------------------------------------//


    const initialStateCategoria = {

        nome_categoria : "",
        descrizione : ""
    }


    const [formDataCategoria , setFormDataCategoria] = useState(initialStateCategoria);

    const handleChangeCategoria = (e) => {
        
        const{name , value} = e.target;

        setFormDataCategoria({...formDataCategoria , [name] : value})
    }


    const handleSubmitCategoria = async(e) => {
        
        e.preventDefault();

        try {
            
            await dispatch(postCategoriaAPI(formDataCategoria)).unwrap();
            dispatch(getHelperCategoriaSlectionAPI());

            setFormDataCategoria(initialStateCategoria);
            toast.success("Categoria inserita");

            dispatch(clearCategorieError());

        } catch (error) {
            
            console.log(formDataCategoria , "error" , error);
            toast.error("Azione rifiutata");
        }

    }

    
    //--------------------------------------------------------------POST AUTORE--------------------------------------------------------------//

    const initialStateAutore = {

        nome_autore : "",
        cognome_autore : ""
    }


    const [fomrDataAutore , setFormDataAutore] = useState(initialStateAutore);

    const handleChangeAutore = (e) => {

        const {name , value} = e.target;

        setFormDataAutore({
            ...fomrDataAutore,
            [name] : value
        })
    }


    const handleSubmitAutore = async(e)=> {

        e.preventDefault();

        try {
            
            await dispatch(postAutoriAPI(fomrDataAutore)).unwrap();
            dispatch(getHelperAutoriAPI());
            
            setFormDataAutore(initialStateAutore);
            toast.success("Autore inserito");

            dispatch(clearErrorAutori());

        } catch (error) {

            console.log(formData , "error" , error);
            toast.error("Azione rifiutata");
        }

    }


    //--------------------------------------------------------------POST POSTAZIONE--------------------------------------------------------------//

    const initialStatePostazione = {

        posizione : "",
        numerazione : null,
        categoria : null,
        capacita : null
    }


    const [formDataPostazioni , setFomrDataPostazioni] = useState(initialStatePostazione);

    const handleChangePostazioni = (e) => {

        const {name , value} = e.target;

        setFomrDataPostazioni({
            ...formDataPostazioni,
            [name] : value === "" ? null : value
        })
    }
    

    const handleSubmitPostazione = async(e) => {

        e.preventDefault();

        const payload = { ...formDataPostazioni , 

            numerazione : formDataPostazioni.numerazione ? Number(formDataPostazioni.numerazione) : null,
            categoria : formDataPostazioni.categoria ? Number(formDataPostazioni.categoria) : null,
            capacita : formDataPostazioni.capacita ? Number(formDataPostazioni.capacita) : null
        };

        try {
            
            await dispatch(postPostazioneAPI(payload)).unwrap();

            setFomrDataPostazioni(initialStatePostazione);
            toast.success("Postazione inserita");

            dispatch(clearErrorPostazione());

        } catch (error) {
            
            console.log(payload , "error : " , error);
            toast.error("Azione rifiutata");
        }

    }



    //{errorDocu?.nome && ( <p className="text-red-500 text-sm px-1 mt-1">{errorDocu.nome[0]}</p>)} Error call nel componente

    useEffect(() => {

        dispatch(getHelperSelectionPostazioni());
        dispatch(getHelperAutoriAPI());
        dispatch(getHelperCategoriaSlectionAPI());
       
    },[dispatch])


    return (

        <AppWrapper>
        
            <PrivateRoute>
                
                <div className="flex min-h-screen bg-gray-100">
                
                <SideBar />

                    <div className="flex-1 flex flex-col transition-all duration-300">
                    
                        <Banner />

                        <div className="min-h-screen flex justify-center">
                        
                            <div className="w-full max-w-8xl bg-white rounded-xl shadow p-8">

                                <h1 className="text-2xl py-16 font-thin text-gray-600 mb-6 text-left">
                                    <SettingsIcon sx={{fontSize : 40}}/> Inserisci Nuovo Libro
                                    <hr />
                                    
                                </h1>


                                <div className=" text-left py-4">
                                    
                                    <span className="text-green-600 hover:text-green-700">
                                        <button onClick={() => setPopUpPostazione({open : true})}>
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


                                <div className=" text-left py-4">
                                    
                                    <span className="text-green-600 hover:text-green-700">

                                        <button onClick={() => setPopUpCategoria({open : true})}>
                                            <AddBoxIcon sx={{fontSize : 30}}/>
                                        </button>
                                        
                                    </span>
                                    
                                    <span className="text-gray-600 px-2">
                                        Aggiungi nuova categoria
                                    </span>
                                    
                                </div>

                                <hr />


                                <AnimatePresence>

                                    {popupAutore.open && (

                                        <motion.div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }}exit={{ opacity: 0 }}>
                                            
                                            <motion.div  className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl relative" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3 }}>
                                                
                                                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={() => { 
                                                    
                                                    setPopUpAutore({ open: false });
                                                    dispatch(clearErrorAutori());
                                                
                                                }}>
                                                    <CloseIcon />
                                                </button>
                                                
                                                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                                                    Aggiungi Nuovo Autore
                                                </h2>

                                                <form onSubmit={handleSubmitAutore} className="flex flex-col gap-4">
                                                    
                                                    <label className="flex flex-col text-gray-700 text-sm">
                                                        Nome Autore
                                                        <input name="nome_autore" value={fomrDataAutore.nome_autore ?? ""} onChange={handleChangeAutore} type="text" className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                                        {autore_post_error?.nome_autore && ( <p className="text-red-500 text-sm px-1 mt-1">{autore_post_error.nome_autore[0]}</p>)}

                                                    </label>
                                                    
                                                    <label className="flex flex-col text-gray-700 text-sm">
                                                        Cognome Autore
                                                        <input name="cognome_autore" value={fomrDataAutore.cognome_autore ?? ""} onChange={handleChangeAutore} type="text" className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                                        {autore_post_error?.cognome_autore && ( <p className="text-red-500 text-sm px-1 mt-1">{autore_post_error.cognome_autore[0]}</p>)}

                                                    </label>

                                                    <button  type="submit" className="mt-4 p-2 rounded-md border border-rose-500 text-white bg-rose-900 hover:bg-rose-800 transition-colors text-sm">
                                                        Salva Autore
                                                    </button>
                                                    
                                                </form>
                                            
                                            </motion.div>
                                       
                                        </motion.div>
                                    )}

                                </AnimatePresence>

                                <AnimatePresence>

                                    {popupCategoria.open && (

                                        <motion.div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }}exit={{ opacity: 0 }}>
                                            
                                            <motion.div  className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl relative" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3 }}>
                                                
                                                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={() => {
                                                    
                                                    setPopUpCategoria({ open: false }); 
                                                    dispatch(clearCategorieError());
                                                    
                                                }}>

                                                    <CloseIcon />
                                                </button>
                                                
                                                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                                                    Aggiungi Nuova Categoria
                                                </h2>

                                                <form onSubmit={handleSubmitCategoria} className="flex flex-col gap-4">
                                                    
                                                    <label className="flex flex-col text-gray-700 text-sm">
                                                        Nome Categoria
                                                        <input name="nome_categoria" value={formDataCategoria.nome_categoria ?? ""} onChange={handleChangeCategoria} type="text" className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                                        {categoria_post_error?.nome_categoria && ( <p className="text-red-500 text-sm px-1 mt-1">{categoria_post_error.nome_categoria[0]}</p>)}

                                                    </label>
                                                    
                                                    <label className="flex flex-col text-gray-700 text-sm">
                                                        Descrizione
                                                        <input name="descrizione" value={formDataCategoria.descrizione ?? ""} onChange={handleChangeCategoria} type="text" className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                                        {categoria_post_error?.descrizione && ( <p className="text-red-500 text-sm px-1 mt-1">{categoria_post_error.descrizione[0]}</p>)}

                                                    </label>

                                                    <button  type="submit" className="mt-4 p-2 rounded-md border border-rose-500 text-white bg-rose-900 hover:bg-rose-800 transition-colors text-sm">
                                                        Salva Categoria
                                                    </button>
                                                    
                                                </form>
                                            
                                            </motion.div>
                                       
                                        </motion.div>
                                    )}

                                </AnimatePresence>


                                <AnimatePresence>

                                    {popupPostazione.open && (

                                        <motion.div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50" initial={{ opacity: 0 }} animate={{ opacity: 1 }}exit={{ opacity: 0 }}>
                                            
                                            <motion.div  className="bg-white p-6 rounded-xl shadow-lg w-full max-w-xl relative" initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}exit={{ scale: 0.8, opacity: 0 }} transition={{ duration: 0.3 }}>
                                                
                                                <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={() => { 
                                                    
                                                    setPopUpPostazione({ open: false });
                                                    dispatch(clearErrorPostazione());
                                                }}>
                                                    <CloseIcon />
                                                </button>
                                                
                                                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                                                    Aggiungi Nuova Postazione
                                                </h2>

                                                <form onSubmit={handleSubmitPostazione} className="flex flex-col gap-4">
                                                    
                                                    <label className="flex flex-col text-gray-700 text-sm">
                                                        Posizione
                                                        <input name="posizione" value={formDataPostazioni.posizione ?? ""} onChange={handleChangePostazioni} type="text" className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                                        {postazioni_post_error?.posizione && ( <p className="text-red-500 text-sm px-1 mt-1">{postazioni_post_error.posizione[0]}</p>)}

                                                    </label>
                                                    
                                                    <label className="flex flex-col text-gray-700 text-sm">
                                                        Numerazione
                                                        <input  name="numerazione" value={formDataPostazioni.numerazione ?? ""} onChange={handleChangePostazioni} type="number" className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                                        {postazioni_post_error?.numerazione && ( <p className="text-red-500 text-sm px-1 mt-1">{postazioni_post_error.numerazione[0]}</p>)}
                                                    </label>

                                                    <label className="flex flex-col text-gray-700 text-sm">
                                                        Categoria
                                                        <select name="categoria" value={formDataPostazioni.categoria ?? ""} onChange={handleChangePostazioni} type="text" className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400"> 
                                                            
                                                            <option value="">Seleziona categoria</option>

                                                            {Array.isArray(categoria_helper_items) && categoria_helper_items.map(cat => (
                                                                
                                                                <option key={cat.id_categoria} value={cat.id_categoria}>{cat.nome_categoria}</option>
                                                            ))}
                                                            

                                                        </select>
                                                        {postazioni_post_error?.categoria && ( <p className="text-red-500 text-sm px-1 mt-1">{postazioni_post_error.categoria[0]}</p>)}
                                                    </label>

                                                    <label className="flex flex-col text-gray-700 text-sm">
                                                        Capacità massima
                                                        <input name="capacita" value={formDataPostazioni.capacita ?? ""} onChange={handleChangePostazioni} type="number" className="mt-2 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-400" />
                                                        {postazioni_post_error?.capacita && ( <p className="text-red-500 text-sm px-1 mt-1">{postazioni_post_error.capacita[0]}</p>)}
                                                    </label>

                                                    <button  type="submit" className="mt-4 p-2 rounded-md border border-rose-500 text-white bg-rose-900 hover:bg-rose-800 transition-colors text-sm">
                                                        Salva Postazione
                                                    </button>
                                                    
                                                </form>
                                            
                                            </motion.div>
                                       
                                        </motion.div>
                                    )}

                                </AnimatePresence>
                                
                                <Toaster position="top-center" reverseOrder={false} />
                                <form onSubmit={handleSubmitLibro} className=" sm:grid-cols-2 py-10 gap-6">

                                    <div className="mb-3">
                                        <label className="block text-gray-700 mb-2">Titolo</label>
                                        <input name="titolo" value={formData.titolo} onChange={handleChange} type="text" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />

                                        {error?.titolo && ( <p className="text-red-500 text-sm px-1 mt-1">{error.titolo[0]}</p>)}
                                    </div>

                                    <div className="mb-3">
                                        <label className="block text-gray-700 mb-2">Autore</label>
                                        <select name="autore" value={formData.autore ?? ""} onChange={handleChange} type="text" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2">

                                            <option value="">Sleziona un autore</option>

                                            {Array.isArray(autore_helper_items) && autore_helper_items.map(autori => (
                                                <option key={autori.id_autore} value={autori.id_autore}>{autori.nome_autore} {autori.cognome_autore}</option>
                                            ))}
                                        </select>

                                        {error?.autore && ( <p className="text-red-500 text-sm px-1 mt-1">{error.autore[0]}</p>)}
                                    </div>

                                    <div className="mb-3">
                                        <label className="block text-gray-700 mb-2">ISBN</label>
                                        <input name="isbn" value={formData.isbn} onChange={handleChange} type="text" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />
                                        
                                        {error?.isbn && ( <p className="text-red-500 text-sm px-1 mt-1">{error.isbn[0]}</p>)}

                                    </div>

                                    <div className="mb-3">
                                        <label className="block text-gray-700 mb-2">Editore</label>
                                        <input name="editore" value={formData.editore} onChange={handleChange} type="text" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />

                                        {error?.editore && ( <p className="text-red-500 text-sm px-1 mt-1">{error.editore[0]}</p>)}
                                    </div>

                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">Data di uscita</label>
                                        <input name="data_uscita" value={formData.data_uscita} onChange={handleChange} type="date" className="w-full text-gray-700 border bg-gray-100 border-gray-400 rounded px-3 py-2" />
                                         {error?.data_uscita && ( <p className="text-red-500 text-sm px-1 mt-1">{error.data_uscita[0]}</p>)}
                                    </div>

                                    <div className="mb-3">
                                        <label className="block text-gray-700 mb-2">Formato</label>
                                        <input name="formato" value={formData.formato} onChange={handleChange} type="text" style={{ textTransform: "uppercase" }} className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />

                                        {error?.formato && ( <p className="text-red-500 text-sm px-1 mt-1">{error.formato[0]}</p>)}
                                    </div>

                                    <div className="mb-3">
                                        <label className="block text-gray-700 mb-2">Lingua</label>
                                        <input name="lingua" value={formData.lingua} onChange={handleChange} type="text" style={{ textTransform: "uppercase" }} className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2" />

                                        {error?.lingua && ( <p className="text-red-500 text-sm px-1 mt-1">{error.lingua[0]}</p>)}
                                    </div>

                                    <div className="mb-3">
                                        <label className="block text-gray-700 mb-2">Postazione</label>
                                        
                                        <select name="postazione" value={formData.postazione ?? ""} onChange={handleChange} type="text" className="w-full border text-gray-700 bg-gray-100 border-gray-400 rounded px-3 py-2"> 
                                            
                                            <option value="">Seleziona postazione</option>

                                            {Array.isArray(postazioni_helper_items) && postazioni_helper_items.map(postazioni => (
                                                <option key={postazioni.id_postazione} value={postazioni.id_postazione}>{postazioni.id_postazione}/{postazioni.posizione}{postazioni.numerazione}: {postazioni.categoria_nome}</option>
                                            ))}    
                                            
                                        </select> 
                                        {error?.postazione && ( <p className="text-red-500 text-sm px-1 mt-1">{error.postazione[0]}</p>)}
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
