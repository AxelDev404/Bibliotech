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

import { getFilterTableTesseraBibliotecaAPI } from '@/features/TessereBiblioteca/tessere_bibliotecaSlice';
import { getHelperSelectionUserAPI } from '@/features/CustomUser/customuserSlice';

export default function CercaLibro(){

    const {

        data : {filter_tessera_items},

        requests : {

            filter_tessera_items : {}

        }

    } = useSelector((state) => state.tessere_bibilioteca);

    
    const {

        data : {customuser_helper_selection_items},

        requests : {
            customuser_helper_selection_items : {}
        }

    } = useSelector((state) => state.customuser)
    
    
    const dispatch = useDispatch();

    const [filtrazione , setFiltrazione] = useState({

        id_tessera : null,
        codice_fiscale : null,
        data_nascita : null,
        email : null,
        utente : null
    });

    const restoreFilters = () => {

        setFiltrazione({

            id_tessera : null,
            codice_fiscale : null,
            data_nascita : null,
            email : null,
            utente : null

        });

    }

    useEffect(() => {

        dispatch(getFilterTableTesseraBibliotecaAPI({params : filtrazione}));

    },[ filtrazione , dispatch])

    useEffect(() => {
        dispatch(getHelperSelectionUserAPI());
    },[dispatch])

    return(

        <AppWrapper>
            
            <PrivateRoute>

                <div className="flex min-h-screen bg-white">
                                   
                    <SideBar />
                                
                    <div className="flex-1 flex flex-col  transition-all duration-300">
                        
                        <Banner />
                
                        <div className="flex flex-wrap gap-4 py-10 px-6">

                            <div className="py-20 w-full">

                                <div>
                                    <h2 className="text-2xl font-light mb-4  text-gray-800"><ManageHistoryIcon sx={{fontSize : 35}}/> Gestione tesserati <hr /></h2>
                                </div>
                                
                                
                                <div className="bg-sky-600 rounded-t-md  px-10 flex items-center justify-between">

                                    <div></div>
  
                                    <div className="flex items-center space-x-5 py-5 rounded-2xl">

                                        <p className="text-white">ID Tessera</p>
                                        <input value={filtrazione.id_tessera ?? ""} onChange={(e) => setFiltrazione({...filtrazione , id_tessera : Number(e.target.value)})} type="number" className="bg-white h-8 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="prestito"/>
                                        
                                        <p className="text-white">CF</p>
                                        <input value={filtrazione.codice_fiscale ?? ""} onChange={(e) => setFiltrazione({...filtrazione , codice_fiscale : e.target.value})} type="text" className="bg-white h-8 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="prestito"/>
                                        
                                        <p className="text-white">Email</p>
                                        <input value={filtrazione.email ?? ""} onChange={(e) => setFiltrazione({...filtrazione , email : e.target.value})}  type="text" className="bg-white h-9 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="prestito"/>

                                        <p className="text-white">Data nascita</p>
                                        <input value={filtrazione.data_nascita ?? ""} onChange={(e) => setFiltrazione({...filtrazione , data_nascita : e.target.value})} type="date" className="bg-white h-9 border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="prestito"/>

                                        <select value={filtrazione.utente ?? ""} onChange={(e) => setFiltrazione({...filtrazione , utente : Number(e.target.value)})} className="bg-white border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-green-400 transition-all" name="prestito" >
                                            
                                            <option value="">Operatore</option>

                                            {Array.isArray(customuser_helper_selection_items) && customuser_helper_selection_items.map(customuser => (
                                                <option key={customuser.id} value={customuser.id}>{customuser.username}</option>
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
                                                <th className="py-3 px-6 text-left">ID Tessera</th>
                                                <th className="py-3 px-6 text-left">Codice Fiscale</th>
                                                <th className="py-3 px-6 text-left">Nome</th>
                                                <th className="py-3 px-6 text-left">Cognome</th>
                                                <th className="py-3 px-6 text-left">Data di nascita</th>
                                                <th className="py-3 px-6 text-left">Telefono</th>
                                                <th className="py-3 px-6 text-left">Email</th>
                                                <th className="py-3 px-6 text-left">Indirizzo</th>
                                                <th className="py-3 px-6 text-left">Inserito da</th>
                                                <th className="py-3 px-6 text-left">Interagisci</th>
                                                
                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-gray-300">

                                            
                                            {Array.isArray(filter_tessera_items) && filter_tessera_items.map(tessere => (
                                                
                                                <tr key={tessere.id_tessera} className="hover:bg-white transition-colors">

                                                    <td className="py-3 px-6 text-black">{tessere.id_tessera}</td>
                                                    <td className="py-3 px-6 text-black">{tessere.codice_fiscale}</td>
                                                    <td className="py-3 px-6 text-black">{tessere.nome_tesserato}</td>
                                                    <td className="py-3 px-6 text-black">{tessere.cognome_tesserato}</td>
                                                    <td className="py-3 px-6 text-black">{tessere.data_nascita}</td>
                                                    <td className="py-3 px-6 text-black">{tessere.telefono}</td>
                                                    <td className="py-3 px-6 text-black">{tessere.email}</td>
                                                    <td className="py-3 px-6 text-black">{tessere.indirizzo}</td>
                                                    <td className="py-3 px-6 text-black">{tessere.utente_operatore}</td>
                                                    
                                                    <td className="py-3 px-6 text-black">
                                                    
                                                        <Link href={`details/tessere-biblioteca/${tessere.id_tessera}`}>
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