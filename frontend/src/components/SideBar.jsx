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
import BadgeIcon from '@mui/icons-material/Badge';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';

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
           
            <div  className={`fixed left-0 top-0 h-screen bg-gradient-to-b from-blue-800 via-blue-950 to-blue-900  border-white shadow-lg flex flex-col transition-all duration-300 z-40 ${isSidebarOpen ? 'w-60' : 'w-16'}`}>
                
                <div className="flex items-center justify-between px-4 h-20 border-b border-white">
                    <a  className={`text-white font-semibold text-lg transition-all duration-200 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 hidden'}`}>
                        BIBLIOTECH
                    </a>
                    
                    <button onClick={toggleSidebar} className="text-gray-300 hover:text-white">
                        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
                    </button>
                </div>

            
                <div className="flex flex-col items-start gap-6 p-4 text-sm text-gray-300 flex-1 overflow-y-auto">

                    <div className="flex items-center gap-4 font-light rounded-md hover:px-1 hover:text-black hover:bg-white w-full">
                        <button onClick={() => router.replace('/dashboard')}  className="w-full text-left h-12 flex items-center">
                            <DashboardIcon titleAccess='Dashboard'/>
                            {isSidebarOpen && <span className="px-3">Dashboard</span>}
                        </button>
                    </div>
                    
                    <div className="flex items-center gap-4 font-light rounded-md hover:px-1 hover:text-black hover:bg-white  w-full">
                        <button onClick={() => router.replace('/gestione-libri')} className="w-full text-left h-12 flex items-center">
                            <FormatListBulletedIcon titleAccess='Gestione libri' />
                            {isSidebarOpen && <span className="px-3">Gestione libri</span>}
                        </button>
                    </div>
                    
                 

                    <div className="flex items-center gap-4 font-light rounded-md hover:px-1 hover:text-black hover:bg-white w-full">
                        <button onClick={() => router.replace('/cerca-tesserato')}  className="w-full text-left h-12 flex items-center">
                            <PeopleAltIcon titleAccess='Cerca tesserati'/>
                            {isSidebarOpen && <span className="px-3">Gestione tesserati</span>}
                        </button>
                    </div>

                    <div className="flex items-center gap-4 font-light rounded-md hover:px-1 hover:text-black hover:bg-white  w-full">
                        <button  onClick={() => router.replace('/carica-tessera')} className="w-full text-left h-12 flex items-center">
                            <BadgeIcon titleAccess='carica tesserato' />
                            {isSidebarOpen && <span className="px-3">Registra tesserato</span>}
                        </button>
                    </div>

                    <div className="flex items-center gap-4 font-light rounded-md hover:px-1 hover:text-black hover:bg-white  w-full">
                        <button  onClick={() => router.replace('/carica-libro')} className="w-full text-left h-12 flex items-center">
                            <ImportContactsIcon titleAccess='carica libro' />
                            {isSidebarOpen && <span className="px-3">Carica libro</span>}
                        </button>
                    </div>

                </div>

                
                <div className="p-4 mt-auto">
                    
                    <button   className="flex items-center gap-4 font-light rounded-md px-2 h-12 w-full text-left text-white hover:text-black hover:bg-white">
                        <SettingsIcon sx={{fontSize : 20}} />
                        {isSidebarOpen && <span className="px-3">Impostazioni</span>}
                    </button>
                    
                    <button  onClick={() => HandleLogOut()}  className="flex items-center gap-4 font-light rounded-md px-2 h-12 w-full text-left text-white hover:text-black hover:bg-white ">
                        <LogoutIcon  sx={{fontSize :20}}/>
                        {isSidebarOpen && <span className="px-3">Logout</span>}
                    </button>
                
                </div>
           
            </div>

            <div  className="flex-1 p-2 overflow-y-auto transition-all duration-300"  style={{ marginLeft: isSidebarOpen ? '13rem' : '2.2rem' }} ></div>
        </div>
    );

}