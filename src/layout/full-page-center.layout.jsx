const FullPageCenter = ({ children, className }) => {
    return (
        <div className={`position-fixed top-0 w-100 h-100 d-flex-column align-items-center j-c-center z-index-1 ${className ? className : ''}`}>
            {children}
        </div>
    )
}

export default FullPageCenter