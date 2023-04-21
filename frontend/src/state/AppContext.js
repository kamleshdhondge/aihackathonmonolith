import React, { createContext, useState } from 'react';

const emptyFunction = () => {};

const defaultValue = {
    activePage: '',
    setActivePage: emptyFunction
}

const useAPI = () => {
    const [activePage, setActivePage] = useState('');

    return {
        activePage,
        setActivePage
    }
}

export const AppContext = createContext(defaultValue);


export const AppContextProvider = (props) => {
    return <AppContext.Provider value={useAPI()}>{props.children}</AppContext.Provider>
}