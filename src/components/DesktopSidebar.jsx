// import appleLogo from "../assets/logos/apple.svg";

export default function DesktopSidebar() {
  return (
    <div className="d-flex flex-column h-100 p-3" style={{ backgroundColor: "#1c1c1c" }}>
      <div className="text-white mb-4 ps-2">
        <h4 className="fw-bold d-flex align-items-center gap-2 mb-0">
          <i className="bi bi-apple fs-3"></i> Music
        </h4>
      </div>

      <div className="px-1 mb-4">
        <div className="input-group rounded-2 border border-secondary border-opacity-25" style={{ backgroundColor: "#2c2c2e" }}>
          <span className="input-group-text bg-transparent border-0 text-secondary pe-1">
            <i className="bi bi-search" style={{ fontSize: "13px" }}></i>
          </span>
          <input
            type="text"
            className="form-control bg-transparent border-0 text-white shadow-none ps-2 py-1"
            placeholder="Cerca"
            style={{ fontSize: "14px" }}
          />
        </div>
      </div>

      <nav className="d-flex flex-column gap-1">
        <a href="#" className="sidebar-link">
          <i className="bi bi-house-door me-3"></i> Home
        </a>

        <a href="#" className="sidebar-link active">
          <i className="bi bi-grid me-3"></i> Novità
        </a>
        <a href="#" className="sidebar-link">
          <i className="bi bi-broadcast me-3"></i> Radio
        </a>
      </nav>
    </div>
  );
}
