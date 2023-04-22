import './Header.css';

export const Header = () => {
    return <div className='header-container'>
        <div className='navbar-app-name'><a href='/'><img src='./appname.png'/></a></div>
        <div className='navbar-logo'><img src='./logo.png'/></div>
    </div>
}