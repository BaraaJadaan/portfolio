import React, { Suspense, lazy, useState, useEffect } from "react";
import Footer from "../Footer";
import Home2 from "./Home2";
import Type from "./Type";

const Particle = lazy(() => import("../Particle"));

function Home() {
  const [showParticles, setShowParticles] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ("requestIdleCallback" in window) {
        const id = window.requestIdleCallback(() => setShowParticles(true), { timeout: 1500 });
        return () => window.cancelIdleCallback(id);
      } else {
        const timer = setTimeout(() => setShowParticles(true), 400);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <section>
      <div className="container-fluid home-section" id="home">
        {showParticles && (
          <Suspense fallback={null}>
            <Particle />
          </Suspense>
        )}
        <div className="container home-content">
          <div className="row align-items-center">
            <div className="col-md-7 home-header">
              <h1 className="hero-title" style={{ paddingBottom: 15 }}>
                <span className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-label="waving hand">
                    👋🏻
                  </span>
                </span>
                <span className="heading-name d-block">
                  I'M
                  <strong className="main-name"> Baraa Jadaan</strong>
                </span>
              </h1>

              <div className="typewriter-container">
                <Type />
              </div>
            </div>

            <div className="col-md-5 text-center hero-img-col" style={{ paddingBottom: 20 }}>
              <div className="hero-img-container">
                <picture className="hero-picture">
                  <source media="(max-width: 576px)" srcSet="./home-main-mobile.webp" type="image/webp" />
                  <source srcSet="./home-main.webp" type="image/webp" />
                  <img
                    src="./home-main.webp"
                    alt="Illustration of developer programming at computer workstation"
                    className="hero-img"
                    width="450"
                    height="450"
                    fetchpriority="high"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home2 />
      <Footer />
    </section>
  );
}

export default Home;
