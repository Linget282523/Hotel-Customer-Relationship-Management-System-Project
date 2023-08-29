import React, { useState } from 'react';
import './../Room.css';
import ModalCheckIn from '../components/ModalCheckIn';
import ModalCheckOut from '../components/ModalCheckOut';
import './../firebase';


const ContentRoom = () => {
  const [modalCheckInActive, setModalCheckInActive] = useState(true);
  const [modalCheckOutActive, setModalCheckOutActive] = useState(true);

  return (
    <div className='content'>
      <div>
        <h1>Room {rooms.number}</h1>
        <p>Type: {rooms.type}</p>
        <p>Occupancy: {rooms.occupancy}</p>
        <p>Price: {rooms.price}</p>
        <p>Quest: {rooms.quest}</p>
      </div>
      <div className='content-buttons'>
        <div>
          <button onClick={() => setModalCheckInActive(true)}>Check in</button>
          <button onClick={() => setModalCheckOutActive(true)}>Check out</button>
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
      <ModalCheckIn active={modalCheckInActive} setActive= {setModalCheckInActive}>

      </ModalCheckIn>
      <ModalCheckOut active={modalCheckOutActive} setActive= {setModalCheckOutActive}>

      </ModalCheckOut>
    </div>
  )
}

export default ContentRoom;
