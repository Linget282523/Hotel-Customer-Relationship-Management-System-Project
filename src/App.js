
import './App.sass';
import json from 'firebase-data.json';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAccounts, fetchRooms } from "./actions"; // Создайте actions соответственно


function App() {
  const dispatch = useDispatch();
  const { accounts, rooms, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchAccounts());
    dispatch(fetchRooms());
  }, [dispatch]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="App">
      <h1>Accounts:</h1>
      <ul>
        {accounts.map((account) => (
          <li key={account.id}>{account.name}</li>
        ))}
      </ul>

      <h1>Rooms:</h1>
      <ul>
        {rooms.map((room) => (
          <li key={room.id}>{room.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
