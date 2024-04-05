import React from "react";

export default function Team() {
  return (
    <div className="teamSection" id="team">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="climbContent">
              <h1 className="climbHeading">02.</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet totam atque corrupti id voluptate magnam. Amet
                repudiandae aliquam quod exercitationem dolor sint illo itaque?
                Quae accusantium minus pariatur cupiditate illum?
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="climgTabs">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    MOUNTAIN 1
                  </button>
                  <button
                    className="nav-link"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    MOUNTAIN 2
                  </button>
                </div>
              </nav>
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  tabindex="0"
                >
                  <div className="bgTabOne">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="timeSection">
                            <div className="timeContent">
                              <h2>SCHEDULE</h2>
                              <div className="d-flex mb-3">
                                <div>
                                  <p>25 Nov 2016</p>
                                  <p>25 Nov 2016</p>
                                </div>
                                <div>
                                  <p>Vestibulum Viverra</p>
                                  <p>Vestibulum Viverra</p>
                                </div>
                              </div>
                              <div className="d-flex mb-3">
                                <div>
                                  <p>25 Nov 2016</p>
                                </div>
                                <div>
                                  <p>Vestibulum Viverra</p>
                                </div>
                              </div>
                              <div className="d-flex mb-3">
                                <div>
                                  <p>25 Nov 2016</p>
                                </div>
                                <div>
                                  <p>Vestibulum Viverra</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabindex="0"
                >
                  <div className="bgTabTwo">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="timeSection">
                            <div className="timeContent">
                              <h2>SCHEDULE</h2>
                              <div className="d-flex mb-3">
                                <div>
                                  <p>25 Nov 2016</p>
                                  <p>25 Nov 2016</p>
                                </div>
                                <div>
                                  <p>Vestibulum Viverra</p>
                                  <p>Vestibulum Viverra</p>
                                </div>
                              </div>
                              <div className="d-flex mb-3">
                                <div>
                                  <p>25 Nov 2016</p>
                                </div>
                                <div>
                                  <p>Vestibulum Viverra</p>
                                </div>
                              </div>
                              <div className="d-flex mb-3">
                                <div>
                                  <p>25 Nov 2016</p>
                                </div>
                                <div>
                                  <p>Vestibulum Viverra</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Accordions Section For mobile view --> */}
      <div className="accordionSection">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                MOUNTAIN 1
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <div className="bgTabOne">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-12">
                        <div className="timeSection">
                          <div className="timeContent">
                            <h2>SCHEDULE</h2>
                            <div className="d-flex mb-3">
                              <div>
                                <p>25 Nov 2016</p>
                                <p>25 Nov 2016</p>
                              </div>
                              <div>
                                <p>Vestibulum Viverra</p>
                                <p>Vestibulum Viverra</p>
                              </div>
                            </div>
                            <div class="d-flex mb-3">
                              <div>
                                <p>25 Nov 2016</p>
                              </div>
                              <div>
                                <p>Vestibulum Viverra</p>
                              </div>
                            </div>
                            <div class="d-flex mb-3">
                              <div>
                                <p>25 Nov 2016</p>
                              </div>
                              <div>
                                <p>Vestibulum Viverra</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  MOUNTAIN 2
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <div class="bgTabTwo">
                    <div class="container">
                      <div class="row">
                        <div class="col-md-12">
                          <div class="timeSection">
                            <div class="timeContent">
                              <h2>SCHEDULE</h2>
                              <div class="d-flex mb-3">
                                <div>
                                  <p>25 Nov 2016</p>
                                  <p>25 Nov 2016</p>
                                </div>
                                <div>
                                  <p>Vestibulum Viverra</p>
                                  <p>Vestibulum Viverra</p>
                                </div>
                              </div>
                              <div class="d-flex mb-3">
                                <div>
                                  <p>25 Nov 2016</p>
                                </div>
                                <div>
                                  <p>Vestibulum Viverra</p>
                                </div>
                              </div>
                              <div class="d-flex mb-3">
                                <div>
                                  <p>25 Nov 2016</p>
                                </div>
                                <div>
                                  <p>Vestibulum Viverra</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
