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


import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import BadgeIcon from '@mui/icons-material/Badge';
import SwipeRightIcon from '@mui/icons-material/SwipeRight';
import SwipeLeftIcon from '@mui/icons-material/SwipeLeft';
import TableChartIcon from '@mui/icons-material/TableChart';

export default function DashBoard()
{

    const { count , status , error} = useSelector((state) => state.libri); 
    const dispatch = useDispatch();

    console.log(count);

    useEffect(() => {
        dispatch(getCountStatAPI());
    },[dispatch])


    return(

        <AppWrapper>
            <PrivateRoute>
                
                <div className="flex min-h-screen bg-white">
                   
                    <SideBar />

                
                    <div className="flex-1 flex flex-col  transition-all duration-300">
                        
                        <Banner/>
                        

                        <div className=" flex-wrap items-center justify-center gap-4 py-10 px-6">
                                
                            <div className=" py-20 w-full"></div>
                                
                            <h2 className="text-2xl  mb-4 px-4 text-gray-800 font-light">Dati in evidenza</h2>

                            <div className="bg-gray-200 py-8 rounded-2xl">
                               
                                <div className="max-w-screen-l mx-auto flex flex-row gap-8 items-center justify-center overflow-x-auto px-4">
                                    
                                    <div className="w-72 h-32 bg-white text-black rounded-lg flex flex-col items-center justify-center flex-shrink-0 shadow-md hover:shadow-lg hover:bg-rose-900 hover:text-white  transition-shadow">
                                        <AutoStoriesIcon sx={{ fontSize: 50 }} />
                                        <p className="text-3xl font-thin">{count}</p>
                                        <p className="text-sm mt-1">Libri caricati</p>
                                    </div>

                                    <div className="w-72 h-32 bg-white text-black rounded-lg flex flex-col items-center justify-center flex-shrink-0 shadow-md hover:shadow-lg hover:bg-rose-900 hover:text-white  transition-shadow">
                                        <TableChartIcon sx={{ fontSize: 50 }} />
                                        <p className="text-3xl font-thin">N</p>
                                        <p className="text-sm mt-1">Postazioni totali</p>
                                    </div>

                                    <div className="w-72 h-32 bg-white text-black rounded-lg flex flex-col items-center justify-center flex-shrink-0 shadow-md hover:shadow-lg hover:bg-rose-900 hover:text-white  transition-shadow">
                                        <BadgeIcon sx={{ fontSize: 50 }} />
                                        <p className="text-3xl font-thin">N</p>
                                        <p className="text-sm mt-1">Tessere attive</p>
                                    </div>

                                    <div className="w-72 h-32 bg-white text-black rounded-lg flex flex-col items-center justify-center flex-shrink-0 shadow-md hover:shadow-lg hover:bg-rose-900 hover:text-white  transition-shadow">
                                        <SwipeRightIcon sx={{ fontSize: 50 }} />
                                        <p className="text-3xl font-thin">N</p>
                                        <p className="text-sm mt-1">Presiti in corso</p>
                                    </div>

                                    <div className="w-72 h-32 bg-white text-black rounded-lg flex flex-col items-center justify-center flex-shrink-0 shadow-md hover:shadow-lg hover:bg-rose-900 hover:text-white  transition-shadow">
                                        <SwipeLeftIcon sx={{ fontSize: 50 }} />
                                        <p className="text-3xl font-thin">N</p>
                                        <p className="text-sm mt-1">Presiti saldati</p>
                                    </div>

                                </div>
                            </div>

                            <div className="flex gap-6 py-40">
                                <div className="flex-1 min-w-[400px]">
                                    <StatisticBookTable />
                                </div>
                                <div className="flex-1 min-w-[400px]">
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