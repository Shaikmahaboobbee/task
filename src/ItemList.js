import React from 'react';
function ItemList({ items, onDelete }) {
  return (
    <div>
      <h2>Favorite Players</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {items.length > 0 && (
        <button onClick={onDelete} style={{ marginTop: '10px' }}>
          Delete Last Player
        </button>
      )}
    </div>
  );
}
export default ItemList;