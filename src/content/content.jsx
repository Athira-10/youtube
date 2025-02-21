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


const App = () => {
  const videos = ["dQw4w9WgXcQ", "3JZ_D3ELwOQ", "L_jWHffIx5E"]; 

  return (
    <div className="mt-24 p-6"> 
      <h2 className="text-2xl font-bold mb-6"></h2> 
      <YouTubeRow videoIds={videos} />
    </div>
  );
};

export default App;
