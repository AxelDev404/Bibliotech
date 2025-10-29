'use client';
import SideBar from "@/components/SideBar";
import Banner from "@/components/Banner";

import AppWrapper from "@/components/AppWrapper"
import PrivateRoute from "@/components/PrivateRoute"

import StatisticBookTable from "@/components/table/StatisticBookTable";
import StatisticCustomerTable from "@/components/table/StatisticCustomerTable";

import { useSelector , useDispatch } from "react-redux";
import { useState , useEffect } from "react";

import { getCountStatAPI } from "@/features/Libri/libriSlice";
import { getCountStatPostazioniAPI } from "@/features/Postazioni/postazioniSlice";
import { getCountStatTessereBibliotecaAPI } from "@/features/TessereBiblioteca/tessere_bibliotecaSlice";
import { getCountStatPresititAttiviAPI , getCountStatPresititiSaldatiAPI } from "@/features/Prestiti/prestitiSlice";

import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BadgeIcon from '@mui/icons-material/Badge';
import SwipeRightIcon from '@mui/icons-material/SwipeRight';
import SwipeLeftIcon from '@mui/icons-material/SwipeLeft';
import TableChartIcon from '@mui/icons-material/TableChart';

export default function DashBoard()
{

    const { last_insert_book , count , status , error} = useSelector((state) => state.libri); 



    const { 
        
        data : {count_postazioni},

        requests : {
            count_postazioni : { statusCount, errorCount }
        }


    } = useSelector((state) => state.postazioni);



    const { last_tessere_biblioteca_insert , count_tessere_biblioteca , status : statusCountTessere , error : errorCountTessere} = useSelector((state) => state.tessere_bibilioteca)
    const { count_presiti_attivi , count_prestiti_saldati , status : statusCountPrestiti , error : errorCountPrestiti } = useSelector((state) => state.prestiti); 

    const dispatch = useDispatch();

    console.log(count);

    useEffect(() => {
        dispatch(getCountStatAPI());
        dispatch(getCountStatPostazioniAPI());
        dispatch(getCountStatTessereBibliotecaAPI());
        dispatch(getCountStatPresititAttiviAPI());
        dispatch(getCountStatPresititiSaldatiAPI());
    },[dispatch])


    return(

        <AppWrapper>
            
            <PrivateRoute>
                
                <div className="flex flex-col md:flex-row min-h-screen bg-white">
                   
                    <SideBar />

                    <div className="flex-1 flex flex-col transition-all duration-300">
                        
                        <Banner/>
                        
                        <div className="flex flex-col items-center justify-center gap-6 py-10 px-4 sm:px-6 md:px-10">
                                
                            <div className="py-10 w-full"></div>
                                
                            <h2 className="text-xl sm:text-2xl mb-4 px-2 sm:px-4 text-gray-800 font-light self-start">Dati in evidenza</h2>

                            <div className="bg-gray-100 py-6 sm:py-8 rounded-2xl w-full overflow-x-auto">
                               
                                <div className="max-w-screen-xl mx-auto flex flex-row flex-wrap gap-6 sm:gap-8 items-center justify-center px-4">
                                    
                                    <div className="w-60 sm:w-72 h-28 sm:h-32 bg-white text-black rounded-lg flex flex-col items-center justify-center flex-shrink-0 shadow-md hover:shadow-lg hover:bg-rose-900 hover:text-white transition-all duration-300">
                                        <AutoStoriesIcon sx={{ fontSize: 50 }} />
                                        <p className="text-2xl sm:text-3xl font-thin">{count}</p>
                                        <p className="text-xs sm:text-sm mt-1">Libri caricati</p>
                                    </div>

                                    <div className="w-60 sm:w-72 h-28 sm:h-32 bg-white text-black rounded-lg flex flex-col items-center justify-center flex-shrink-0 shadow-md hover:shadow-lg hover:bg-rose-900 hover:text-white transition-all duration-300">
                                        <TableChartIcon sx={{ fontSize: 50 }} />
                                        <p className="text-2xl sm:text-3xl font-thin">{count_postazioni}</p>
                                        <p className="text-xs sm:text-sm mt-1">Postazioni totali</p>
                                    </div>

                                    <div className="w-60 sm:w-72 h-28 sm:h-32 bg-white text-black rounded-lg flex flex-col items-center justify-center flex-shrink-0 shadow-md hover:shadow-lg hover:bg-rose-900 hover:text-white transition-all duration-300">
                                        <BadgeIcon sx={{ fontSize: 50 }} />
                                        <p className="text-2xl sm:text-3xl font-thin">{count_tessere_biblioteca}</p>
                                        <p className="text-xs sm:text-sm mt-1">Tessere attive</p>
                                    </div>

                                    <div className="w-60 sm:w-72 h-28 sm:h-32 bg-white text-black rounded-lg flex flex-col items-center justify-center flex-shrink-0 shadow-md hover:shadow-lg hover:bg-rose-900 hover:text-white transition-all duration-300">
                                        <SwipeRightIcon sx={{ fontSize: 50 }} />
                                        <p className="text-2xl sm:text-3xl font-thin">{count_presiti_attivi}</p>
                                        <p className="text-xs sm:text-sm mt-1">Presiti in corso</p>
                                    </div>

                                    <div className="w-60 sm:w-72 h-28 sm:h-32 bg-white text-black rounded-lg flex flex-col items-center justify-center flex-shrink-0 shadow-md hover:shadow-lg hover:bg-rose-900 hover:text-white transition-all duration-300">
                                        <SwipeLeftIcon sx={{ fontSize: 50 }} />
                                        <p className="text-2xl sm:text-3xl font-thin">{count_prestiti_saldati}</p>
                                        <p className="text-xs sm:text-sm mt-1">Presiti saldati</p>
                                    </div>

                                </div>
                            </div>

                            <div className="flex flex-col lg:flex-row gap-6 py-16 w-full">
                                <div className="flex-1 min-w-[300px]">
                                    <StatisticBookTable />
                                </div>
                                <div className="flex-1 min-w-[300px]">
                                    <StatisticCustomerTable />
                                </div>
                            </div>
                            
                        </div>
 
                    </div>

                </div>     
                
            </PrivateRoute>

        </AppWrapper>

    )
}
