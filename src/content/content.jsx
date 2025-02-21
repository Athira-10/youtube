import React from "react";

const YouTubeRow = ({ videoIds }) => {
  return (
    <div className="flex overflow-x-auto space-x-4 p-4">
      {videoIds.map((id, index) => (
        <iframe
          key={index}
          width="320"
          height="180"
          src={`https://www.youtube.com/embed/${id}`}
          title={`YouTube video ${index + 1}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="rounded-lg shadow-lg"
        ></iframe>
      ))}
    </div>
  );
};

// Example Usage:
const App = () => {
  const videos = ["dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E"]; // Replace with actual video IDs

  return (
    <div className="p-8">
      <h2 className="text-xl font-semibold mb-4">YouTube Videos</h2>
      <YouTubeRow videoIds={videos} />
    </div>
  );
};

export default App;
