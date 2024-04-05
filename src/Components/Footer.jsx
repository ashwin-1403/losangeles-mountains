import React from 'react'
import Logo from '../Assets/Logo.png';

export default function Footer() {
  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="footerContent">
                        <div className="footerLogo"><img src={Logo} alt="" /></div>
                        <div className="copyrightText">COPYRIGHT 2016. ALL RIGHTS RESERVED.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}