import React from 'react';
import {
    Link,
  } from "react-router-dom";

export const LoginScreen = () => {
    return (
        <>
        <h3 className="auth__title">Iniciar Sesión</h3>
        <form>
        <input 
            type="text"
            name="email"
            placeholder="Email"
            autoComplete="off"
            className="auth__input"
        />
        <input
        type="password"
        name="password"
        placeholder="Tu contraseña"
        className="auth__input"
         />
        <button 
        className="btn btn-primary btn-block"
        type="submit"
        >Iniciar Sesión</button>
    
       <div className="auth__social-networks">
           <p>Iniciar sesión con redes sociales</p>
           <div 
    className="google-btn"
>
    <div className="google-icon-wrapper">
        <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
    </div>
    <p className="btn-text">
        <b>
Inicia sesión con Google</b>
    </p>
</div>
       </div>

        <Link to="/auth/register"
        className="link">
        Crear una nueva cuenta
        </Link>


        </form>
            
        </>
    )
}
