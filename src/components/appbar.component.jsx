import { useLocation, Link } from "react-router-dom";

import IconSearchInactive from "../images/icons/icon-search-inactive.svg";
import IconSearchActive from "../images/icons/icon-search-active.svg";
import IconFavouritesInactive from "../images/icons/icon-favourites-inactive.svg";
import IconFavouritesActive from "../images/icons/icon-favourites-active.svg";
import IconProfileInactive from "../images/icons/icon-profile-inactive.svg";
import IconProfileActive from "../images/icons/icon-profile-active.svg";

const Appbar = () => {

    const location = useLocation()

    return (
        <div className="app-bar-area d-flex-row j-c-center z-index-max">            
            <div className="container d-flex-row align-items-center j-c-space-between">                
                <Link to='/search'>
                    <div className="d-flex-column align-items-center">
                        <img src={location.pathname.includes('search') ? IconSearchActive : IconSearchInactive} alt="Search" />
                        <span className={`${location.pathname.includes('search') ? 'f-w-700 lime-400' : 'f-w-300 dark-200'} fsize-xs-0 letter-spacing-1`}>Cerca</span>
                    </div>                    
                </Link>
                <Link to='/your-favourites'>
                    <div className="d-flex-column align-items-center">
                        <img src={location.pathname.includes('your-favourites') ? IconFavouritesActive : IconFavouritesInactive} alt="Favourites" />
                        <span className={`${location.pathname.includes('your-favourites') ? 'f-w-700 lime-400' : 'f-w-300 dark-200'} fsize-xs-0 letter-spacing-1`}>Preferiti</span>
                    </div>
                </Link>
                <Link to='/profile'>
                    <div className="d-flex-column align-items-center">
                        <img src={location.pathname.includes('profile') ? IconProfileActive : IconProfileInactive} alt="Profile" />
                        <span className={`${location.pathname.includes('profile') ? 'f-w-700 lime-400' : 'f-w-300 dark-200'} fsize-xs-0 letter-spacing-1`}>Profilo</span>
                    </div>
                </Link>                
            </div>
        </div>

    )
}

export default Appbar;