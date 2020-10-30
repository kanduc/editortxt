import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {

    const hora=new Date().getHours();
    


    return (
       <aside className="journal__sidebar">
           <div className="journal__sidebar-navbar">
           <h3>
           {
                (hora<18)?(<i className="far fa-sun"></i>):(<i className="far fa-moon"></i>)


           }
                
               <span> Usuario</span>
           </h3>
           <button className="btn">
               Cerrar Sesión
           </button>

           </div>
           <div className="journal__new-entry">
           <i className="far fa-plus-square fa-5x"></i>
           <p className="mt-5">
               Crear documento
           </p>

           </div>
           <JournalEntries />
       </aside>
    )
}
