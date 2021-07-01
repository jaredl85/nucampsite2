import { createStore } from 'redux';
import { Reducer, initialState } from './reducer';

expore const ConfigureStore = () => {
    const store = createStore(
        Reducer,
        initialState
    );

    return store;
};