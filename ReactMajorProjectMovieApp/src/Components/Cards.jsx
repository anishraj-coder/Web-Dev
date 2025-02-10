import React from "react";
import { Link } from "react-router-dom";
import Card from "./Card";
import PersonCard from "./partials/PersonCard";

function Cards({ data, type = 'movie' }) {
  // Data validation
  if (!data || !Array.isArray(data)) {
    return <div className="text-white">No data available</div>;
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-wrap gap-5">
      {type === 'movie' || type === 'tv' ? (
        // Movie or TV show cards
        data.map((item, i) => (
          item ? <Card key={`${item.id || i}`} data={item} /> : null
        ))
      ) : (
        // Person cards
        data.map((item, i) => (
          item ? <PersonCard key={`${item.id || i}`} data={item} /> : null
        ))
      )}
    </div>
  );
}

export default Cards;