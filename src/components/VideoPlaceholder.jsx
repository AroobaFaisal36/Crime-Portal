import React from "react";

export default function VideoPlaceholder() {
  return (
    <div className="max-w-3xl mx-auto mt-6">
      <h2 className="text-xl font-bold mb-3">Community Safety Video</h2>
      <div className="w-full aspect-video bg-black rounded shadow">
        <video controls className="w-full h-full">
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support HTML5 video. Watch on YouTube:
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className="text-blue-500"> YouTube</a>
        </video>
      </div>
    </div>
  );
}
