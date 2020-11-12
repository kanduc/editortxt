import {types} from '../types/types';


const initalState={
    loading:false,
    msgError:null,
    text_area:"",
}

export const uiReducer = (state=initalState, action) => {
  
    switch (action.type) {
        case types.uiSetError:
            return{
                ...state,
                msgError:action.payload,
            };
        case types.uiRemoveError:
                return{
                    ...state,
                    msgError:null,
                };

        case types.uiStartLoading:
            return{
                ...state,
                loading:true,
               
            };
        case types.uiFinishLoading:
            return{
                ...state,
                loading:false,
               
            };

        case types.uiClearText:
                return{
                    ...state,
                    text_area:"",
                };
    
        default:
            return state;
    }





}
