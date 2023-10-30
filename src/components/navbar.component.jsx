import React from "react";

import AM from '../images/pictures/arcticmonkeys.jpg'
import IconArrowLeft from '../images/icons/icon-arrowleft.svg'
import IconVerifiedArtist from '../images/icons/icon-verified-artist.svg'

const Navbar = () => {
    return (
        <nav className="top-bar-area-overlay-fixed bg-dark d-flex-row align-items-center j-c-center white z-index-5 top-0 shadow-dark-400">
            <div className="container d-flex-row align-items-center j-c-center">
                <a className="topbar-icon-left" href="arcticmonkeys-after-follow.html">
                    <img src={IconArrowLeft} alt="BACK" />
                </a>
                <div className="d-flex-column align-items-center w-75">
                    <div className="d-flex-row align-items-center j-c-start no-shrink">
                        <div className="position-relative mr-xs-4">
                            <img className="avatar-36 border-radius-100" src={AM} />                       
                            <img className="artist-avatar-verified-icon avatar-12" src={IconVerifiedArtist} alt="Verified" />
                        </div>                    
                        <h2 id="artist-name" className="f-w-600 fsize-xxl-2 fsize-xl-2 fsize-lg-2 fsize-md-2 fsize-sm-2 fsize-xs-2 letter-spacing-1 no-shrink w-100">Arctic Monkeys</h2>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;