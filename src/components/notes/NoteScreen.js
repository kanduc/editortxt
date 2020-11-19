import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';
import { NotesContador } from './NotesContador';
import { NotesFormatBar } from './NotesFormatBar';
/* import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../styles/App.css'; */

export const NoteScreen = () => {

   const dispatch = useDispatch();

    const {active:docNew} = useSelector( state => state.notes );
    /* console.log(docNew); */

   const  [values, handleInputChange, reset]= useForm(docNew);

   const {body, title,id}=values;
   const activeId = useRef( docNew.id );

   useEffect(() => {
      //ejecutar la acción si o solo sí el id es diferente
if(docNew.id!==activeId.current){
    reset(docNew);
    activeId.current=docNew.id
}

   }, [docNew, reset])


useEffect(() => {
   /* console.log(values); */
   dispatch(activeNote(values.id, {...values}));
}, [values, dispatch])

   /* const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),

    
  ); */
//dispatch(); acción asíncrona de borrar
  /* const handleDelete=()=>{
      
      dispatch(startDeleting(id))
  }
   */



    return (
        <div className="notes__main-content">
        
        <NotesAppBar />
   {/*      <NotesFormatBar /> */}
        <div className="notes__content">

        <input 
            type="text"
            placeholder="Algún título"
            className="notes__title-input"
            name="title"
            value={ title }
            onChange={handleInputChange}

        />
      
    {/*   <Editor 
     editorState={editorState}
     onEditorStateChange={setEditorState}
     wrapperClassName="wrapper-class"
  editorClassName="editor-class"
  toolbarClassName="toolbar-class"
  placeholder="Escriba Aquí"
      /> */}


        <textarea
       placeholder="Escriba Aquí"
        className="notes__textarea"
        name="body"
        value= {body}
        onChange={handleInputChange}
        >

        </textarea>

      {/*   <div className="notes__image">
            <img 
                src="https://renzlandscapes.com/wp-content/uploads/2016/02/1a-1024x768.jpg"
                alt="imagen"
            />
        </div> */}

        </div>
   
            <NotesContador />

           {/*  <button
            className="btn btn-danger"
            onClick={handleDelete}
            >
                Eliminar
            </button> */}
        </div>
    )
}
