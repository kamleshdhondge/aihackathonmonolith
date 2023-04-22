import axios from 'axios';
import { useContext, useEffect } from 'react';
import {AppContext} from '../state/AppContext';
import {ChatResponse} from '../components/Chat'

export const useChatQuery = async () => {
    const {chatBotmessages, setChatBotmessages, sendQuery, setSendQuery} = useContext(AppContext);

    useEffect(() => {
      if(sendQuery) {
        axios.post('http://localhost:3003/document/doc1/chat')
        .then(response => {
          setChatBotmessages([...chatBotmessages, <ChatResponse message={response.data.message} />]);
        })
        .catch(() => {});
        
        setSendQuery(false);
      }
    }, [sendQuery]);
}