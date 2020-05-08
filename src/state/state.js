import React, { createContext, useContext, useReducer } from 'react';
import { FoodBagProvider } from '../context/BagContext';

export const StateContext = createContext();

const initialState = {
    loading: false,
    errors: null,
    orderPlaced: false,
    orderPlacedInfo: null
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'loadingTrue':
            return {
                ...state,
                loading: true,
            };
        case 'loadingFalse':
            return {
                ...state,
                loading: false,
            };
        case 'orderPlaced':
            return {
                ...state,
                orderPlacedInfo: action.payload,
                orderPlaced: true,
            };
        default:
            return state;
    }
};

export const StateProvider = ({ children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        <FoodBagProvider>{children}</FoodBagProvider>
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
