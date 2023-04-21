import './Chat.css';

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
      return <ChatQuery
      key={index}
            style={{
              maxWidth: 400,
            }}
      ></ChatQuery>
    })}
  </div>;
}

const SubmitMessage = (props) => {
  return (
    <div className="submit-message-container">
      <input type="text" className="submit-message-input" />
      <img className='search-icon' src='./sent.png' alt='Search Icon' />
    </div>
  );
}

const ChatQuery = (props) => {
  return <div className='chat-query-container'>
    {/* <div className='chat-query-letter'>L</div> */}
    {/* <div className='chat-query-message'>dsf dsfdsf dsfdsfds</div> */}
    <ChatResponse />
  </div>;
}

const ChatResponse = (props) => {
  return <div className='chat-response'>ssdf dsfdsfdsfdfsfdsfdsfdsfdsfdsfdsf</div>
}

export const Chat = (props) => {
    return <div className='chat-box'>
       <ChatBox />
    </div>
}
