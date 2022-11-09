import { Link } from "react-router-dom";

import MemberButton from "../Reusables/MemberButton";

export default function Menu({links}) {
  return <div
    className="d-flex px-5 py-4 justify-content-between align-items-center"
    style={{
        backgroundColor: 'var(--mango)', height: '10vh'
      }}>
    <div className="d-flex justify-content-start">
      <Link to="/">
        <img src="/static/images/textlogo.png" alt="text logo" style={{height: 'calc(10vh - 3rem)', width: 'auto'}}></img>
      </Link>
    </div>
    <nav className="d-flex justify-content-end align-items-center">
    {Object.keys(links).map((link, index) => {
    return (
      <div key={index} className="mx-3 h4">
        <Link to={'/' + link} className="link transition">
          <span>{links[link]}</span>
        </Link>
      </div>
    )})}
      <div className="ms-3">
        <MemberButton />
      </div>
    </nav>
  </div>
}