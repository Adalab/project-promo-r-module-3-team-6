import '../styles/components/Header.scss';
import logoPlain from '../images/logo_plain.png';

function Header() {
  return (
    <header className='header'>
      <a href='./index.html' className='header__link'>
        <img src={logoPlain} alt='Awesome profile cards' className='header__link__logo' />
      </a>
      <div className='stars_create'>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
        <div className='star'></div>
      </div>
    </header>
  );
}

export default Header;
