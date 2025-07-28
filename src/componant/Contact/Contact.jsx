import React from 'react';
import Navber from '../Navbar/Navber';

const Contact = () => {
    return (
         <div className="container  pt-5 cont my-5">
      <h2 className="text-center fw-bold">
        CONATCT SECTION
        <div className="d-flex justify-content-center align-items-center mt-2">
          <hr className="w-25 me-2" />
          <span>★</span>
          <hr className="w-25 ms-2" />
        </div>
      </h2>

      <form className="mt-5">
        <div className="mb-3">
          <label htmlFor="userName" className="form-label">userName</label>
          <input type="text" className="form-control" id="userName" />
        </div>

        <div className="mb-3">
          <label htmlFor="userAge" className="form-label">userAge</label>
          <input type="number" className="form-control" id="userAge" />
        </div>

        <div className="mb-3">
          <label htmlFor="userEmail" className="form-label">userEmail</label>
          <input type="email" className="form-control" id="userEmail" />
        </div>

        <div className="mb-3">
          <label htmlFor="userPassword" className="form-label">userPassword</label>
          <input type="password" className="form-control" id="userPassword" />
        </div>

        <button type="submit" className="btn btn-success">send Message</button>
      </form>
    </div>
    );
}

export default Contact;
