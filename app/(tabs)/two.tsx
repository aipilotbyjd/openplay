import React from "react";

const ExploreSection = () => {
  return (
    <div className="bg-gray-100 py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4">Explore</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Songs */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Songs</h3>
            {/* Render your songs here */}
            <ul>
              <li className="text-gray-800 mb-1">Song 1</li>
              <li className="text-gray-800 mb-1">Song 2</li>
              <li className="text-gray-800 mb-1">Song 3</li>
            </ul>
          </div>

          {/* Playlists */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Playlists</h3>
            {/* Render your playlists here */}
            <ul>
              <li className="text-gray-800 mb-1">Playlist 1</li>
              <li className="text-gray-800 mb-1">Playlist 2</li>
              <li className="text-gray-800 mb-1">Playlist 3</li>
            </ul>
          </div>

          {/* Channels */}
          <div className="bg-white rounded-lg p-4">
            <h3 className="text-lg font-bold mb-2">Channels</h3>
            {/* Render your channels here */}
            <ul>
              <li className="text-gray-800 mb-1">Channel 1</li>
              <li className="text-gray-800 mb-1">Channel 2</li>
              <li className="text-gray-800 mb-1">Channel 3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreSection;
