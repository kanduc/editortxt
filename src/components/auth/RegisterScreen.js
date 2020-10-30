import React from 'react';
import {
    Link,
  } from "react-router-dom";

export const RegisterScreen = () => {
    return (
        <>
        <h3 className="auth__title">Regístrese</h3>
        <form>
        <input 
            type="text"
            name="name"
            placeholder="Tu Nombre y Apellido"
            autoComplete="off"
            className="auth__input"
        />



        <input 
            type="text"
            name="email"
            placeholder="Tu email"
            autoComplete="off"
            className="auth__input"
        />
        <input
        type="password"
        name="password"
        placeholder="Tu contraseña"
        className="auth__input"
         />

         <input
        type="password"
        name="password2"
        placeholder="Confirmar contraseña"
        className="auth__input"
         />
        <button 
        className="btn btn-primary btn-block mb-5"
        type="submit"
        >Registrarse</button>
      
      
        <Link to="/auth/login"
        className="link">
        ¿Usted ya está registrado?
        </Link>


        </form>
            
        </>
    )
}
