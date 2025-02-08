import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function Cards({ data }) {
  // Data validation
  if (!data || !Array.isArray(data)) {
    return <div className="text-white">No data available</div>;
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-wrap gap-5">
      {data.map((item, i) => (
        // Only render if item exists
        item ? <Card key={`${item.id || i}`} data={item} /> : null
      ))}
    </div>
  );
}

export default Cards;