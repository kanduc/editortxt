//RUTAS PRINCIPALES, LO GENERE PARA PODER MOVERME SI UTILIZAR LA ETIQUETA <A HREF> DEL HTML YA QUE GENERA UNA PEQUEÑA CARGA

import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
        <Router>
      <div>
       
        <Switch>
        {/* 
        
        ESTO NOS VA A SERVIR PARA LA PROTECCION DE LAS RUTAS, YA QUE SI EXISTE UN USUARIO QUE NO ESTÁ LOGUEADO
        NO LO VA A DEJAR ENTRAR, POR EL MOMENTO SI PODRÁ PERO GENERAREMOS ESE BLOQUEO
         */}
          <Route path="/auth" component={ AuthRouter }/>
          <Route exact path="/" component={ JournalScreen }/>
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </Router>
    )
}
