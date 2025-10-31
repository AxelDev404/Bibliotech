'use client';


import {Toaster , toast} from "react-hot-toast";
import { useParams } from "next/navigation";
import { useSelector , useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect , useState } from "react";

import { getLibroDetailPageAPI , clearLibro, patchLibroAPI } from "@/features/Libri/libriSlice";
import AppWrapper from "@/components/AppWrapper";
import PrivateRoute from "@/components/PrivateRoute";

import Banner from "@/components/Banner";
import SideBar from "@/components/SideBar";

import LockOpenIcon from '@mui/icons-material/LockOpen';
import UndoIcon from '@mui/icons-material/Undo';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import LockOutlineIcon from '@mui/icons-material/LockOutline';

export default function LibroPage() {
  
    const {
        
        data : {libroDetail , book_patch_items},

        requests : {
            libroDetail : {statusLibroDetail , errorLibroDetail},
            book_patch_items : {book_patch_error}
        },    
    
    } = useSelector((state) => state.libri);

    
    const dispatch = useDispatch();
    const {isbn} = useParams();

    const router = useRouter();
    

    //-----------------------------------------PATCH LIBRO-----------------------------------------//


    const initialState = {
        titolo : "",
        data_uscita : "",
        editore : "",
        formato : "",
        lingua : ""
    }

    const [locked , setLocked] = useState(true);

    const [formData , setFormData] = useState(initialState);
    const [saving , setSaving] = useState(false);

    const handleChange = (e) => {

        const {name , value} = e.target;

        setFormData({
            ...formData,
            [name] : value
        })

    }


    const handlePatch = async() => {

        //e.preventDefault();

        setSaving(true);

        const updateData = Object.fromEntries(

            Object.entries(formData).filter(([key , value]) => value !== libroDetail[key])

        );
        
        
        if(updateData.data_uscita){
            updateData.data_uscita = new Date(updateData.data_uscita).toISOString().split("T")[0];
        }

        
        if(Object.keys(updateData).length === 0){
            toast.success("Nesuna modifica da fare");
            return;
        }

        console.log(updateData);

        setSaving(true);

        try {

            console.log({isbn, updateData});
            await dispatch(patchLibroAPI({isbn : isbn , updateData: updateData})).unwrap();

            toast.success("Libro aggiornato");

                        
        } catch (error) {
            console.error(error); 
            toast.error("Azione rifiutata");
        
        } finally{

            setSaving(true);
        }

    }


    useEffect(() => {
        
        if(isbn) dispatch(getLibroDetailPageAPI(isbn));
        return () => dispatch(clearLibro());

    },[isbn , dispatch])


    useEffect(() => {
        
        if (libroDetail && Object.keys(libroDetail).length > 0) {
            setFormData({ ...initialState, ...libroDetail });
        }

    }, [libroDetail]);


    return (

        <AppWrapper>
                    
            <PrivateRoute>
        
                <div className="flex min-h-screen bg-white">
                                           
                    <SideBar />
                        
                                        
                    <div className="flex-1 flex flex-col  transition-all duration-300">
                                
                        <Banner />
                        
                        <div className="min-h-screen bg-gray-100 py-10 px-6 flex flex-col items-between">
                    
                            <div className="max-w-8xl py-20 w-full">

                                <Toaster position="top-center" reverseOrder={false} />

                                <h1 className="text-2xl font-thin text-gray-800 mb-6 text-left">
                                    <ZoomInIcon sx={{fontSize : 40}}/>
                                    Dettagli Libro
                                    <hr />
                                </h1>

                                <div className="bg-white p-8 rounded-2xl transition-all duration-300 space-y-4">

                                    <div>

                                        <button onClick={() => router.back()} className="bg-rose-900 text-white px-2 py-2 rounded-md hover:bg-rose-800 transition">
                                            <UndoIcon/>
                                        </button>

                                        <div className="py-2"></div>

                                        
                                        <button title="sblocca modifiche" type="button" onClick={() => {setLocked(false); toast.success("Modifiche abilitate");}} className="bg-green-700 text-white px-2 py-2 rounded-md hover:bg-green-400 transition">
                                            <LockOpenIcon/>
                                        </button>

                                        <div className="py-2"></div>

                                        <button title="blocca modifiche" type="button" onClick={() => {setLocked(true); toast.error("Modifiche diabilitate")}} className="bg-red-800 text-white px-2 py-2 rounded-md hover:bg-rose-800 transition">
                                            <LockOutlineIcon/>
                                        </button>


                                        <div className="py-6 flex w-52 ">

                                            <button type="button" onClick={() => handlePatch()} className="bg-rose-900 text-white px-2 py-2 rounded-md hover:bg-rose-800 transition">
                                                <SaveAltIcon/>
                                            </button>

                                        </div>

                                    </div>

                                    <form>
                                        
                                       
                                       
                                        <div className="grid grid-cols-2 sm:grid-cols-2 gap-20 px-36">
                                        
                                            <div className="flex justify-between border-b pb-2 flex-col">
                                                <h2 className="text-sm text-gray-500">Titolo</h2>
                                                <input readOnly={locked} name="titolo" onChange={handleChange} type="text" className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 " value={formData?.titolo ?? ""} />
                                            </div>

                                            <div className="flex justify-between border-b pb-2 flex-col">
                                                <h2 className="text-sm text-gray-500">Autore</h2>
                                                <p className="text-md w-96 h-7 px-2   font-thin text-gray-900  ">{libroDetail?.autore_libro ?? ""} </p>
                                            </div>

                                            <div className="flex justify-between border-b pb-2 flex-col">
                                                <h2 className="text-sm text-gray-500">ISBN</h2>
                                                <p className="text-md w-96 h-7 px-2   font-thin text-gray-900  ">{libroDetail?.isbn ?? ""} </p>
                                            </div>

                                            <div className="flex justify-between border-b pb-2 flex-col">
                                                <h2 className="text-sm text-gray-500">Editore</h2>
                                                <input readOnly={locked} name="editore" onChange={handleChange} type="text" className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 " value={formData?.editore ?? ""} />
                                            </div>

                                            <div className="flex justify-between border-b pb-2 flex-col">
                                                <h2 className="text-sm text-gray-500">Data di uscita</h2>
                                                <input readOnly={locked} name="data_uscita" onChange={handleChange} type="date" className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 " value={formData?.data_uscita ?? ""} />
                                            </div>

                                            <div className="flex justify-between border-b pb-2 flex-col">
                                                <h2 className="text-sm text-gray-500">Formato</h2>
                                                <input readOnly={locked} name="formato" onChange={handleChange} type="text" className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 " value={formData?.formato ?? ""} />
                                            </div>

                                            <div className="flex justify-between border-b pb-2 flex-col">
                                                <h2 className="text-sm text-gray-500">Lingua</h2>
                                                <input readOnly={locked} name="lingua" onChange={handleChange} type="text" className="text-md w-96 h-7 px-2 rounded-md border-gray-400 border font-thin text-gray-900 bg-slate-50 " value={formData?.lingua ?? ""} />
                                            </div>

                                            

                                            <div className="flex justify-between border-b pb-2 flex-col">
                                                <h2 className="text-sm text-gray-500">Postazione</h2>
                                                <p className="text-md w-96 h-7 px-2   font-thin text-gray-900  ">{libroDetail?.postazione ?? ""} </p>
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
