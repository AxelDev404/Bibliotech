
import { useDispatch , useSelector } from "react-redux";
import { useEffect } from "react";

import Link from "next/link";

import { getLastTessereBibliotecaInsertAPI } from "@/features/TessereBiblioteca/tessere_bibliotecaSlice";

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function StatisticCustomerTable(){

    const {
        
        data : {last_tessere_biblioteca_insert}

    } = useSelector((state) => state.tessere_bibilioteca);
    const dispactch = useDispatch();

    useEffect(() => {
        dispactch(getLastTessereBibliotecaInsertAPI());
    },[dispactch]);


    return(

        <div className="p-6">
            <h2 className="text-2xl font-light mb-4 text-gray-800">Ultime tessere registrate</h2>

            <div className="overflow-x-auto">

                <table className="w-full bg-gray-200 shadow-md rounded-lg overflow-hidden">

                    <thead className="bg-rose-900 text-white">
                        <tr>
                            <th className="py-3 px-6 text-left">ID</th>
                            <th className="py-3 px-6 text-left">Nome</th>
                            <th className="py-3 px-6 text-left">Cognome</th>
                            <th className="py-3 px-6 text-left">Codice Fiscale</th>
                            <th className="py-3 px-6 text-left">Dettagli</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">

                        {Array.isArray(last_tessere_biblioteca_insert) && last_tessere_biblioteca_insert.map(lts_tessere_biblioteca => (
                            
                            <tr key={lts_tessere_biblioteca.id_tessera} className="hover:bg-white transition-colors">

                                <td className="py-3 px-6 text-black">{lts_tessere_biblioteca.id_tessera}</td>
                                <td className="py-3 px-6 text-black">{lts_tessere_biblioteca.nome_tesserato}</td>
                                <td className="py-3 px-6 text-black">{lts_tessere_biblioteca.cognome_tesserato}</td>
                                <td className="py-3 px-6 text-black">{lts_tessere_biblioteca.codice_fiscale}</td>
                                
                                <td className="py-3 px-6 text-black">
                                    
                                    <Link href={`details/tessere-biblioteca/${Number(lts_tessere_biblioteca.id_tessera)}`}>
                                        <DoubleArrowIcon/>
                                    </Link>
                                    
                                </td>

                            </tr>
                            
                        ))}

                    
                    </tbody>

                </table>
            </div>
        </div>



    );

}