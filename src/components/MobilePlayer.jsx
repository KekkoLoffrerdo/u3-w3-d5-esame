import React from "react";

export default function MobilePlayer() {
  return (
    <div className="fixed-bottom d-md-none px-2 pb-2" style={{ zIndex: 1050 }}>
      <div className="mobile-mini-player d-flex align-items-center justify-content-between px-3 py-2 shadow-lg">
        <div className="d-flex align-items-center gap-3">
          <div className="player-img-placeholder d-flex align-items-center justify-content-center">
            <i className="bi bi-music-note text-secondary fs-4"></i>
          </div>
          <div className="d-flex flex-column">
            <span className="text-white small fw-semibold">Brano non in riproduzione</span>
          </div>
        </div>

        <div className="d-flex align-items-center gap-4 text-secondary fs-3">
          <i className="bi bi-play-fill"></i>
          <i className="bi bi-fast-forward-fill"></i>
        </div>
      </div>
    </div>
  );
}
