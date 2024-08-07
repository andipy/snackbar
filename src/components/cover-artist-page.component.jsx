import { useLocation } from 'react-router-dom'

import Button from './button.component'

import IconVerifiedArtist from '../images/icons/icon-verified-artist.svg'

const CoverArtistPage = ({ artist, leaderboard, userCompeting, handleCompete, currentFan }) => {

    const location = useLocation()
    
    return (
        <header className={`position-relative h-xs-20 ${location.pathname.includes('flash-leaderboard') ? 'position-fixed w-100 z-index-5 top-0' : ''}`}>
            <img
                className='w-100 h-inherit object-fit-cover'
                src={location.pathname.includes('flash-leaderboard') ?
                    leaderboard?.image
                :
                    artist?.image
                }
            />

            {!location.pathname.includes('flash-leaderboard') &&
                <div className={`container w-100 position-absolute-x bottom-avatar-header z-index-2 d-flex-row ${userCompeting && currentFan.hasSpotify ? 'align-items-end' : 'align-items-center'}`}>
                    <div className='position-relative avatar-72'>
                        <img className={`avatar-72 border-radius-100 ${artist?.flashLeaderboard.status === 'ONGOING' ? 'border-lime-6' : 'border-dark-6'}`} src={artist?.image} />                       
                        <img className='artist-avatar-verified-icon' src={IconVerifiedArtist} />
                    </div>
                    <div className='d-flex-column grow-1 no-shrink j-c-start ml-xs-2'>
                        <h5 className='fsize-xs-4 f-w-600'>{artist?.artistName}</h5>
                        {userCompeting && currentFan.hasSpotify &&
                            <Button style={'button-leave-leaderboard d-flex-row align-items-center j-c-center bg-dark-soft-2 border-radius-04 grey-300 mt-xs-2 pt-xs-2 pb-xs-2 pl-xs-6 pr-xs-6 align-self-start w-auto'} label={'Esci dalla classifica'} onClick={handleCompete} />
                        }
                    </div>                    
                </div>
            }              
        </header>
    )
}

export default CoverArtistPage;