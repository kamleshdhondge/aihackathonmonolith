import React, { createContext } from 'react';

const defaultValue = {

}

const useAPI = () => {

}

export const AppContext = createContext(defaultValue);


export const AppContextProvider = (props) => {
    return <AppContext.Provider value={useAPI()}>{props.children}</AppContext.Provider>
}