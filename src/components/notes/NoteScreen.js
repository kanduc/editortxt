import React from 'react'
import { NotesAppBar } from './NotesAppBar'
import { NotesContador } from './NotesContador'
import { NotesFormatBar } from './NotesFormatBar'

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
        
        <NotesAppBar />
        <NotesFormatBar />
        <div className="notes__content">

        <input 
            type="text"
            placeholder="Algún título"
            className="notes__title-input"

        />

        <textarea
       placeholder="Escriba Aquí"
        className="notes__textarea"
        >
{/*  placeholder="What happened today" */}
        </textarea>

      {/*   <div className="notes__image">
            <img 
                src="https://renzlandscapes.com/wp-content/uploads/2016/02/1a-1024x768.jpg"
                alt="imagen"
            />
        </div> */}

        </div>
            <NotesContador />
        </div>
    )
}
