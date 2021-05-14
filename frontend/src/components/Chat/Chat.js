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

  useEffect(() => {
    const { name, room } = queryString.parse(path.location.search);

    socket = io(ENDPOINT, connectionOptions);

    setUserName(name);
    setRoomName(room);

    socket.emit('join', { name, room });

    return () => {
      socket.emit('disconnecting');
      socket.off();
    };
  }, [ENDPOINT, path.location.search]);

  return (
    <div>

      <h1>
        Hi
        {userName}
      </h1>
      <p>
        You are in room
        {roomName}
      </p>

    </div>
  );
};

export default Chat;
