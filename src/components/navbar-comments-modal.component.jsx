import IconExit from '../images/icons/icon-exit.svg'

const NavbarCommentsModal = ({ closeComments }) => {

    return (
        <nav className='position-sticky top-0 w-100 d-flex-row align-items-center j-c-center white bg-dark-soft z-index-5 pt-xs-4 pb-xs-4 pt-sm-2 pb-sm-2'>
            <div className='container d-flex-row align-items-center j-c-space-between'>
                <div className='avatar-32'></div>

                <p>Comments</p>

                <div className='avatar-32 d-flex-row align-items-center j-c-center' onClick={closeComments}>
                    <img className='avatar-32' src={IconExit} alt='X' />
                </div>
            </div>
        </nav>
    )
}

export default NavbarCommentsModal