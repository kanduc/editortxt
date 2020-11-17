import { types } from "../types/types";

const initialState={
    notes:[],
    active:null,
    saveDocument:false,
    timeout:null,
    docValue: ''
}



export const notesReducer=(state=initialState,action)=>{

switch (action.type) {

    case types.notesActive:
        return {
            ...state,
            active:{
                ...action.payload
            }
        };
    case types.notesLoad:
       /*  console.log(action.payload); */
        return{
            ...state,
            notes:[...action.payload]
        }

    case types.setNewValue:
        return {
            ...state,
            timeout:action.payload.newId,
            docValue:action.payload.value,
        };

    case types.setSavedValue:
        return {
            ...state,
            saveDocument:true
        };

    case types.finishSavedValue:
        return {
            ...state,
            saveDocument:false
        };

    default:
        return state;
}



}