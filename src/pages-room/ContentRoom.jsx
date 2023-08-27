import React from 'react';
import './../Room.css';

const ContentRoom = () => {
  return (
    <div className='content'>
      <div>
        <h1>Room </h1>
        <p>Type: {rooms.type}</p>
        <p>Occupancy: {rooms.occupancy}</p>
        <p>Price: {rooms.price}</p>
        <p>Quest: {rooms.quest}</p>
      </div>
      <div className='content-buttons'>
        <div>
          <button>Check in</button>
          <button>Check out</button>
        </div>
        <div className='reatures'>
          <h4>Features: </h4>
          <div>
            <ul>
              <li>{rooms.features}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContentRoom;
