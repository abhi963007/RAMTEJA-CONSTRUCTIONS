import React from 'react';

export default function Materials() {
  return (
    <section className="section materials">
      <div className="container">
        <div className="materials-wrap">
          <div data-w-id="f0d050dd-217c-8cc6-b786-24dd84a8db5e" style={{ opacity: 0 }} className="section-sub-title gray">Materials</div>
          
          {/* Card 1: Galvanized Steel */}
          <div data-w-id="0017173e-0de5-22bd-5c5e-13694b39a6ad" style={{ opacity: 0 }} className="materials-single-card-one-wrap">
            <div className="materials-single-card-one">
              <div className="materials-single-card-one-left-box">
                <div className="small-text white">Galvanized Steel</div>
                <div className="materials-counter-content-box">
                  <div className="counter-single">
                    <div className="counter-single-box">
                      <div className="laboratory-counter-wrapper two">
                        <div data-w-id="b4567be3-3623-38ea-f785-6d8aead31cd9" className="whole-counter">
                          <div className="counter-marque">
                            <div className="counter-train">
                              {['2', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num, i) => (
                                <div key={i} className="heading-three">{num}</div>
                              ))}
                            </div>
                            <div className="counter-train">
                              {['2', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num, i) => (
                                <div key={i} className="heading-three">{num}</div>
                              ))}
                            </div>
                          </div>
                          <div className="counter-marque-two">
                            <div className="counter-train-two">
                              {['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num, i) => (
                                <div key={i} className="heading-three">{num}</div>
                              ))}
                            </div>
                            <div className="counter-train-two">
                              {['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num, i) => (
                                <div key={i} className="heading-three">{num}</div>
                              ))}
                            </div>
                          </div>
                          <div className="heading-three"><span className="count-text">+</span></div>
                        </div>
                      </div>
                      <div className="small-text white">Years</div>
                    </div>
                    <div className="description black-gray">Proven to resist corrosion and deliver long-term structural protection in all climates.</div>
                  </div>
                </div>
              </div>
              <div className="materials-single-card-one-right-box">
                <div className="materials-image-box"><img src="/images/69a3d8495a7203664b626bf3_Materials.webp" loading="lazy" alt="Materials" className="materials-image" /></div>
              </div>
            </div>
          </div>

          {/* Cards 2 & 3: Polycarbonate & Premium Fasteners */}
          <div data-w-id="a73ec6ed-d677-946d-db73-a6869725dbdf" style={{ opacity: 0 }} className="materials-single-card-two-wrap">
            <div className="materials-single-card-two">
              <div className="materials-single-card-left-box-wrap">
                <div className="materials-single-card-left-box">
                  <div className="small-text white">Polycarbonate Sheets</div>
                  <h2 className="materials-card-title">UV Resistant</h2>
                  <div className="description black-gray">Ideal for skylights and canopy sections, providing light diffusion with weather protection.</div>
                </div>
              </div>
              <div className="materials-single-card-right-box">
                <div className="small-text white">Premium Fasteners</div>
                <h2 className="materials-card-title">Rust-Proof</h2>
                <div className="description black-gray">Each joint secured with industrial-grade fasteners for precision, stability, and longevity.</div>
              </div>
            </div>
          </div>

          {/* Card 4: Stone-Coated Steel */}
          <div data-w-id="8dbe6456-b7af-1107-7097-4dd8fc47a18d" style={{ opacity: 0 }} className="materials-single-card-three-wrap">
            <div className="materials-bottom-box">
              <div className="materials-flex">
                <div className="small-text white">Stone-Coated Steel</div>
                <div className="counter-single center">
                  <div className="counter-single-box">
                    <div className="laboratory-counter-wrapper two">
                      <div data-w-id="fda97482-9cae-6371-f118-de694976bc7a" className="whole-counter">
                        <div className="counter-marque">
                          <div className="counter-train">
                            {['5', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num, i) => (
                              <div key={i} className="heading-three">{num}</div>
                            ))}
                          </div>
                          <div className="counter-train">
                            {['5', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num, i) => (
                              <div key={i} className="heading-three">{num}</div>
                            ))}
                          </div>
                        </div>
                        <div className="counter-marque-two">
                          <div className="counter-train-two">
                            {['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num, i) => (
                              <div key={i} className="heading-three">{num}</div>
                            ))}
                          </div>
                          <div className="counter-train-two">
                            {['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].map((num, i) => (
                              <div key={i} className="heading-three">{num}</div>
                            ))}
                          </div>
                        </div>
                        <div className="heading-three"><span className="count-text">+</span></div>
                      </div>
                    </div>
                    <div className="small-text white">Years</div>
                  </div>
                  <div className="description black-gray">Each joint secured with industrial-grade fasteners for precision, stability, and longevity.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
