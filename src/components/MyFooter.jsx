import React from "react";
import { Container } from "react-bootstrap";

export default function MyFooter() {
  return (
    <footer className="mt-5 pt-4 pb-5 border-top border-secondary border-opacity-10">
      <Container fluid className="px-0">
        <div className="d-flex align-items-center gap-2 mb-3 text-secondary" style={{ fontSize: "13px" }}>
          <span className="text-white fw-semibold cursor-pointer">Italia</span>
          <span className="opacity-25">|</span>
          <span className="hover-white cursor-pointer">English (UK)</span>
        </div>

        <p className="mb-2 text-secondary" style={{ fontSize: "12px" }}>
          Copyright © 2024 <span className="text-white fw-semibold">Apple Inc.</span> Tutti i diritti riservati.
        </p>

        <div className="d-flex flex-wrap align-items-center gap-x-2 gap-y-1 text-secondary footer-links" style={{ fontSize: "12px" }}>
          <span className="hover-white cursor-pointer">Condizioni dei servizi internet</span>
          <span className="opacity-25 d-none d-sm-inline">|</span>

          <span className="hover-white cursor-pointer">Apple Music e privacy</span>
          <span className="opacity-25 d-none d-sm-inline">|</span>

          <span className="hover-white cursor-pointer">Avviso sui cookie</span>
          <span className="opacity-25 d-none d-sm-inline">|</span>

          <span className="hover-white cursor-pointer">Supporto</span>
          <span className="opacity-25 d-none d-sm-inline">|</span>

          <span className="hover-white cursor-pointer">Feedback</span>
        </div>
      </Container>
    </footer>
  );
}
