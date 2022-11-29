import { useState } from 'react';
import '../styles/App.scss';

import logoFooter from '../images/logo_adalab_purple.png';
import callToApi from '../services/api';
//Components
import Header from './Header';
import PreviewCard from './PreviewCard';

function App() {
  // State Variables
  const [person, setPerson] = useState({
    palette: '1',
    name: '',
    job: '',
    phone: '',
    email: '',
    linkedin: '',
    github: '',
    photo: '',
  });
  const [dataResult, setDataResult] = useState({});

  // Events
  const handleInput = (ev) => {
    const inputValue = ev.target.value;
    const inputName = ev.target.name;

    setPerson({ ...person, [inputName]: inputValue });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleReset = (ev) => {
    ev.preventDefault();
    setPerson({
      palette: '1',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      photo: '',
    });
  };

  const handleShare = (ev) => {
    ev.preventDefault();
    callToApi(person).then((data) => {
      console.log(data);
      setDataResult(data);
    });
  };

  //UseEffect

  //Render
  return (
    <div>
      <Header></Header>

      <main className='create-main'>
        <PreviewCard person={person} handle={handleReset}></PreviewCard>

        <form action='' className='form js_form' onSubmit={handleSubmit}>
          <fieldset className='form__design'>
            <div className='form__design__boxOne js_fieldset_boxOne'>
              <i className='fa-regular fa-object-ungroup ungroup_design form__design__ungroupIcon'></i>
              <legend className='form__design__title'>Diseña</legend>
              <i className='fa-solid fa-chevron-up js_arrow'></i>
            </div>
            <section className='form__design__colors js_boxTwo'>
              <label htmlFor='' className='form__design__label'>
                Colores
              </label>
              <div className='form__design__rangeBox'>
                <div className='form__design__colorInput'>
                  <label htmlFor='radio1' className='form__design__label' hidden></label>
                  <input
                    type='radio'
                    name='palette'
                    value='1'
                    id='radio1'
                    className='form__design__radioBtn js_input_palette js_input_palette1 js_default_radio'
                    onChange={handleInput}
                    checked={person.palette === '1'}
                  />
                  <div className='form__design__p1c1 form__design__colorBox'></div>
                  <div className='form__design__p1c2 form__design__colorBox'></div>
                  <div className='form__design__p1c3 form__design__colorBox'></div>
                </div>
                <div className='form__design__colorInput'>
                  <label htmlFor='radio2' className='form__design__label' hidden></label>
                  <input
                    type='radio'
                    name='palette'
                    value='2'
                    id='radio2'
                    className='form__design__radioBtn js_input_palette js_input_palette2'
                    onChange={handleInput}
                    checked={person.palette === '2'}
                  />
                  <div className='form__design__p2c1 form__design__colorBox'></div>
                  <div className='form__design__p2c2 form__design__colorBox'></div>
                  <div className='form__design__p2c3 form__design__colorBox'></div>
                </div>
                <div className='form__design__colorInput'>
                  <label htmlFor='radio3' className='form__design__label' hidden></label>
                  <input
                    type='radio'
                    name='palette'
                    value='3'
                    id='radio3'
                    className='form__design__radioBtn js_input_palette js_input_palette3'
                    onChange={handleInput}
                    checked={person.palette === '3'}
                  />
                  <div className='form__design__p3c1 form__design__colorBox'></div>
                  <div className='form__design__p3c2 form__design__colorBox'></div>
                  <div className='form__design__p3c3 form__design__colorBox'></div>
                </div>
              </div>
            </section>
          </fieldset>
          <fieldset className='form__fill'>
            <div className='form__fill__boxOne js_fieldset_boxOne'>
              <i className='fa-regular fa-keyboard keyboard_fill form__fill__keyboard'></i>
              <legend className='form__fill__title'>Rellena</legend>
              <i className='fa-solid fa-chevron-up js_arrow upsideDown'></i>
            </div>
            <section className='form__fill__boxTwo js_boxTwo'>
              <label className='form__fill__label js_resetabname' htmlFor='fullname'>
                Nombre completo
              </label>
              <input
                className='form__fill__input js_resetable js_input'
                type='text'
                id='fullname'
                name='name'
                placeholder='Ej: Sally hill'
                value={person.name}
                onChange={handleInput}
              />
              <label className='form__fill__label' htmlFor='job'>
                Puesto
              </label>
              <input
                className='form__fill__input short-margin js_resetable js_input'
                type='text'
                id='job'
                name='job'
                placeholder='Ej: Front-end unicorn'
                value={person.job}
                onChange={handleInput}
              />
              <h2 className='form__fill__label'>Imagen de perfil</h2>
              <div className='form__fill__boxThree'>
                <div className='form__fill__boxThree--1'>
                  <label className='form__fill__label--cover' htmlFor='photo'>
                    Añadir imagen
                  </label>
                  <input
                    className='form__fill__input js_input js_image_upload_btn'
                    type='file'
                    id='photo'
                    name='photo'
                    accept='.png, .svg, .webp, .jpg, .jpeg, .jfif, .pjpeg, .pjp'
                    hidden
                  />
                </div>
                <div className='form__fill__boxThree--2 js_mini_image'></div>
              </div>
              <label className='form__fill__label' htmlFor='email'>
                Email
              </label>
              <input
                className='form__fill__input js_resetable js_input'
                type='email'
                id='email'
                name='email'
                placeholder='Ej: sally-hill@gmail.com'
                pattern='/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/'
                value={person.email}
                onChange={handleInput}
              />
              <label className='form__fill__label' htmlFor='phone'>
                Teléfono
              </label>
              <input
                className='form__fill__input js_resetable js_input'
                type='tel'
                id='phone'
                name='phone'
                placeholder='Ej: 555-55-55-55'
                pattern='[0-9]{3}-?[0-9]{2}-?[0-9]{2}-?[0-9]{2}'
                value={person.phone}
                onChange={handleInput}
              />
              <label className='form__fill__label' htmlFor='linkedin-url'>
                Linkedin
              </label>
              <input
                className='form__fill__input js_resetable js_input'
                type='url'
                id='linkedin-url'
                name='linkedin'
                placeholder='Ej: linkedin.com/in/sally.hill'
                pattern='^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$'
                value={person.linkedin}
                onChange={handleInput}
              />
              <label className='form__fill__label' htmlFor='github-url'>
                Github
              </label>
              <input
                className='form__fill__input js_resetable js_input'
                type='text'
                id='github-url'
                name='github'
                placeholder='Ej: sally-hill'
                value={person.github}
                onChange={handleInput}
              />
            </section>
          </fieldset>
          <fieldset className='form__share'>
            <div className='form__share__boxOne js_fieldset_boxOne'>
              <i className='fa-solid fa-share-nodes nodes_share form__share__nodesIcon'></i>
              <legend className='form__share__title'>Comparte</legend>
              <i className='fa-solid fa-chevron-up js_arrow upsideDown'></i>
            </div>
            <div className='form__share__boxTwo js_boxTwo js_share_box2'>
              <button className='form__share__btn js_share_btn' onClick={handleShare}>
                <i className='fa-regular fa-address-card form__share__cardIcon'></i>
                Crear tarjeta
              </button>
            </div>
          </fieldset>
          <section className='form__collapsible js_share_section'>
            <div className='form__collapsible__boxText js_box_share_card'></div>
            <a href='/'> {dataResult.success ? dataResult.cardURL : dataResult.error}</a>
            <a href='/' className='form__collapsible__shareBtn js_twitter_btn'>
              <i className='fa-brands fa-twitter'></i>
              <span>Compartir en twitter</span>
            </a>
          </section>
        </form>
      </main>
      <footer className='footer'>
        <small className='footer__copy'>Awesome profile-cards @2022</small>
        <div className='footer__logo'>
          <img src={logoFooter} alt='Logo de Adalab' className='footer__logo__img' />
        </div>
      </footer>
    </div>
  );
}

export default App;
