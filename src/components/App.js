import '../styles/App.scss';
import logoPlain from '../images/logo_plain.png';

function App() {
  return (
    <div>
      <header className="header">
        <a href="./index.html" className="header__link">
          <img
            src={logoPlain}
            alt="Awesome profile cards"
            className="header__link__logo"
          />
        </a>
        <div className="stars_create">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
      </header>
      <main className="create-main">
        <section className="preview">
          <button className="preview__btn js_card_reset_btn">
            <i className="fa-regular fa-trash-can"></i>Reset
          </button>

          <article className="preview__article">
            <div className="preview__box1 palette1-color2 js_preview_box1">
              <p className="preview__box1__name palette1-color1 js_preview_name">
                Nombre Apellido
              </p>
              <p className="preview__box1__job js_preview_job">
                Front-end developer
              </p>
            </div>
            <div className="preview__box2 js_preview_picture js_cardPic"></div>
            <nav className="preview__nav">
              <ul className="preview__media">
                <li className="preview__media__item palette1-color3  js_media_item">
                  <a
                    href="/"
                    className="preview__media__link js_preview_link"
                    id="phone"
                  >
                    <i className="palette1-color1 js_card_icon fa-solid fa-mobile-screen-button"></i>
                  </a>
                </li>
                <li className="preview__media__item palette1-color3 js_media_item">
                  <a
                    href="/"
                    className="preview__media__link js_preview_link"
                    id="email"
                  >
                    <i className="palette1-color1 js_card_icon fa-regular fa-envelope"></i>
                  </a>
                </li>
                <li className="preview__media__item palette1-color3 js_media_item">
                  <a
                    href="/"
                    className="preview__media__link js_preview_link"
                    id="linkedin"
                  >
                    <i className="palette1-color1 js_card_icon fa-brands fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="preview__media__item palette1-color3 js_media_item">
                  <a
                    href="/"
                    className="preview__media__link js_preview_link"
                    id="github"
                  >
                    <i className="palette1-color1 js_card_icon fa-brands fa-github-alt"></i>
                  </a>
                </li>
              </ul>
            </nav>
          </article>
        </section>
        <form action="" className="form js_form">
          <fieldset className="form__design">
            <div className="form__design__boxOne js_fieldset_boxOne">
              <i className="fa-regular fa-object-ungroup ungroup_design form__design__ungroupIcon"></i>
              <legend className="form__design__title">Diseña</legend>
              <i className="fa-solid fa-chevron-up js_arrow"></i>
            </div>
            <section className="form__design__colors js_boxTwo">
              <label htmlFor="" className="form__design__label">
                Colores
              </label>
              <div className="form__design__rangeBox">
                <div className="form__design__colorInput">
                  <label
                    htmlFor="radio1"
                    className="form__design__label"
                    hidden
                  ></label>
                  <input
                    type="radio"
                    name="palette"
                    value="1"
                    id="radio1"
                    className="form__design__radioBtn js_input_palette js_input_palette1 js_default_radio"
                  />
                  <div className="form__design__p1c1 form__design__colorBox"></div>
                  <div className="form__design__p1c2 form__design__colorBox"></div>
                  <div className="form__design__p1c3 form__design__colorBox"></div>
                </div>
                <div className="form__design__colorInput">
                  <label
                    htmlFor="radio2"
                    className="form__design__label"
                    hidden
                  ></label>
                  <input
                    type="radio"
                    name="palette"
                    value="2"
                    id="radio2"
                    className="form__design__radioBtn js_input_palette js_input_palette2"
                  />
                  <div className="form__design__p2c1 form__design__colorBox"></div>
                  <div className="form__design__p2c2 form__design__colorBox"></div>
                  <div className="form__design__p2c3 form__design__colorBox"></div>
                </div>
                <div className="form__design__colorInput">
                  <label
                    htmlFor="radio3"
                    className="form__design__label"
                    hidden
                  ></label>
                  <input
                    type="radio"
                    name="palette"
                    value="3"
                    id="radio3"
                    className="form__design__radioBtn js_input_palette js_input_palette3"
                  />
                  <div className="form__design__p3c1 form__design__colorBox"></div>
                  <div className="form__design__p3c2 form__design__colorBox"></div>
                  <div className="form__design__p3c3 form__design__colorBox"></div>
                </div>
              </div>
            </section>
          </fieldset>
          <fieldset className="form__fill">
            <div className="form__fill__boxOne js_fieldset_boxOne">
              <i className="fa-regular fa-keyboard keyboard_fill form__fill__keyboard"></i>
              <legend className="form__fill__title">Rellena</legend>
              <i className="fa-solid fa-chevron-up js_arrow upsideDown"></i>
            </div>
            <section className="form__fill__boxTwo js_boxTwo">
              <label
                className="form__fill__label js_resetabname"
                htmlFor="fullname"
              >
                Nombre completo
              </label>
              <input
                className="form__fill__input js_resetable js_input"
                type="text"
                id="fullname"
                name="name"
                placeholder="Ej: Sally hill"
                pattern="[A-Za-z]"
              />
              <label className="form__fill__label" htmlFor="job">
                Puesto
              </label>
              <input
                className="form__fill__input short-margin js_resetable js_input"
                type="text"
                id="job"
                name="job"
                placeholder="Ej: Front-end unicorn"
                pattern="[A-Za-z]"
              />
              <h2 className="form__fill__label">Imagen de perfil</h2>
              <div className="form__fill__boxThree">
                <div className="form__fill__boxThree--1">
                  <label className="form__fill__label--cover" htmlFor="photo">
                    Añadir imagen
                  </label>
                  <input
                    className="form__fill__input js_input js_image_upload_btn"
                    type="file"
                    id="photo"
                    name="photo"
                    accept=".png, .svg, .webp, .jpg, .jpeg, .jfif, .pjpeg, .pjp"
                    hidden
                  />
                </div>
                <div className="form__fill__boxThree--2 js_mini_image"></div>
              </div>
              <label className="form__fill__label" htmlFor="email">
                Email
              </label>
              <input
                className="form__fill__input js_resetable js_input"
                type="email"
                id="email"
                name="email"
                placeholder="Ej: sally-hill@gmail.com"
                pattern="^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$"
              />
              <label className="form__fill__label" htmlFor="phone">
                Teléfono
              </label>
              <input
                className="form__fill__input js_resetable js_input"
                type="tel"
                id="phone"
                name="phone"
                placeholder="Ej: 555-55-55-55"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}-[0-9]{2}"
              />
              <label className="form__fill__label" htmlFor="linkedin-url">
                Linkedin
              </label>
              <input
                className="form__fill__input js_resetable js_input"
                type="url"
                id="linkedin-url"
                name="linkedin"
                placeholder="Ej: linkedin.com/in/sally.hill"
                pattern="/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/"
              />
              <label className="form__fill__label" htmlFor="github-url">
                Github
              </label>
              <input
                className="form__fill__input js_resetable js_input"
                type="url"
                id="github-url"
                name="github"
                placeholder="Ej: @sally-hill"
                pattern="/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/"
              />
            </section>
          </fieldset>
          <fieldset className="form__share">
            <div className="form__share__boxOne js_fieldset_boxOne">
              <i className="fa-solid fa-share-nodes nodes_share form__share__nodesIcon"></i>
              <legend className="form__share__title">Comparte</legend>
              <i className="fa-solid fa-chevron-up js_arrow upsideDown"></i>
            </div>
            <div className="form__share__boxTwo js_boxTwo js_share_box2">
              <button className="form__share__btn js_share_btn">
                <i className="fa-regular fa-address-card form__share__cardIcon"></i>
                Crear tarjeta
              </button>
            </div>
          </fieldset>
          <section className="form__collapsible js_share_section">
            <div className="form__collapsible__boxText js_box_share_card"></div>

            <a href="/" className="form__collapsible__shareBtn js_twitter_btn">
              <i className="fa-brands fa-twitter"></i>
              <span>Compartir en twitter</span>
            </a>
          </section>
        </form>
      </main>
      <footer className="footer">
        <small className="footer__copy">Awesome profile-cards @2022</small>
        <div className="footer__logo">
          <img
            src="./assets/images/logo_adalab_purple.png"
            alt="Logo de Adalab"
            className="footer__logo__img"
          />
        </div>
      </footer>
    </div>
  );
}

export default App;
