import './styles.css'

const Header = () => {
    return (
        <header className="header">
            <div className="image-logo" role="img" aria-label='Logo'></div>
            <img className='participant' src="../../../public/assets/participante.png" alt="Participant with a present" />
        </header>
    )
}

export default Header
