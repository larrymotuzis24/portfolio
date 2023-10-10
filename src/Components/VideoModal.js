import React from "react";

const VideoModal = ({ isOpen, videoUrl, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal relative">
        {/* Close button and video container */}
        <div className="flex flex-col items-center">
          <button
            className="text-white text-sm mb-2 uppercase bold"
            onClick={onClose}
          >
            Close
          </button>
          <div className="flex justify-center">
            <video className="self-center" controls width="50%" src={videoUrl} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoModal;