import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

export const NotesLength = () => {

    const {active} = useSelector( state => state.notes );
    const {body}=active;
    console.log("contador body")
    console.log (body);
    const bodyLength=body.length;

    return (
        <div className="notes__length">
        <div>Número de caracteres: {`${bodyLength}`}</div>
               
        </div>
    )
}
