import React, { useState } from 'react';
import ItemList from './ItemList';

function PlayerList() {
  const [players, setPlayers] = useState([]);
  const [removedItems, setRemovedItems] = useState([]);

  const addPlayer = () => {
    const input = document.getElementById('player-input').value;
    if (input.trim() !== '') {
      setPlayers([...players, input]);
      document.getElementById('player-input').value = '';
    } else {
      alert('Please enter a player name');
    }
  };

  const deleteLastPlayer = () => {
    if (players.length > 0) {
      const removedPlayer = players[players.length - 1];
      setPlayers(players.slice(0, -1));
      setRemovedItems([...removedItems, removedPlayer]);
    } else {
      alert('No players to delete');
    }
  };

  return (
    <div>
      <input type='text' id='player-input' placeholder='Enter player name' />
      <button onClick={addPlayer}>Add Player</button>
      <ItemList items={players} onDelete={deleteLastPlayer} />

      { }
      <h3>Removed Players:</h3>
      <ul>
        {removedItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default PlayerList;