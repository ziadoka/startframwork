import React from 'react';
import Navber from '../Navbar/Navber';
import App from './../../App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaStar } from 'react-icons/fa';

const About = () => {
    return (
            <section className="bg-teal sec_BOUT text-white py-5 text-center d-flex align-items-center">
      <div className="container">
        <h2 className="text-uppercase fw-bold mb-4">About Component</h2>

        {/* Icon Divider */}
        <div className="d-flex justify-content-center align-items-center mb-4">
          <div className="border-top border-white w-25"></div>
          <FaStar className="mx-3" />
          <div className="border-top border-white w-25"></div>
        </div>

        {/* Text Columns */}
        <div className="row justify-content-center">
          <div className="col-md-5">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes
              the complete source files including HTML, CSS, and JavaScript as well as optional
              SASS stylesheets for easy customization.
            </p>
          </div>
          <div className="col-md-5">
            <p>
              Freelancer is a free bootstrap theme created by Route. The download includes
              the complete source files including HTML, CSS, and JavaScript as well as optional
              SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </section>

    );
}

export default About;
