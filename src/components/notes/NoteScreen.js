import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';
import { NotesContador } from './NotesContador';
import { NotesFormatBar } from './NotesFormatBar';
import { NotesLength } from './NotesLength';
import Loader from 'react-loader-spinner';
import TextEditorR from '../../menu/TextEditorR';
import Mark from "mark.js";
import $ from 'jquery';

/* import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../../styles/App.css'; */

export const NoteScreen = () => {

  const dispatch = useDispatch();

  const {active:docNew} = useSelector( state => state.notes );
    /* console.log(docNew); */

 
 

  const  [values, handleInputChange, reset]= useForm(docNew);

  const {body, title,id,titleStart}=values;
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

  const [test, setTest] = useState(false);
  const keyPressHandler = (e) => {
    setTest(true);
  }
  const keyUpHandler=(e)=>{
      setTimeout(()=>{
        setTest(false);
        /* console.log(test); */
      },2000)
  }
/*  const searchBody=()=>{
    var input, filter;
    input = document.getElementById("myInput");
    input.addEventListener('keyup',()=>{

    })
  console.log(input)
   
    
    
  } */

 /*  let input = document.getElementById("myInput");
 
  const keySearch=()=>{
    let filter=input.value.toUpperCase();
    const extractContent=(s)=> {
      var span = document.createElement('span');
      span.innerHTML = s;
      return span.textContent || span.innerText;
    };
    let bodyCustom=extractContent(body);
    console.log(typeof bodyCustom);
    const n=bodyCustom.indexOf(filter)
    console.log(n);
  }

  useEffect(() => {
    input = document.getElementById("myInput")
    input.addEventListener('keyup', keySearch);

    return () => {
      input.removeEventListener('keyup', keySearch);

    };
  },[input]); */




  

  useEffect(() => {
    
    window.addEventListener('keydown', keyPressHandler);
    window.addEventListener('keyup', keyUpHandler);
    return () => {
      window.removeEventListener('keydown', keyPressHandler);
      window.removeEventListener('keyup', keyUpHandler);
    };
  },[docNew]);

/* 
  const [state, setState]=useState({
    text: body,
      inputValue: ""
  });
const {inputValue}=state
  const changeInput=(e)=>{
    let value = e.target.value;
    let txt = document.getElementById("myText").innerText;
    let idx = txt.indexOf(value);
    console.log(idx);
    setState({inputValue: value})
   if(idx >= 0) {
      let newText = [txt.substring(0, idx), <p style={{fontSize:'20'}}>{txt.substring(idx, idx + value.length)}</p>, txt.substring(idx + value.length)];
      setState({inputValue: value, text: newText});
    }else {
      setState({inputValue: value, text: body});
    }  
  } */

  /* var options = {
    "separateWordSearch": false,
    "diacritics": false,
    "acrossElements": true,
    "iframes": true,
    //"iframesTimeout": 5000,
    "debug": true,
};
 */


  // Cache DOM elements
/*  var keywordInput = document.querySelector("input[name='keyword']");

 const performMark=()=>{
  var markInstance = new Mark(document.querySelector(".notesEditor"));
    // Read the keyword
    var keyword = keywordInput.value;
    if(keyword==='undefined'){
      return false;
    }
  
    // Determine selected options
    
  
    // Remove previous marked elements and mark
    // the new keyword inside the context
    markInstance.unmark({
      iframes: true,
      done: function () {
        markInstance.mark(keyword);
      }
    });
  };
  
  // Listen to input and option changes
  useEffect(() => {
    var keywordInput = document.querySelector("input[name='keyword']");
    keywordInput.addEventListener("input", performMark);
    return () => {
      keywordInput.removeEventListener('input', performMark);

    };
  }, [])
 */



 
 
 



  /*  const [state, setState]=useState({
    search:'',
  });

  const {search}=state;

  const performance=()=>{

      let markInstance = new Mark(document.querySelector(".notes_content"));
     markInstance.unmark({
      iframes: true,
        done: () => {
          markInstance.mark(search);
        }
      });
    
  }



 const handleSearch = ({target}) => {
  
   const {value}=target;
   console.log(value);
    setState({ search: value }, performance);
  };
 
  useEffect(() => {
    var keywordInput = document.querySelector("input[name='keyword']");
    keywordInput.addEventListener("input", performance);
    return () => {
      keywordInput.removeEventListener('input', performance);

    };
  }, []) */




  
  return (
    <div className="notes__main-content">      
      <NotesAppBar />
        <div className="notes__content">
          <div className="notes__appbar">
            <input 
              type="text"
              placeholder={titleStart}
              className="notes__title-input"
              autoComplete="off"
              name="title"
              value={ title }
              onChange={handleInputChange}
            />
            <div className="spinner-container">
              {(test)?
              <div className="spinner">
                <p className="spinner-msg">Guardando</p>
                <Loader
                 type="ThreeDots"
                 color="#ddd"
                 height={8}
                 width={30}
                 timeout={5000}/>
              </div>
              :
              <div className="spinner">
                <p className="spinner-msg">Guardado</p>
              </div>
              }
            </div>  
          <div className="notes__search-box">
         {/*  <span>
            R
          </span> */}
          <input type="text" 
          id="myInput"  
          placeholder="Buscar..." 
          title="Escriba algo para buscar" 
          name="keyword"
     
         ></input>
          </div>  
      </div>
      <div 
       className="notes__content"
       
       >
       {/* <div
         placeholder="Escriba Aquí"
          className="notes__textarea1"
         
       >
        Hola mundo 123
       </div> */}
      {/*  <div className="wrap">
       <code></code>
        <textarea
        
          placeholder="Escriba Aquí"
          className="notes__textarea"
          name="body"
         id="text12"
          value= {body}
          onChange={handleInputChange}
        >
      
        </textarea>
        </div> */}
        <div 
      
       
       >
       
        <TextEditorR 
 
        />
        </div>
      </div>
    </div>
    <NotesContador />
    <NotesLength />
  </div>
)}