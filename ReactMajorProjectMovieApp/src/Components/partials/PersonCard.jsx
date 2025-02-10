import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function PersonCard({ data }) {
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  const adjustFontSize = () => {
    const title = titleRef.current;
    const container = containerRef.current;
    if (!title || !container) return;

    title.style.fontSize = "1.5rem";
    const containerWidth = container.offsetWidth;
    const textWidth = title.scrollWidth;

    if (textWidth > containerWidth) {
      const ratio = containerWidth / textWidth;
      const newSize = Math.max(Math.floor(24 * ratio), 14);
      title.style.fontSize = `${newSize}px`;
    }
  };

  useEffect(() => {
    adjustFontSize();
    window.addEventListener("resize", adjustFontSize);
    return () => window.removeEventListener("resize", adjustFontSize);
  }, [data]);

  // Fallback image for persons
  const fallbackImage =
    "https://via.placeholder.com/300x450?text=No+Image+Available";

  return (
    <div className="h-[45vh] w-[17vw] border-3 border-zinc-700 shadow-2xl rounded-2xl overflow-hidden relative group shrink-0">
      {/* Gradient Overlay */}
      <div
        style={{
          background: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5),rgba(0,0,0,0.7))`,
        }}
        className="shadowed w-full h-full absolute translate-y-[50%] group-hover:translate-y-0 transition-all duration-200"
      ></div>

      {/* Person Image */}
      <img
        className="h-full w-full object-center object-cover"
        src={
          data.profile_path
            ? `https://image.tmdb.org/t/p/original/${data.profile_path}`
            : fallbackImage
        }
        alt={data.name}
        onError={(e) => {
          e.target.src = fallbackImage;
        }}
      />

      {/* Person Details */}
      <div className="details absolute top-[90%] text-white p-3 w-full h-1/2 flex flex-col justify-end group-hover:top-[50%] transition-all duration-200">
        {/* Name */}
        <div ref={containerRef} className="w-full">
          <h1
            ref={titleRef}
            className="font-g-bold leading-tight"
            style={{
              wordWrap: "break-word",
              transition: "font-size 0.2s ease",
            }}
          >
            {data.name}
          </h1>
        </div>

        {/* Department/Role */}
        <p className="text-sm text-zinc-200 font-g-medium mt-2">
          {data.known_for_department || "Actor/Actress"}
        </p>

        {/* Known For */}
        {data.known_for && data.known_for.length > 0 && (
          <div className="mt-2 mb-4">
            <p className="text-xs text-zinc-300">Known for:</p>
            <p className="text-sm text-zinc-200">
              {data.known_for
                .slice(0, 2)
                .map((item) => item.title || item.name)
                .join(", ")}
            </p>
          </div>
        )}

        {/* Popularity */}
        {data.popularity && (
          <p className="text-xs text-zinc-300 mb-3">
            Popularity: {Math.round(data.popularity)}
          </p>
        )}

        {/* View Profile Button */}
        <Link
          to={`/person/${data.id}`}
          className="bg-[#6556CD] text-white text-sm w-fit font-g-regular py-2 px-5 rounded-full hover:bg-[#6556CD]"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
}

export default PersonCard;
