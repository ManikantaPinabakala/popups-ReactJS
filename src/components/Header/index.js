import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="header-container">
    <Link to="/">
      <img
        src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
        alt="website logo"
        className="website-logo"
      />
    </Link>
    <Popup
      modal
      trigger={
        <button
          type="button"
          className="icon-button"
          data-testid="hamburgerIconButton"
          aria-label="menu button"
        >
          <GiHamburgerMenu className="menu-icon" />
        </button>
      }
      className="popup-content"
    >
      {close => (
        <div className="popup-container">
          <button
            type="button"
            className="icon-button close-button"
            aria-label="close button"
            data-testid="closeButton"
            onClick={() => close()}
          >
            <IoMdClose className="close-icon" />
          </button>
          <ul className="popup-list">
            <li className="popup-list-item">
              <Link className="popup-link" to="/" onClick={() => close()}>
                <AiFillHome className="popup-link-icon" />
                <p className="popup-link-text">Home</p>
              </Link>
            </li>
            <li className="popup-list-item">
              <Link className="popup-link" to="/about" onClick={() => close()}>
                <BsInfoCircleFill className="popup-link-icon" />
                <p className="popup-link-text">About</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </Popup>
  </div>
)

export default withRouter(Header)
