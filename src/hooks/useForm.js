import { useState } from "react";
/*import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
*/


export const useForm = ( initialState = {} ) => {
  
const [ values, setValues ] = useState(initialState)
/* const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  ); */

const reset=( newFormState = initialState )=>{
	console.log("hooks");
	console.log("reset")
    setValues(newFormState);
}



const handleInputChange=({target})=>{
	console.log("hooks");
	console.log("handleInputChange")
    setValues({
        ...values,
        [target.name]:target.value // target.name= name : value , para email sería target.name=email :value
    })
}

return [values, handleInputChange, reset];
}
