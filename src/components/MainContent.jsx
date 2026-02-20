import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchReleases } from "../redux/releasesSlice";

import { toggleFavorite } from "../redux/favoritesSlice";

import { Row, Col, Spinner } from "react-bootstrap";
import MyFooter from "./MyFooter";

import chill from "../assets/images/1a.png";
import musicaUno from "../assets/images/1b.png";
import ep1 from "../assets/images/2a.png";
import ep2 from "../assets/images/2b.png";
import ep3 from "../assets/images/2c.png";
import ep4 from "../assets/images/2d.png";
import ep5 from "../assets/images/2e.png";

export default function MainContent() {
  const dispatch = useDispatch();

  const { releases: songs, loading, error } = useSelector((state) => state.releases);

  const savedSongs = useSelector((state) => state.favorites.list);

  const radioStations = [
    { title: "Rilassati, al resto pensiamo noi. Ascolta Apple Music Chill", img: chill },
    { title: "Ecco la nuova casa della musica latina", img: musicaUno },
  ];

  const radioEpisodes = [
    { img: ep1, title: "The Zane Lowe Show", sub: "Apple Music 1" },
    { img: ep2, title: "Rap Life Radio", sub: "Apple Music 1" },
    { img: ep3, title: "Chart FM", sub: "Apple Music 1" },
    { img: ep4, title: "Today's Hits", sub: "Apple Music 1" },
    { img: ep5, title: "La Formula", sub: "Apple Music 1" },
  ];

  useEffect(() => {
    dispatch(fetchReleases());
  }, [dispatch]);

  const displaySongs = songs.slice(0, 10);

  return (
    <div className="main-wrapper w-100 px-3 px-md-5 py-4">
      <section className="mb-5">
        <h2 className="fw-bold text-white mb-2">Novità</h2>
        <hr className="text-secondary mb-4" style={{ opacity: "0.2" }} />

        <div className="row g-4">
          {radioStations.map((station, i) => (
            <div key={i} className="col-12 col-md-6">
              <p className="text-uppercase x-small text-secondary mb-1 fw-bold">Nuova stazione radio</p>
              <p className="text-light fs-5 mb-3 text-truncate">{station.title}</p>
              <div className="ratio ratio-21x9">
                <img src={station.img} alt="" className="img-fluid rounded-4 shadow-lg object-fit-cover" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-5">
        <div className="d-flex align-items-center mb-3">
          <h4 className="fw-bold text-white m-0">Nuovi episodi radio</h4>
          <i className="bi bi-chevron-right fs-6 text-secondary ms-2"></i>
        </div>

        <div className="d-flex gap-4 overflow-auto pb-3 custom-scrollbar">
          {radioEpisodes.map((ep, i) => (
            <div key={i} className="flex-shrink-0" style={{ width: "190px" }}>
              {" "}
              <img src={ep.img} alt="" className="img-fluid rounded-3 mb-2 shadow-sm" />
              <p className="m-0 text-white small fw-semibold text-truncate">{ep.title}</p>
              <p className="m-0 text-secondary x-small text-truncate">{ep.sub}</p>
            </div>
          ))}
        </div>
      </section>
      <div>
        <section className="mb-5">
          <h4 className="fw-bold text-white mb-3">
            Nuove uscite <i className="bi bi-chevron-right fs-6 text-secondary"></i>
          </h4>

          {loading && <Spinner animation="border" variant="danger" className="d-block mx-auto" />}
          {error && <p className="text-danger text-center">{error}</p>}

          <Row className="g-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
            {displaySongs.map((song, index) => {
              const isSaved = savedSongs.some((s) => s.id === song.id);

              return (
                <Col key={song.id} className={index >= 6 ? "d-none d-lg-block" : ""}>
                  <div className="card bg-transparent border-0 h-100 album-card" onClick={() => dispatch(toggleFavorite(song))} style={{ cursor: "pointer" }}>
                    <div className="position-relative overflow-hidden rounded-3 mb-2">
                      <img src={song.album.cover_medium} alt={song.title} className="img-fluid" />

                      {isSaved && <i className="bi bi-heart-fill text-danger position-absolute top-0 end-0 p-2"></i>}
                    </div>
                    <div className="card-body p-0">
                      <p className={`m-0 text-truncate small fw-bold ${isSaved ? "text-danger" : "text-white"}`}>{song.title}</p>
                      <p className="m-0 text-secondary text-truncate x-small">{song.artist.name}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </section>

        <section className="mt-5">
          <h4 className="fw-bold mb-3 text-white">Altro da esplorare</h4>
          <Row className="g-3 row-cols-1 row-cols-md-3">
            {[
              "Esplora per genere",
              "Worldwide",
              "Video musicali",
              "Decenni",
              "Classifiche",
              "Nuovi artisti",
              "Attività e stati d'animo",
              "Audio spaziale",
              "Hit del passato",
            ].map((item) => (
              <Col key={item}>
                <div className="bg-secondary bg-opacity-25 p-3 rounded-3 d-flex justify-content-between align-items-center text-danger fw-semibold cursor-pointer">
                  {item}
                  <i className="bi bi-chevron-right text-secondary"></i>
                </div>
              </Col>
            ))}
          </Row>
        </section>

        <MyFooter />

        <div className="d-block d-md-none" style={{ height: "80px" }}></div>
      </div>
    </div>
  );
}
