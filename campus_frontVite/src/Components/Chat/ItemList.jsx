// src/components/ItemList.jsx
import React from "react";

const ItemList = ({ items }) => {
  return (
    <div style={{ border: "1px solid gray", padding: "10px", width: "200px" }}>
      <h3>Items</h3>
      {items.map((item, idx) => (
        <div key={idx} style={{ padding: "5px", borderBottom: "1px solid #ccc" }}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default ItemList;