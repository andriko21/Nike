import "./main.scss";
import sprite from "./img/symbol-defs.svg";
import airJordan1 from "./img/Air-Jordan-1.svg";
import airJordan2 from "./img/Air-Jordan-2.svg";
import airJordan3 from "./img/Air-Jordan-3.svg";

const App = () => {
  return (
    <>
      <div className="air"></div>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <svg className="login__logo" width="32px" height="32px">
              <use xlinkHref={`${sprite}#icon-jordan-1`}></use>
            </svg>
            <ul className="header__list">
              <li className="header_items">
                <a href="/" className="header__links">
                  HOME
                </a>
              </li>
              <li className="header_items">
                <a href="/" className="header__links">
                  SHOP
                </a>
              </li>
              <li className="header_items">
                <a href="/" className="header__links">
                  MAN
                </a>
              </li>
              <li className="header_items">
                <a href="/" className="header__links">
                  WOMEN
                </a>
              </li>
              <li className="header_items">
                <a href="/" className="header__links">
                  COLLECTION
                </a>
              </li>
            </ul>
            <div className="header__icons_container">
              <a href="/">
                {" "}
                <svg className="login__logo" width="24px" height="24px">
                  <use xlinkHref={`${sprite}#icon-search`}></use>
                </svg>
              </a>
              <a href="/" className="shop">
                <svg className="login__logo" width="24px" height="24px">
                  <use xlinkHref={`${sprite}#icon-shop`}></use>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="main">
        <div className="container">
          <h1 className="main__title">Nike Air Jordan</h1>
          <h2 className="main__subtitle">Be fashionable</h2>
          <p className="main__about">
            Inspired by the brand's rich legacy of performance basketball, it
            has the energy of a game shoe and a design that puts a fresh spin on
            classNameic details.
          </p>

          <div className="main__add_butons_container">
            <button className="main__add_buttons_1">
              <svg className="login__logo" width="24px" height="24px">
                <use xlinkHref={`${sprite}#icon-plus`}></use>
              </svg>
            </button>
            <button className="main__add_buttons_2">ADD TO CORT</button>
          </div>
        </div>
      </main>

      <footer>
        <div className="container">
          <div className="footer__wraper">
            <ul className="footer__icons_list">
              <li className="footer__icons_item">
                <a href="/" className="footer__icon_link">
                  <svg className="footer_icons">
                    <use xlinkHref={`${sprite}#icon-inst`}></use>
                  </svg>
                </a>
              </li>
              <li className="footer__icons_item">
                <a href="/" className="footer__icon_link">
                  <svg className="footer_icons">
                    <use xlinkHref={`${sprite}#icon-faceb`}></use>
                  </svg>
                </a>
              </li>
              <li className="footer__icons_item">
                <a href="/" className="footer__icon_link">
                  <svg className="footer_icons">
                    <use xlinkHref={`${sprite}#icon-twitt`}></use>
                  </svg>
                </a>
              </li>
            </ul>
            <div className="footer__sneakers_container">
              <ul className="footer__sneakers_list">
                <li className="footer__sneakers_items">
                  <div className="proba">
                    <img src={airJordan1} className="footer__goods" alt="air_jordan"></img>
                  </div>

                  <div className="footer_icons_container">
                    <svg className="footer__icons_1" width="24px" height="24px">
                      <use xlinkHref={`${sprite}#icon-addTo`}></use>
                    </svg>
                    <svg className="footer__icons_1" width="24px" height="24px">
                      <use xlinkHref={`${sprite}#icon-shop`}></use>
                    </svg>
                    <svg className="footer__icons_1" width="24px" height="24px">
                      <use xlinkHref={`${sprite}#icon-arrow`}></use>
                    </svg>
                  </div>
                </li>
                <li className="footer__sneakers_items">
                  <div className="proba">
                    <img src={airJordan2} className="footer__goods" alt="air_jordan"></img>
                  </div>

                  <div className="footer_icons_container">
                    <svg className="footer__icons_1" width="24px" height="24px">
                      <use xlinkHref={`${sprite}#icon-addTo`}></use>
                    </svg>
                    <svg className="footer__icons_1" width="24px" height="24px">
                      <use xlinkHref={`${sprite}#icon-shop`}></use>
                    </svg>
                    <svg className="footer__icons_1" width="24px" height="24px">
                      <use xlinkHref={`${sprite}#icon-arrow`}></use>
                    </svg>
                  </div>
                </li>
                <li className="footer__sneakers_items">
                  <div className="proba">
                    <img src={airJordan3} className="footer__goods" alt="air_jordan"></img>
                  </div>

                  <div className="footer_icons_container">
                    <svg className="footer__icons_1" width="24px" height="24px">
                      <use xlinkHref={`${sprite}#icon-addTo`}></use>
                    </svg>
                    <svg className="footer__icons_1" width="24px" height="24px">
                      <use xlinkHref={`${sprite}#icon-shop`}></use>
                    </svg>
                    <svg className="footer__icons_1" width="24px" height="24px">
                      <use xlinkHref={`${sprite}#icon-arrow`}></use>
                    </svg>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
