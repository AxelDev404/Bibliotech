"use client";
import Link from "next/link";

import { useSelector , useDispatch } from "react-redux";
import { useEffect } from "react";

import { getLastInsertBookStatAPI } from "@/features/Libri/libriSlice";

import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

export default function StatisticBookTable(){

    const {
        
        data : {last_insert_book} ,

        requests : {
            last_insert_book : {last_insert_book_status , last_insert_book_error}
        }
        
    } = useSelector((state) => state.libri);
    
    const dispactch = useDispatch();

    useEffect(() => {
        dispactch(getLastInsertBookStatAPI());
    },[dispactch]);

    return(

        <div className="p-6">
            <h2 className="text-2xl font-light mb-4 text-gray-800">Ultimi libri inseriti</h2>
            <div className="overflow-x-auto">
                <table className="w-full bg-gray-200 shadow-md rounded-lg overflow-hidden">
                <thead className="bg-rose-900 text-white">
                    <tr>
                        <th className="py-3 px-6 text-left">ISBN</th>
                        <th className="py-3 px-6 text-left">Titolo</th>
                        <th className="py-3 px-6 text-left">Data d'uscita</th>
                        <th className="py-3 px-6 text-left">editore</th>
                        <th className="py-3 px-6 text-left">Dettagli</th>
                        
                    </tr>
                </thead>

                <tbody className="divide-y divide-gray-300">

                    {Array.isArray(last_insert_book) && last_insert_book.map(lts_book => (

                        <tr key={lts_book.isbn} className="hover:bg-white transition-colors">

                            <td className="py-3 px-6 text-black">{lts_book.isbn}</td>
                            <td className="py-3 px-6 text-black">{lts_book.titolo}</td>
                            <td className="py-3 px-6 text-black">{lts_book.data_uscita}</td>
                            <td className="py-3 px-6 text-black">{lts_book.editore}</td>
                            
                            <td className="py-3 px-6 text-black">
                                <Link href={`details/libri/${lts_book.isbn}`}>
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