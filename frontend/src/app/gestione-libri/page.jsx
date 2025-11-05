'use client';

import BackspaceIcon from '@mui/icons-material/Backspace';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
import BuildIcon from '@mui/icons-material/Build';

//-------------------STATE AND FUNCTION-------------------//

import AppWrapper from "@/components/AppWrapper";
import PrivateRoute from "@/components/PrivateRoute";
import SideBar from "@/components/SideBar";
import Banner from "@/components/Banner";
import Link from "next/link";
import { useSelector , useDispatch } from 'react-redux';
import { useState , useEffect } from 'react';

import { getFilterBookAPI } from '@/features/Libri/libriSlice';
import { getHelperSelectionUserAPI } from '@/features/CustomUser/customuserSlice';
import { getHelperAutoriAPI } from '@/features/Autori/autoriSlice';
import { getHelperSelectionPostazioni } from '@/features/Postazioni/postazioniSlice';

export default function GestioneLibri(){


    const {

        data : {filter_book_items},

        requests : {
            filter_book_items : {}
        }


    } = useSelector((state) => state.libri);

    const {
        
        data: {customuser_helper_selection_items},

        requests : {
            customuser_helper_selection_items : {}
        }

    } = useSelector((state) => state.customuser);

    const {

        data : {autore_helper_items},

        requests : {
            autore_helper_items : {}
        }

    } = useSelector((state) => state.autori);


    const {

        data : {postazioni_helper_items},
        
        requests : {
            postazioni_helper_items:{}
        }

    } = useSelector((state) => state.postazioni);


    const [filtrazione , setFiltrazione] = useState({

        isbn : null,
        data_uscita : null,
        editore : null,
        formato : null,
        autore : null,
        postazione : null,
        utente : null,
        lingua : null
    });

    const restoreFilters = () => {

        setFiltrazione({
            isbn : null,
            data_uscita : null,
            editore : null,
            formato : null,
            autore : null,
            postazione : null,
            utente : null,
            lingua : null

        })
    }


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFilterBookAPI({params : filtrazione}));
        console.log(filter_book_items);
    },[ filtrazione ,dispatch])

    useEffect(() => {

        dispatch(getHelperSelectionUserAPI());
        dispatch(getHelperAutoriAPI());
        dispatch(getHelperSelectionPostazioni());

    },[dispatch])


    return(

        <AppWrapper>
            
            <PrivateRoute>

                <div className="flex min-h-screen bg-white text-white">
                                   
                    <SideBar />
                
                                
                    <div className="flex-1 flex flex-col  transition-all duration-300">
                        
                        <Banner />
                
                        <div className="flex flex-wrap gap-4 py-10 px-6">

                            <div className="py-20 w-full">

                                <div>
                                    <h2 className="text-2xl font-light mb-4  text-gray-800"><ManageHistoryIcon sx={{fontSize : 35}}/> Gestione libri <hr /></h2>
                                </div>
                                
                                
                                <div className="bg-sky-600 rounded-t-md  px-10 flex items-center justify-between">

                                    <div></div>
  
                                    <div className="flex items-center space-x-5 py-5 rounded-2xl">

                                        
                                        <p className="text-white">ISBN</p>
                                        <input value={filtrazione.isbn ?? ""} onChange={(e) => setFiltrazione({...filtrazione , isbn : e.target.value})} type="text" className="bg-white h-8 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="prestito"/>
                                        
                                        <p className="text-white">Lingua</p>
                                        <input value={filtrazione.lingua ?? ""} onChange={(e) => setFiltrazione({...filtrazione , lingua : e.target.value})} type="text" className="bg-white h-9 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="prestito"/>

                                        <p className="text-white">Data uscita</p>
                                        <input value={filtrazione.data_uscita ?? ""} onChange={(e) => setFiltrazione({...filtrazione , data_uscita : e.target.value})} type="date" className="bg-white h-9 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="prestito"/>

                                            
                                        <select value={filtrazione.postazione ?? ""} onChange={(e) => setFiltrazione({...filtrazione , postazione : Number(e.target.value)})} className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="stato" >
                                            
                                            <option value="">Postazione</option>
                                            
                                            {Array.isArray(postazioni_helper_items) && postazioni_helper_items.map(postazioni => (
                                                <option key={postazioni.id_postazione} value={postazioni.id_postazione}>{postazioni.posizione}{postazioni.numerazione}:{postazioni.categoria_nome}</option>
                                            ))}
                                            
                                        </select>

                                        <select value={filtrazione.autore ?? ""} onChange={(e) => setFiltrazione({...filtrazione , autore : Number(e.target.value)})} className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="stato" >
                                            
                                            <option value="">Autore</option>

                                            {Array.isArray(autore_helper_items) && autore_helper_items.map(autore => (
                                                <option key={autore.id_autore} value={autore.id_autore}>{autore.nome_autore} {autore.cognome_autore}</option>
                                            ))}
                                            
                                        </select>

                                        <select  className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="stato" >
                                            
                                            <option value="">Editore</option>
                                            
                                        </select>

                                        <select value={filtrazione.utente ?? ""} onChange={(e) => setFiltrazione({...filtrazione , utente : Number(e.target.value)})}  className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="prestito" >
                                            <option value="">Operatore</option>

                                            {Array.isArray(customuser_helper_selection_items) && customuser_helper_selection_items.map(utente => (
                                                <option key={utente.id} value={utente.id}>{utente.username}</option>
                                            ))}
                                               
                                            
                                        </select>

                                        <button onClick={() => restoreFilters()} className="bg-white border  border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all">
                                            <BackspaceIcon/>
                                        </button>
                                            
                                    </div>
    
                                </div>

                                <div className="overflow-x-auto">

                                    <table className="w-full bg-gray-200 shadow-md rounded-b-lg overflow-hidden">

                                        <thead className="bg-blue-600 text-white">
                                            <tr>
                                                <th className="py-3 px-6 text-left">ISBN</th>
                                                <th className="py-3 px-6 text-left">Titolo</th>
                                                <th className="py-3 px-6 text-left">Data d'uscita</th>
                                                <th className="py-3 px-6 text-left">Editore</th>
                                                <th className="py-3 px-6 text-left">Formato</th>
                                                <th className="py-3 px-6 text-left">Lingua</th>
                                                <th className="py-3 px-6 text-left">Autore</th>
                                                <th className="py-3 px-6 text-left">Postazione</th>
                                                <th className="py-3 px-6 text-left">Inserito da</th>
                                                <th className="py-3 px-6 text-left">Interagisci</th>
                                                
                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-gray-300">

                                            {Array.isArray(filter_book_items) && filter_book_items.map(book_filters => (

                                                <tr key={book_filters.isbn} className="hover:bg-white transition-colors">

                                                    <td className="py-3 px-6 text-black">{book_filters.isbn}</td>
                                                    <td className="py-3 px-6 text-black">{book_filters.titolo}</td>
                                                    <td className="py-3 px-6 text-black">{book_filters.data_uscita}</td>
                                                    <td className="py-3 px-6 text-black">{book_filters.editore}</td>
                                                    <td className="py-3 px-6 text-black">{book_filters.formato}</td>
                                                    <td className="py-3 px-6 text-black">{book_filters.lingua}</td>
                                                    <td className="py-3 px-6 text-black">{book_filters.autore_libro}</td>
                                                    <td className="py-3 px-6 text-black">{book_filters.posizione_libro}{book_filters.poszione_libro_numerazione}</td>
                                                    <td className="py-3 px-6 text-black">{book_filters.username}</td>
                                                    
                                                    <td className="py-3 px-6 text-black">
                                                    
                                                        <Link href={`/details/libri/${book_filters.isbn}`}>
                                                            <BuildIcon/>
                                                        </Link>
                                                        
                                                    
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

            </PrivateRoute>

        </AppWrapper>
       
    );

}