import React, { useState , useRef , useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { startSaveNote } from '../actions/notes';
import ReactQuill from "react-quill";
import EditorToolBar, { modules, formats } from "./EditorToolBar";
import "react-quill/dist/quill.snow.css";
//import "./styles.css";
import '../styles/styles.css';

const TextEditorR = () =>{
	//const [state, setState] = React.useState({ value: null });
	const dispatch = useDispatch();
	/*const {active} = useSelector( state => state.notes);
	const {title, body} = active*/
	const {active:docNew} = useSelector( state => state.notes );
   	//const  [stateEditor, handleTextChange]= textForm(docNew);
   	const {body,id}=docNew;
	console.log("body text "+body);
	//const [stateEditor, setStateEditor] = useState(() =>  ,);
	const [stateEditor, setStateEditor] = useState({ value: body });
	console.log("inicio text")
	console.log(stateEditor.value)
	const activeId = useRef( docNew.id );
	
	/*
	useEffect(() => {
	   //ejecutar la acción si o solo sí el id es diferente
		if(docNew.id!==activeId.current){
		    setStateEditor({ value : docNew.body });
		    activeId.current=docNew.id
		}
	}, [docNew])*/
	
	const handleChange = text => {
		console.log("handleChange");
		console.log(text)
		docNew.body = text;
	    setStateEditor({ value : text });
	    dispatch(startSaveNote(docNew));
	};
	return (
	    <div className="text-editor">
	      <EditorToolBar />
	      <ReactQuill
	        theme="snow"
	        value={stateEditor.value}
	        onChange={handleChange}
	        placeholder={"Escriba algo..."}
	        modules={modules}
	        formats={formats}
	      />
	    </div>
	 );
};
export default TextEditorR;
