import { useEffect, useState, useContext } from 'react'
import { useLocation, Outlet } from 'react-router-dom'

import { ArtistsContext } from '../contexts/artists.context'
import { CurrentFanContext } from '../contexts/currentFan.context'
import { FanclubsContext } from '../contexts/fanclubs.context'

import ContainerDefault from '../layout/container-default.layout'
import NavbarArtistPage from '../components/navbar-artist-page.component'
import CoverArtistPage from '../components/cover-artist-page.component'
import CardLeaderboardYourPosition from '../components/card-leaderboard-your-position.component'
import Button from '../components/button.component'
import Tab from '../components/tab.component'
import MessageFlashLeaderboard from '../components/message-flash-leaderboard.component'
import MessageFlashLeaderboardModal from '../components/message-flash-leaderboard-modal.component'
import CardInviteFriend from '../components/card-invite-friend.component'
import CardConnectSpotify from '../components/card-connect-spotify.component'


const ArtistRoute = () => {

    const { state, pathname } = useLocation()

    const { currentFan, setCurrentFan } = useContext(CurrentFanContext)
    const { artists } = useContext(ArtistsContext)
    const { fanclubs } = useContext(FanclubsContext)
    
    const [artist, setArtist] = useState()
    const fetchThisArtist = () => {
        const thisArtist = artists.find(artist => state.id === artist.id)
        setArtist(thisArtist)
    }

    const [fanclub, setFanclub] = useState()
    const fetchThisFanclub = () => {
        const thisFanclub = fanclubs.find(elem => elem.artistId === artist.id)
        setFanclub(thisFanclub)
    }

    const [userCompeting, setUserCompeting] = useState(false)
    const fetchCompeting = () => {
        if ( currentFan.leaderboardsFollowed.length > 0 ) {
            const favouriteArtistIds = currentFan.leaderboardsFollowed.map(followed => followed.artistId)

            if (favouriteArtistIds.includes(artist.id)) {
                setUserCompeting(true)
            } else {
                setUserCompeting(false)
            }
        } else {
            setUserCompeting(false)
        }
    }
    
    const handleCompete = () => {
        if (userCompeting) {
            const newLeaderboardsFollowed = currentFan.leaderboardsFollowed.filter(leaderboard => leaderboard.artistId !== artist.id);
            setCurrentFan(prev => ({ ...prev, leaderboardsFollowed: newLeaderboardsFollowed }))
        } else {
            setCurrentFan(prev => ({
                ...prev,
                leaderboardsFollowed: [...prev.leaderboardsFollowed, { artistId: artist.id }]
            }))
        }
    }

    useEffect(() => {
        if ( state ) {
            fetchThisArtist()
        }
    }, [artists, state, artist])

    useEffect(() => {
        if (artist) {
            fetchCompeting()
        }
    }, [currentFan, artist])

    useEffect(() => {
        if (artist) {
            fetchThisFanclub()
        }
    }, [artist])

    // this part of the code handles the flash leaderboard pop up
    const [modalOpen, setModalOpen] = useState(false)
    const [upperModalCompressed, setUpperModalCompressed] = useState(false)
    const [lowerModalCompressed, setLowerModalCompressed] = useState(true)
    
    const toggleModalContent = () => {
        let upperModalDelay
        let lowerModalDelay
        if ( upperModalCompressed ) {
            upperModalDelay = 300
            lowerModalDelay = 0
        } else {
            upperModalDelay = 0
            lowerModalDelay = 300
        }

        setTimeout(() => {
            setUpperModalCompressed(!upperModalCompressed)
        }, upperModalDelay)
        setTimeout(() => {
            setLowerModalCompressed(!lowerModalCompressed)
        }, lowerModalDelay)
    }

    useEffect(() => {
        setTimeout(() => {
            setModalOpen(true)
        }, 600) 
    }, [])

    return (
        <>
            <NavbarArtistPage artist={artist} />
            <CoverArtistPage artist={artist} userCompeting={userCompeting} handleCompete={handleCompete} currentFan={currentFan} />

            <ContainerDefault containerSpecificStyle={''}>
                <div className='mt-avatar-header position-sticky top-navbar z-index-max bg-dark'>
                    {artist?.flashLeaderboard.status === 'CLOSED_VISIBLE' ?
                        <MessageFlashLeaderboard artist={artist} userCompeting={userCompeting} /> : null
                    }
                    {fanclub?.isActive &&
                        <Tab artist={artist} />
                    }
                    {!currentFan.hasSpotify &&
                        <CardConnectSpotify />
                    }
                    {currentFan.hasSpotify && !userCompeting &&
                        <Button style='bg-acid-lime fsize-xs-3 f-w-500 black mt-xs-4' label='Competi nella classifica' onClick={handleCompete} />
                    }
                    {userCompeting && currentFan.hasSpotify && !pathname.includes('fanclub') &&
                        <CardLeaderboardYourPosition currentFan={currentFan} />
                    }
                </div>
                <Outlet context={artist} />
            </ContainerDefault>

            {artist?.flashLeaderboard.status === 'PENDING' || artist?.flashLeaderboard.status === 'ONGOING' ?
                <MessageFlashLeaderboardModal
                    artist={artist}
                    userCompeting={userCompeting}
                    modalOpen={modalOpen}
                    toggleModalContent={toggleModalContent}
                    upperModalCompressed={upperModalCompressed}
                    lowerModalCompressed={lowerModalCompressed}
                /> : null
            }
            
            {!pathname.includes('fanclub') &&
                <ContainerDefault containerSpecificStyle={`position-sticky z-index-5 ${upperModalCompressed ? 'bottom-14' : 'bottom-2'}`}>
                    <CardInviteFriend artist={artist} />
                </ContainerDefault>
            }
        </>
    )
}

export default ArtistRoute