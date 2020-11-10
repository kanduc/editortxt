import { types } from "../types/types";
import { facebookAuthProvider, firebase,db, googleAuthProvider, twitterAuthProvider } from '../firebase/firebase-config';

//Registro de cuenta
export const startRegisterAccount = (fullName, email, password) =>{
    return(dispatch) =>{
        firebase.auth().createUserWithEmailAndPassword(email, password).then(({user}) =>{
                console.log("Se registro correctamente la cuenta.."+ email)
                //grabación del nombre de la cuenta.
                let userRef = db.collection('users').doc(user.uid);
                userRef.set({
                    email: email,
                    name:  fullName,
                    state: true
                  });
                  
            }).catch((err) =>{
                console.log(err)
            })
    }
}
//Crearemos una acción asíncrona
//recibimos como párametro el email and password
//NJAIMES20201109
export const startLoginEmailPassword=( email, password )=>{

    //retorna un callback, que tiene como párametro el dispatch que viene de thunk
return (dispatch)=>{
   /* setTimeout(() => {
        dispatch(login(8952,'Pablo Reta'));
    }, 3500);*/
    firebase.auth().signInWithEmailAndPassword(
      email, password
    )
    .then(({user})=>{
        dispatch(login(user.uid,user.displayName))
        console.log("onsuccess => "+ user.uid)
        console.log(`Bienvenido, estimado ${user.displayName}, con el correo:${user.email}`)
    })
    .catch( (errr) => {
        console.log(errr["message"])
    })
    
//Es una acción asíncrona, porque esperará 3 segundos y medio para mostrar la info
//en otras palabras primero resuelve la acción asíncrona, y luego busca en el reducer quien realiza la acción síncrona
  }
}
export const startGoogleLogin=()=>{
return (dispatch)=>{ //importante que en una acción asíncrona devuelva el dispatch del thunk
    firebase.auth().signInWithPopup(googleAuthProvider) // muestra el popup devuelve una promesa
    /* .then(userCred=>{
        console.log(userCred);
    }) */
    .then(({user})=>{
        dispatch(login(user.uid,user.displayName))
        console.log(`Bienvenido, estimado ${user.displayName}, con el correo:${user.email}`)
    })
}

}


export const startTwitterLogin=()=>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup(twitterAuthProvider)
        .then(({user})=>{
            
            dispatch(login(user.uid,user.displayName))
            console.log(`Bienvenido, estimado ${user.displayName}, con el correo:${user.email}`)
            
        })
    }
}



export const startFacebookLogin=()=>{
    return (dispatch)=>{
        firebase.auth().signInWithPopup(facebookAuthProvider)
        .then(({user})=>{
            dispatch(login(user.uid,user.displayName))
            console.log(`Bienvenido, estimado ${user.displayName}, con el correo:${user.email}`)
        })
    }
}




//LA ACCION ES UNA SIMPLE FUNCION QUE TIENE COMO PARAMETROS EL UID, Y DISPLAYNAME
//los parentesis reemplaza al return

export const login = (uid, displayName) => ({
        type:types.login,
        payload:{
            uid,
            displayName,
        }
}

)