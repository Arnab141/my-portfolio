import React from 'react';
// import facebook from '../../public/icons/facebook.png';
import {Link} from 'react-router-dom'




function Footer() {
  return (

    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-muted">Create by Arnab, In</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li className="ms-3">
            <Link className="text-muted" to="https://www.linkedin.com/in/arnabpramanik43/">
              <img src="/icons/linkedin.png" alt="Linkedin" width="24" height="24" />
            </Link>
          </li>
          <li className="ms-3">
            <Link className="text-muted" to="https://github.com/Arnab141">
              <img src="/icons/github.png" alt="github" width="24" height="24" />
            </Link>
          </li>
          <li className="ms-3">
            <Link className="text-muted" to="https://www.facebook.com/profile.php?id=100071509121247">
              <img src="/icons/facebook.png" alt="Facebook" width="24" height="24" />
            </Link>
          </li>

        </ul>

      </footer>
    </div>
  );
}

export default Footer;