import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import queryString from 'query-string';
import io from 'socket.io-client';

import './Chat.css';

let socket;

const connectionOptions = {
  'force new connection': true,
  reconnectionAttempts: 'Infinity',
  timeout: 10000,
  transports: ['websocket'],
};

const Chat = () => {
  const path = useHistory();
  const ENDPOINT = 'localhost:3001';

  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(userName, roomName);

  useEffect(() => {
    const { name, room } = queryString.parse(path.location.search);

    socket = io(ENDPOINT, connectionOptions);

    setUserName(name);
    setRoomName(room);

    socket.emit('join', { name, room }, () => {
      console.log('sss');
    });

    return () => {
      socket.emit('disconnecting');
      socket.off();
    };
  }, [ENDPOINT, path.location.search]);

  useEffect(() => {
    socket.on('message', (m) => {
      setMessages([...messages, m]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  console.log(message, messages);

  return (
    <div className="chat">
      <div className="chat__inner-container">
        <input
          value={message}
          onChange={(e) => { setMessage(e.target.value); }}
          onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
        />
      </div>
    </div>
  );
};

export default Chat;
