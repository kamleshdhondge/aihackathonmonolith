import axios from 'axios';
import { useContext, useEffect } from 'react';
import {AppContext} from '../state/AppContext';
import {ChatResponse} from '../components/Chat'

export const useChatQuery = async () => {
    const {chatBotmessages, setChatBotmessages, sendQuery, setSendQuery, sendQueryMessage} = useContext(AppContext);

    useEffect(() => {
      if(sendQuery) {
        axios.post('http://localhost:3003/document/doc1/chat', {
          message: sendQueryMessage
        })
        .then(response => {
          setChatBotmessages([<ChatResponse message={response.data.message} />, ...chatBotmessages]);
        })
        .catch(() => {});
        
        setSendQuery(false);
      }
    }, [sendQuery]);
}