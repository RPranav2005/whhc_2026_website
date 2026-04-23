import React from 'react';

const SDCard = ({ photo, name }) => {
  return (
    <div style={{
      width: '240px',
      margin: '16px',
      display: 'inline-block',
      verticalAlign: 'top',
    }}>
      <img
        src={photo}
        alt={name || 'Member'}
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
        }}
      />
    </div>
  );
};

export default SDCard;
