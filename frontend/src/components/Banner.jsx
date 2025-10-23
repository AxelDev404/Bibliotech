'use client';

import React, { useEffect, useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import BusinessIcon from '@mui/icons-material/Business';
import PersonIcon from '@mui/icons-material/Person';

export default function Banner(){

    const [time, setTime] = useState(
        new Date().toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" })
    );

    useEffect(() => {
        
        const t = setInterval(() => {
        
            setTime(new Date().toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit" }));
        
        }, 1000);

        return () => clearInterval(t);

    }, []);

    
    const {user} = useSelector((state) => state.auth);

    if(!user) return null;

    return(

        <div className="w-full h-20 bg-rose-950 border-b border-rose-950 shadow-md fixed">
            
            <div className="max-w-screen mx-auto px-6 h-full flex items-center justify-between">
                
                <div className="flex items-center space-x-8">
        
                    <p className="text-sm text-slate-400 flex items-center gap-1">
                        <PersonIcon sx={{ fontSize: 25 , color : 'white'}} />
                        <span className="font-semibold text-white tracking-wide">: </span>
                        <span>{user.username}</span>
                    </p>

                    
                    <p className="text-sm text-slate-400">
                        <span className="font-semibold text-white tracking-wide ">Nome:</span>
                        <span className="ml-1">{user.nome}</span>
                    </p>
                    
                    <p className="text-sm text-slate-400">
                        <span className="font-semibold text-white tracking-wide ">Cognome:</span>
                        <span className="ml-1">{user.cognome}</span>
                    </p>
                
                </div>

            
               
                            
            </div>
        
        </div>
    );

}