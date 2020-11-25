import { types } from "../types/types";

const initialState={
    notes:[],
    active:null,
    saveDocument:false,
    timeout:null,
    docValue:''
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

    case types.notesAddNew:
        return{
            ...state,
            notes:[action.payload, ...state.notes]
        }
    case types.notesLoad:
       /*  console.log(action.payload); */
        return{
            ...state,
            notes:[...action.payload]
        };

    case types.notesUpdated:
        return {
            ...state,
            notes: state.notes.map(
                note => note.id ===action.payload.id
                ? action.payload.note
                : note
            )
        };

    case types.notesDelete:
            return {
                ...state,
                active:null,
                notes:state.notes.filter(note=> note.id !== action.payload)
            };
    case types.notesLogoutCleaning:
        return{
            ...state,
            active:null,
            notes:[],
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