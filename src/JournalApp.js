import React from 'react';
import {Provider} from 'react-redux';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

export const JournalApp = () => {
    //El provider es como un high order component está en lo más alto de nuestra aplicación
    return (
        <Provider store={ store }>
        <AppRouter />
        </Provider>
    )
}
