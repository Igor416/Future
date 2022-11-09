import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function MobileMenu({links}) {
  const [menuToggled, toggleMenu] = useState(false);

  useEffect(() => {
    document.getElementById('outlet').style.display = menuToggled ? 'none': 'block';
  }, [menuToggled])

  links = Object.assign(links, {
    '?member': 'Вступить'
  })

  return <div className={(menuToggled ? "position-fixed " : "") + "bg-white w-100"}>
    <div style={{backgroundColor: 'var(--mango)'}} className="d-flex flex-row-reverse flex-nowrap p-3 ps-0 align-items-center justify-content-between m-0">
      <div className="d-flex col-3 justify-content-end align-items-center">
        <div
          onClick={() => toggleMenu(!menuToggled)}
          style={{width: '12vw', height: '9vw'}}
          className="position-relative burger"
        >
          <div
            style={{top: 0}}
            className={(menuToggled ? "burger-sided" : "") + " rounded-pill transition position-absolute"}
          />
          <div
            style={{top: '3.6vw'}}
            className={(menuToggled ? "burger-top": "") + " rounded-pill transition position-absolute"}
          />
          <div
            style={{top: '3.6vw'}}
            className={(menuToggled ? "burger-bottom" : "") + " rounded-pill transition position-absolute"}
          />
          <div
            style={{top: '7.2vw'}}
            className={(menuToggled ? "burger-sided" : "") + " rounded-pill transition position-absolute"}
          />
        </div>
      </div>
      <div className="d-flex justify-content-start">
        <Link onClick={() => toggleMenu(false)} to="/">
          <img src="/images/textlogo.png" alt="text logo" width="75%" height="auto"></img>
        </Link>
      </div>
    </div>
    <div style={{left: 0, opacity: 0, height: '100vh', backgroundColor: 'var(--mango)'}} className={(menuToggled ? "menu-show" : "menu-hide") + " position-absolute transition d-flex flex-column"}>
      <div className="d-flex flex-column">
      {Object.keys(links).map((link, index) => {
      return (
        <Link onClick={() => toggleMenu(false)} key={index} to={'/' + link} className="link transition">
          <div className="w-100 p-3 d-flex justify-content-between border-bottom link">
            <span>{links[link]}</span>
            <FontAwesomeIcon icon='angle-right' color="var(--blue-violet)" />
          </div>
        </Link>
      )})}
      </div>
    </div>
  </div>
}