import React from 'react';
import './InfoBar.css';
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

function InfoBar({ room }) {
  return (
    <div className="info-bar">
      <div className="info-bar__left-container">
        <img src={onlineIcon} alt="online icon" className="info-bar__online-icon" />
        <h3 className="info-bar__title">{room}</h3>
      </div>
      <div className="info-bar__right-container">
        <a href="/">
          <img src={closeIcon} alt="close icon" className="info-bar__close-icon" />
        </a>
      </div>
    </div>
  );
}

export default InfoBar;
