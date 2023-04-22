import './Chat.css';
import {AppContext} from '../state/AppContext';
import { useEffect, useState, useRef } from 'react'
import { useContext } from 'react';
import {useChatQuery} from '../hooks/useChatQuery'

const ChatBox = () => {
  const ref = useRef(null);
  const {sendQuery} = useContext(AppContext);

  // useEffect(() => {
  //   if(sendQuery) {
  //     document.getElementById('akhmed').scrollIntoView( 5000);
  //     console.log('sometinh')
  //   }
  // }, [sendQuery]);

  return (
    <div  style={{ display: "flex", flexDirection: "column" }}>
      <Messages />
      <SubmitMessage />
    </div>
  );
};

const HelloMessage = () => {
  return <div className='hello-message'>
    <div className='hello-section-bold'><strong>Hello John!</strong></div>
    <div>I’m your lawyer assistant, how can I help?</div>
  </div>
}

const Messages = (props) => {
  const {chatBotmessages, setChatBotmessages} = useContext(AppContext)

  useEffect(() => {
    setChatBotmessages([<HelloMessage />, ...chatBotmessages]);
    console.log('Hello');
  }, []);

  return <div className="messages-box">
    {chatBotmessages}
  </div>;
}

const SubmitMessage = (props) => {
  const {chatBotmessages, setChatBotmessages, setSendQuery, setSendQueryMessage} = useContext(AppContext);
  const [message, setMessage] = useState('');

  useChatQuery();

  const onSearch = () => {
    setChatBotmessages([<ChatQuery query={message} />, ...chatBotmessages]);
    setSendQuery(true);
    setSendQueryMessage(message);
    setMessage('');
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch();
    }
  };
  
  return (
    <div className="submit-message-container">
      <input type="text" className="submit-message-input" onKeyDown={handleKeyDown} onChange={(e)=> {setMessage(e.target.value)}}value={message}/>
      <img className='search-icon' src='./sent.png' alt='Search Icon' onClick={onSearch} />
    </div>
  );
}

const ChatQuery = (props) => {
  const {query} = props;

  return <div className='chat-query-container'>
      <div className='chat-query-letter'>L</div> 
      <div className='chat-query-message'>{query}</div>
    </div>;
}

export const ChatResponse = (props) => {
  const {message} = props;
  return <div className='message-block'>
    <div className='chat-response-container'><div className='chat-response'>{message}</div></div>
  </div>
}

export const Chat = (props) => {
    return <div className='chat-box'>
        <ChatBox />
    </div>
}
