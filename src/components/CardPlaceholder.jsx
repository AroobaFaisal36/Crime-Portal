import React from "react";

export default function CardPlaceholder({ img, title, desc, id, onFav }) {
  return (
    <div className="card bg-white rounded shadow p-4 text-center">
      <img src={img} alt={title} className="w-20 mx-auto mb-3"/>
      <h3 className="text-red-600 font-bold">{title}</h3>
      <p>{desc}</p>
      <button onClick={() => onFav && onFav({ id: `card-${id}`, title, img })} className="mt-2 bg-red-600 text-white px-3 py-1 rounded">
        Add to Favorites
      </button>
    </div>
  );
}

