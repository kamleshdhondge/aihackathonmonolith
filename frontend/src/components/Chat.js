import './Chat.css';
import {AppContext} from '../state/AppContext';
import { useEffect } from 'react'
import { useContext } from 'react';
import {useChatQuery} from '../hooks/useChatQuery'

const ChatBox = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Messages />
      <SubmitMessage />
    </div>
  );
};

const HelloMessage = () => {
  return <div>
    <div>Hello John!</div>
    <div>I’m your lawyer assistant, how can I help?</div>
  </div>
}

const Messages = (props) => {
  const {chatBotmessages, setChatBotmessages} = useContext(AppContext)

  useEffect(() => {
    setChatBotmessages([...chatBotmessages, <HelloMessage />]);
    console.log('Hello');
  }, []);

  return <div className="messages-box">
    {chatBotmessages}
  </div>;
}

const SubmitMessage = (props) => {
  const {chatBotmessages, setChatBotmessages, setSendQuery} = useContext(AppContext);
  useChatQuery();

  const onSearch = (e) => {
    setChatBotmessages([...chatBotmessages, <ChatQuery query="Something" />]);
    setSendQuery(true);
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      onSearch(event);
    }
  };
  
  return (
    <div className="submit-message-container">
      <input type="text" className="submit-message-input" onKeyDown={handleKeyDown}/>
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

const ChatResponse = (props) => {
  const {message} = props;
  return <div className='chat-response'>{message}</div>
}

export const Chat = (props) => {
    return <div className='chat-box'>
       <ChatBox />
    </div>
}
