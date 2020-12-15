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
  
  console.warning("CREANDO TEXT");
  console.log(body);
  var initialState;
  console.warning("VALIDANDO SI BODY ESTA VACIO");
  if (body=="''") {
    console.log("Esta vacio !!! ")
    initialState = EditorState.createEmpty();
  }
  else {
    console.log("No está vacio...")
    // const processedHTML = DraftPasteProcessor.processHTML(this.props.content);
    console.warning("CREA DESDE FROM BLOCK");
    const contentState = ContentState.createFromBlockArray(convertFromHTML(body));
    //move focus to the end. 
    console.warning("CREA CONTENIDO");
    initialState = EditorState.createWithContent(contentState);
    console.warning("CAMBIA FOCUS");
    initialState = EditorState.moveFocusToEnd(initialState);
  }
  const [editorState, setEditorState] = useState(() => initialState,);

  const onEditorStateChange = (state) => {
    console.warning("CAMBIA ESTADO");
    setEditorState(state)
    console.warning("DIBUJA HTML");
    var data = draftToHtml(convertToRaw(state.getCurrentContent()));
    console.warning("NUEVO BODY");
    console.warning(data);
    active.body = data;
    console.warning("ID DOCUMENTO");
    console.warning(active.id);
    dispatch(startSaveNote(active.id));
    console.log(data);
  };

   return (
    <div>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onEditorStateChange={onEditorStateChange}
      />
    </div>
  );
}
export default TextEditor;