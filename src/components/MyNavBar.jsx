// import musicLogo from "../assets/logos/music.svg";

import { Navbar, Container, Button, Form } from "react-bootstrap";

export default function MyNavBar() {
  return (
    <Navbar className="am-navbar border-bottom border-dark py-1 px-3" style={{ backgroundColor: "#2b2b2b", height: "54px" }}>
      <Container fluid className="d-flex align-items-center justify-content-between">
        <div className="d-none d-md-flex align-items-center w-100">
          <div className="d-flex align-items-center gap-3 text-secondary" style={{ flex: 1 }}>
            <i className="bi bi-shuffle cursor-pointer"></i>
            <i className="bi bi-skip-start-fill cursor-pointer"></i>
            <i className="bi bi-play-fill fs-4 text-white cursor-pointer"></i>
            <i className="bi bi-skip-end-fill cursor-pointer"></i>
            <i className="bi bi-arrow-repeat cursor-pointer"></i>
          </div>

          <div className="d-flex justify-content-center" style={{ flex: 2 }}>
            <div
              className="d-flex align-items-center justify-content-center rounded-2"
              style={{ backgroundColor: "#3e3e40", width: "100%", maxWidth: "450px", height: "26px" }}
            >
              <i className="bi bi-apple text-white opacity-50" style={{ fontSize: "14px" }}></i>
            </div>
          </div>

          <div className="d-flex align-items-center justify-content-end gap-3" style={{ flex: 1 }}>
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-volume-up text-secondary" style={{ fontSize: "14px" }}></i>
              <Form.Range style={{ width: "80px" }} />
            </div>
            <Button
              size="sm"
              className="border-0 px-3 d-flex align-items-center gap-1"
              style={{ backgroundColor: "#fa2d48", fontWeight: "600", fontSize: "13px", borderRadius: "5px" }}
            >
              <i className="bi bi-person-fill"></i> Accedi
            </Button>
          </div>
        </div>

        <div className="d-flex d-md-none align-items-center justify-content-between w-100">
          <i className="bi bi-list text-danger fs-2"></i>
          <i className="bi bi-apple text-white fs-3"></i>
          <span className="text-danger fw-bold">Accedi</span>
        </div>
      </Container>
    </Navbar>
  );
}
