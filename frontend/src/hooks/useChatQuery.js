import axios from 'axios';
import { useContext, useEffect } from 'react';
import {AppContext} from '../state/AppContext';

export const useChatQuery = async () => {
    const {chatBotmessages, setChatBotmessages, sendQuery, setSendQuery} = useContext(AppContext);

    useEffect(() => {
      if(sendQuery) {
            try {
                const response = axios.get('https://akhmedelnemer-fluffy-zebra-4xvj54x44qqcpwp-3003.preview.app.github.dev/document/doc1/chat')
                .then(response => {
                  console.log(response);
                })
                .catch(error => {
                  console.log(error);
                });
                
                console.log("Ajhmed")
                setChatBotmessages([...chatBotmessages, <div>Akhmed</div>]);
              } catch (error) {
                console.error(error);
              }

            setSendQuery(false);
        }
    }, [sendQuery]);

   
}