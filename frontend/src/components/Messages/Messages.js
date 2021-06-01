import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from '../Message/Message';

import './Messages.css';

function Messages({ messages }) {
  return (
    <ScrollToBottom className="messages">
      {messages.map((message, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index}>
          {' '}
          <Message />
        </div>
      ))}
    </ScrollToBottom>
  );
}

export default Messages;
