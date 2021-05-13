import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { roomNames } from '../../config/roomsNames';
import './Join.css';

function Join() {
  const [userName, setUserName] = useState('');
  const [roomName, setRoomName] = useState('');

  const path = useHistory();

  const randomizeRoomName = (wordsArr) => wordsArr[Math.ceil(Math.random() * wordsArr.length - 1)];

  const handleChange = (event) => {
    setUserName(event.target.value);
    setRoomName(randomizeRoomName(roomNames));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    path.push(`/chat?name=${userName}&room=${roomName}`);
  };

  return (
    <div className="join">
      <h1 className="join__header">Welcome to chat!</h1>
      <p className="join__subtitle">Please enter your name</p>
      <form className="join__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="join__input"
          onChange={handleChange}
          required
        />
        <span className="join__input-wrapper" />
        <input type="submit" className="join__submit" value="Join" disabled={!userName} />
      </form>
    </div>
  );
}

export default Join;
