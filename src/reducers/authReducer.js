import { types } from '../types/types';


//Un reducer es una función pura tal y cuál se usó en el useReducer
export const authReducer = (state={}, action) => {

    switch (action.type) {
        case types.login:
            return{
                uid:action.payload.uid,
                name:action.payload.displayName,
            }
            case types.logout:
                return{

                }
    
        default:
            return state;
    }

}
