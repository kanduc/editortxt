import React from 'react';
import { useDispatch } from 'react-redux';
import { startLogout } from '../../actions/auth';
import { JournalEntries } from './JournalEntries';

export const Sidebar = () => {

    const hora=new Date().getHours();

    const dispatch = useDispatch();

    const handleLogout=()=>{
/* console.log(`click`); */
dispatch(startLogout());
    }
    


    return (
       <aside className="journal__sidebar">
           <div className="journal__sidebar-navbar">
           <h3>
           {
                (hora<18)?(<i className="far fa-sun"></i>):(<i className="far fa-moon"></i>)


           }
                
               <span> Usuario Logueado</span>
           </h3>
           <button 
           className="btn"
           onClick={handleLogout}
           >
               Cerrar Sesión
           </button>

           </div>
           <div className="journal__new-entry">
           <i className="fas fa-plus-square fa-5x"></i>
           <p className="mt-5">
               Crear documento
           </p>

           </div>
           <JournalEntries />
       </aside>
    )
}
