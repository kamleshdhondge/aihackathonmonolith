import React, { createContext, useState } from 'react';

const emptyFunction = () => {};

const defaultValue = {
    activePage: '',
    setActivePage: emptyFunction,
    chatBotmessages: [],
    setChatBotmessages: emptyFunction,
    sendQuery: false,
    setSendQuery: emptyFunction
}

const useAPI = () => {
    const [activePage, setActivePage] = useState('');
    const [chatBotmessages, setChatBotmessages] = useState([]);
    const [sendQuery, setSendQuery] = useState(false);

    return {
        activePage,
        setActivePage,
        chatBotmessages,
        setChatBotmessages,
        sendQuery,
        setSendQuery
    }
}

export const AppContext = createContext(defaultValue);


export const AppContextProvider = (props) => {
    return <AppContext.Provider value={useAPI()}>{props.children}</AppContext.Provider>
}