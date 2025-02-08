import React from "react";

function DropDown({ title, option, onClick }) {
  return (
    <div className="select font-g-medium">
      <select onChange={onClick} defaultValue="0" name="format" id="format">
        <option value="0" disabled>
          {title||'filter'}
        </option>
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
