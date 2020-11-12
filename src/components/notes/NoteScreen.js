import React from 'react'
import { NotesAppBar } from './NotesAppBar'
import { NotesContador } from './NotesContador'
import { NotesFormatBar } from './NotesFormatBar'
import { useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';

export const NoteScreen = () => {
    const {text_area} = useSelector( state => state.ui );

    const [values, handleInputChange] = useForm({
        text_area:'',
        text_title:''
    });

    return (
        <div className="notes__main-content">
        
        <NotesAppBar />
        <NotesFormatBar />
        <div className="notes__content">

        <form>

        <input 
            type="text"
            placeholder="Algún título"
            value={text_title}
            className="notes__title-input"
            onChange={handleInputChange}

        />

        <textarea
       placeholder="Escriba Aquí"
        className="notes__textarea"
        value={text_area}
        onChange={handleInputChange}
        >
{/*  placeholder="What happened today" */}
        </textarea>

        </form>

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
