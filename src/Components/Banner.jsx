import React from 'react'
import LogoIcon from '../Assets/Logo-icon.png';

export default function Banner() {
  return (
    <div className="parallelEffect">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="headerSection">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="javascript:void(0);"><img src={LogoIcon} alt="" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link lato-bold" aria-current="page" href="#history">01.
                                            History</a>
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
</div>
  )
}