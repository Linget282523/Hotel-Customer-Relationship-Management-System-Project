import React from 'react';
import './ModalCheckOut.css';

const ModalCheckOut = ({active, setActive}) => {
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>

      </div>
    </div>
  )
}

export default ModalCheckOut;
