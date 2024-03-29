import { useLocation } from "react-router-dom";

import IconPoints from "../images/icons/icon-point-xs.svg";

const CardLeaderboardFan = ({ fanImage, fanUsername, fanPoints, fanPosition }) => {
    const { pathname } = useLocation()

    return (
        <article className={`d-flex-row align-items-center j-c-space-between bg-dark-gradient ${pathname.includes('leaderboard-flash') ? 'pb-xs-3 pt-xs-3 pr-xs-6 pl-xs-4 border-radius-100 mb-xs-2' : 'pb-xs-4 pt-xs-4 pr-xs-6 pl-xs-6 border-radius-1 mb-xs-3'}`}>
            <div className="d-flex-row align-items-center w-100">
                <img className="avatar-40 border-radius-100 mr-xs-4" src={fanImage} />
                <div className="text-info d-flex-column">
                    <div className="letter-spacing-1">{fanUsername}</div>
                    <div className="d-flex-row letter-spacing-1">
                        <div className="grey-400 fsize-xs-1 letter-spacing-1">{fanPoints} </div>
                        <img className="ml-xs-2" src={IconPoints} alt=" points" />
                    </div>
                </div>
            </div>
            <span className="fsize-xs-7 f-w-300">{fanPosition}°</span>
        </article>
    )
}

export default CardLeaderboardFan;