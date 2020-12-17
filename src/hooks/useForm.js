import { useState } from "react";



export const useForm = ( initialState = {} ) => {
	console.log("useform")
	console.log("initialState: ")
	console.log(initialState)
	const [ values, setValues ] = useState(initialState)
	/* const [editorState, setEditorState] = useState(
    	() => EditorState.createEmpty(),
  	); */

	const reset=( newFormState = initialState )=>{
		console.log("reset")
    	setValues(newFormState);
	}
	const handleInputChange=({target})=>{
		console.log("handleInputChange")
		console.log("target.name"+target.name);
		console.log("target.value"+target.value);
    	setValues({
        	...values,
        	[target.name]:target.value // target.name= name : value , para email sería target.name=email :value
    	})
	}

	console.log("values "+values)
	return [values, handleInputChange, reset];
}
