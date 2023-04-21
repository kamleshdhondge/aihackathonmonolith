import './Chat.css';

import Paper from '@mui/material/Paper';

const ChatBox = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Messages />
      <SubmitMessage />
    </div>
  );
};

const Messages = (props) => {
  return <div className="messages-box">
    {[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1].map((i, index) => {
      return <Paper
      key={index}
            style={{
              maxWidth: 400,
            }}
      >hah ahhah h</Paper>
    })}
  </div>;
}

const SubmitMessage = (props) => {
  return (
    <div className="submit-message-container">
      <input type="text" className="submit-message-input" />
    </div>
  );
}

export const Chat = (props) => {
    return <div className='chat-box'>
       <ChatBox />
    </div>
}
