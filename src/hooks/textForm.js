import { useState } from "react";



export const textForm = ( initialState = {} ) => {
	console.log("textForm")
	console.log("initialState: ")
	console.log(initialState)
  const [stateEditor, setStateEditor] = useState(initialState);
  const handleTextChange=({text})=>{
		console.log("handleTextChange");
		console.log(text);
    console.log(text.value);
		setStateEditor({
      ...stateEditor
    });
	}
  
  /*
	const handleInputChange=({target})=>{
		console.log("handleInputChange")
		console.log("target.name"+target.name);
		console.log("target.value"+target.value);
    	setValues({
        	...values,
        	[target.name]:target.value // target.name= name : value , para email sería target.name=email :value
    	})
	}*/

	console.log("stateEditor "+stateEditor)
	return [stateEditor, handleTextChange];
}
