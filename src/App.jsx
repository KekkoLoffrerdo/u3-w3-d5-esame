import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import MyNavBar from "./components/MyNavBar";
import DesktopSidebar from "./components/DesktopSidebar";
import MainContent from "./components/MainContent";
import MobilePlayer from "./components/MobilePlayer";

function App() {
  return (
    <div className="container-fluid p-0 bg-dark text-white min-vh-100">
      <div className="d-flex">
        <aside className="d-none d-md-block sticky-top vh-100 border-end border-secondary" style={{ width: "260px", backgroundColor: "#1c1c1c" }}>
          <DesktopSidebar />
        </aside>

        <div className="flex-grow-1 w-100">
          <header className="sticky-top bg-dark border-bottom border-secondary" style={{ zIndex: 1020 }}>
            <MyNavBar />
          </header>

          <main className="p-3 p-md-5">
            <MainContent />
          </main>
        </div>
      </div>
      <MobilePlayer />
    </div>
  );
}

export default App;
