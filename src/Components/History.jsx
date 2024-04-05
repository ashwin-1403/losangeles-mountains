import React from 'react'
import Logo from '../Assets/Logo.png';
import Thumb1 from '../Assets/thumb-01.png';
import Thumb2 from '../Assets/thumb-02.png';

export default function History() {
  return (
    <div className="historySection" id="history">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="secondHeader">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="javascript:void(0);"><img src={Logo} alt="" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link lato-bold" aria-current="page" href="#history">01. History</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link lato-bold" href="#team">02. Team</a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid">
        <div className="row">
            <div className="carouselSection">
                <div className="col-md-12">
                    <div id="carouselExampleCaptions" className="carousel slide">
                        <div>
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0"
                                    className="active" aria-current="true" aria-label="Slide 1">
                                    <img src={Thumb1} alt="" /></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                    aria-label="Slide 2">
                                    <img src={Thumb2} alt="" /></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                    aria-label="Slide 3">
                                    <img src={Thumb1} alt="" /></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3"
                                    aria-label="Slide 4">
                                    <img src={Thumb2} alt="" /></button>
                            </div>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="bgCarouselOne">
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <h1 className="firstCarouselHeading oswalFont">01.</h1>
                                    <p>Some representative placeholder content for the first slide. Lorem ipsum,
                                        dolor sit amet consectetur adipisicing elit. Sapiente alias quisquam saepe
                                        quaerat, quibusdam animi delectus ipsum, hic minus facere quam ab dolore
                                        quia porro laboriosam rerum fugit? Unde, officia.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="bgCarouselSecond">
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <h1 className="secondCarouselHeading oswalFont">02.</h1>
                                    <p>Some representative placeholder content for the first slide. Lorem ipsum,
                                        dolor sit amet consectetur adipisicing elit. Sapiente alias quisquam saepe
                                        quaerat, quibusdam animi delectus ipsum, hic minus facere quam ab dolore
                                        quia porro laboriosam rerum fugit? Unde, officia.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="bgCarouselOne">
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <h1 className="secondCarouselHeading oswalFont">02.</h1>
                                    <p>Some representative placeholder content for the first slide. Lorem ipsum,
                                        dolor sit amet consectetur adipisicing elit. Sapiente alias quisquam saepe
                                        quaerat, quibusdam animi delectus ipsum, hic minus facere quam ab dolore
                                        quia porro laboriosam rerum fugit? Unde, officia.</p>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="bgCarouselSecond">
                                </div>
                                <div className="carousel-caption d-md-block">
                                    <h1 className="secondCarouselHeading oswalFont">02.</h1>
                                    <p>Some representative placeholder content for the first slide. Lorem ipsum,
                                        dolor sit amet consectetur adipisicing elit. Sapiente alias quisquam saepe
                                        quaerat, quibusdam animi delectus ipsum, hic minus facere quam ab dolore
                                        quia porro laboriosam rerum fugit? Unde, officia.</p>
                                </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button"
                            data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button"
                            data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}