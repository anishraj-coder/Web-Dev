import React from "react";

function DropDown({ title, option, onChange, value }) {
  return (
    <div className="select font-g-medium">
      <label className="text-zinc-400 mr-2 capitalize">{title}:</label>
      <select 
        onChange={onChange} 
        value={value} 
        className="bg-gray-800 text-white p-2 rounded"
      >
        {option.map((o, idx) => (
          <option key={idx} value={o}>
            {o.toUpperCase()}
          </option>
        ))}
      </select>
    </div>
  );
}

export default DropDown;