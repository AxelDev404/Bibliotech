'use client';

//-------------------STATE AND FUNCTION-------------------//

import AppWrapper from "@/components/AppWrapper";
import PrivateRoute from "@/components/PrivateRoute";
import SideBar from "@/components/SideBar";
import Banner from "@/components/Banner";
export default function GestioneLibri(){

    return(

        <AppWrapper>
            
            <PrivateRoute>

                <div className="flex min-h-screen bg-white text-black">
                                   
                    <SideBar />
                
                                
                    <div className="flex-1 flex flex-col  transition-all duration-300">
                        
                        <Banner />
                
                        <div className="flex flex-wrap gap-4 py-10 px-6">
                
                        </div>

                    </div>

                </div>     

            </PrivateRoute>

        </AppWrapper>
       
    );

}