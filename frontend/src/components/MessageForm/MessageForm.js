import React from 'react';
import './MessageForm.css';

function MessageForm({ message, setMessage, sendMessage }) {
  return (
    <form className="message-form" action="">
      <input
        className="message-form__input"
        type="text"
        placeholder="Type a message..."
        value={message}
        onChange={(evt) => setMessage(evt.target.value)}
        onKeyPress={(evt) => (evt.key === 'Enter' ? sendMessage(evt) : null)}
      />
      <button
        className="message_form__submit"
        type="submit"
        onClick={(evt) => sendMessage(evt)}
      >
        Send
      </button>
    </form>
  );
}

export default MessageForm;
