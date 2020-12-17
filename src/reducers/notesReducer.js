import { types } from "../types/types";

const initialState={
    notes:[],
    active:null
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
            notes:[...state.notes,action.payload]
        }
    case types.notesLoad:
       /*  console.log(action.payload); */
        return{
            ...state,
            notes:[...action.payload]
        };

    case types.notesUpdated:
        console.log("notesUpdated");
        console.log(action.payload.id)
        console.log(action.payload.note)
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


    default:
        return state;
}



}