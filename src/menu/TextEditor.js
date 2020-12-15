import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw,ContentState, convertFromHTML} from "draft-js";
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../actions/notes';


import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";

const TextEditor = () =>{
  const dispatch = useDispatch();
  const {active} = useSelector( state => state.notes);
  const {title, body} = active
  
  console.log("CREANDO TEXT");
  console.log("ACTIVO");
  console.log(active);
  console.log(body);
  var initialState;
  console.log("VALIDANDO SI BODY ESTA VACIO");
  if (body==="''") {
    console.log("Esta vacio !!! ")
    initialState = EditorState.createEmpty();
  }
  else {
    console.log("No está vacio...")
    // const processedHTML = DraftPasteProcessor.processHTML(this.props.content);
    console.log("CREA DESDE FROM BLOCK");
    const contentState = ContentState.createFromBlockArray(convertFromHTML(body));
    //move focus to the end. 
    console.log("CREA CONTENIDO");
    initialState = EditorState.createWithContent(contentState);
    console.log("CAMBIA FOCUS");
    initialState = EditorState.moveFocusToEnd(initialState);
  }
  const [editorState, setEditorState] = useState(() => initialState,);

  console.log("initialState");
  console.log(initialState);
  
  const handleEditorChange = (state) => {
    /*console.log("TextEditor");
    console.log("onEditorStateChange");
    console.log("CAMBIA ESTADO");
    console.log("state");
    console.log(state);
    setEditorState(state)
    console.log("DIBUJA HTML");
    var data = draftToHtml(convertToRaw(state.getCurrentContent()));
    console.log("NUEVO BODY");
    console.log(data);
    active.body = data;
    console.log("ID DOCUMENTO");
    console.log(active);
    console.log(active.id);
    console.log("dispatch savenote");
    dispatch(startSaveNote(active));
    console.log(data);*/
  };

   return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
      />
    </div>
  );
}
export { TextEditor };