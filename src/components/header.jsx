import { ReactComponent as SearchIcon } from "../assets/img/search-solid.svg";
import { ReactComponent as EmailIcon } from "../assets/img/envelope-regular.svg";

function Header({
  handleChangeInput,
  input,
  choosenThings,
  handleChangePopup,
  logoUrl,
  title
}) {

  return (
    <div className="header__wrapper">
      <div className="header__dropdown">
        <div className="header__dropdown-icon dropdown__icon">
          <div className="dropdown__icon-part"></div>
        </div>
      </div>
      <div className="header__rightPart-wrapper">
        <div className="header__rightPart">
          <div className="header__logo-wrapper">
            <div className="header__logo">
              <img src={logoUrl} alt="Logo" />
            </div>
            <div className="header__title">
              <p>{title}</p>
            </div>
          </div>
          <div className="header__search-email">
            <div className="header__search-wrapper">
              <div className="header__input-wrapper">
                <input
                  type="text"
                  className="header__input"
                  value={input}
                  onChange={(e) => handleChangeInput(e.target.value)}
                />
              </div>
              <div className="header__search">
                <SearchIcon className="header__search-icon" />
              </div>
            </div>
            <div
              className={`header__email-wrapper ${Object.keys(choosenThings).length ? 'pointer' : ''}`}
              onClick={() => {if (Object.keys(choosenThings).length) handleChangePopup(true)}}
            >
              <div className="header__email">
                <EmailIcon className="header__email-icon" />
              </div>
              <div className="header__email-info">
                <p>EMAIL</p>
                <p>{Object.keys(choosenThings).length}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
