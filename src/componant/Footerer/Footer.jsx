import React from 'react';

const Footer = () => {
    return (
        <div>
               <footer className="text-center text-white " style={{ backgroundColor: '#2c3e50' }}>
      <div className="container p-4">
        <div className="row pb-5 pt-5">
          {/* Location */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-3">LOCATION</h5>
            <p className="mb-0">2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          {/* Social Media */}
          <div className="col-lg-4  mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-3">AROUND THE WEB</h5>
            <div className="d-flex justify-content-center gap-3">
              <a className="btn btn-outline-light btn-social rounded-circle" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-light btn-social rounded-circle" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-light btn-social rounded-circle" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-outline-light btn-social rounded-circle" href="#">
                <i className="fas fa-globe"></i>
              </a>
            </div>
          </div>

          {/* About */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="text-uppercase mb-3">ABOUT FREELANCER</h5>
            <p className="mb-0">
              Freelance is a free to use, licensed Bootstrap theme created by Route
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center p-3" style={{ backgroundColor: '#1a252f' }}>
        © Your Website 2021
      </div>
    </footer>

        </div>
    );
}

export default Footer;
