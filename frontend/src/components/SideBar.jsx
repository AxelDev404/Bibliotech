'use client';
//-------------------STATE AND FUNCTION-------------------//

import { useState } from "react";
import { useDispatch } from "react-redux";
import { LogOutAPI } from "@/features/Authentication/authSlice";
import { useRouter } from "next/navigation";

//-------------------ICONS-------------------//

import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';

//-------------------ICONS-------------------//

export default function SideBar(){

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const dispatch = useDispatch();
    const router = useRouter();

    const HandleLogOut = async()=> {

        await dispatch(LogOutAPI()).unwrap();
        router.replace("/");
    }

    return(

        <div className="flex h-screen">
           
            <div  className={`fixed left-0 top-0 h-screen bg-rose-950 border-r border-white shadow-lg flex flex-col transition-all duration-300 z-40 ${isSidebarOpen ? 'w-60' : 'w-16'}`}>
                
                <div className="flex items-center justify-between px-4 h-20 border-b border-white">
                    <a  className={`text-white font-semibold text-lg transition-all duration-200 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                        BIBLIOTECH
                    </a>
                    
                    <button onClick={toggleSidebar} className="text-gray-300 hover:text-white">
                        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>

            
                <div className="flex flex-col items-start gap-6 p-4 text-sm text-gray-300 flex-1 overflow-y-auto">

                    <div className="flex items-center gap-4 font-light rounded-md hover:px-1 hover:text-white hover:bg-rose-900 w-full">
                        <button onClick={() => router.replace('dashboard')}  className="w-full text-left h-12 flex items-center">
                            <DashboardIcon titleAccess='Dashboard'/>
                            {isSidebarOpen && <span className="px-3">Dashboard</span>}
                        </button>
                    </div>
                    
                    <div className="flex items-center gap-4 font-light rounded-md hover:px-1 hover:text-white hover:bg-rose-900  w-full">
                        <button onClick={() => router.replace('gestione-libri')} className="w-full text-left h-12 flex items-center">
                            <FormatListBulletedIcon titleAccess='Gestione documenti' />
                            {isSidebarOpen && <span className="px-3">Gestione libri</span>}
                        </button>
                    </div>
                    
                    <div className="flex items-center gap-4 font-light rounded-md hover:px-1 hover:text-white hover:bg-rose-900  w-full">
                        <button onClick={() => router.replace('cerca-libro')}  className="w-full text-left h-12 flex items-center">
                            <AutoStoriesIcon titleAccess='Cerca documenti'/>
                            {isSidebarOpen && <span className="px-3">Cerca libro</span>}
                        </button>
                    </div>

                    <div className="flex items-center gap-4 font-light rounded-md hover:px-1 hover:text-white hover:bg-rose-900  w-full">
                        <button  onClick={() => router.replace('carica-libro')} className="w-full text-left h-12 flex items-center">
                            <ImportContactsIcon titleAccess='carica documento' />
                            {isSidebarOpen && <span className="px-3">Carica libro</span>}
                        </button>
                    </div>

                </div>

                
                <div className="p-4 mt-auto">
                    
                    <button   className="flex items-center gap-4 font-light rounded-md px-2 h-12 w-full text-left text-white hover:text-white hover:bg-rose-900">
                        <SettingsIcon sx={{fontSize : 20}} />
                        {isSidebarOpen && <span className="px-3">Impostazioni</span>}
                    </button>
                    
                    <button  onClick={() => HandleLogOut()}  className="flex items-center gap-4 font-light rounded-md px-2 h-12 w-full text-left text-white hover:text-white hover:bg-rose-900 ">
                        <LogoutIcon  sx={{fontSize :20}}/>
                        {isSidebarOpen && <span className="px-3">Logout</span>}
                    </button>
                
                </div>
           
            </div>

            <div  className="flex-1 p-2 overflow-y-auto transition-all duration-300"  style={{ marginLeft: isSidebarOpen ? '13rem' : '2.2rem' }} ></div>
        </div>
    );

}