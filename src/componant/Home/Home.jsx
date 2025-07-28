import React from 'react';

const Home = () => {
    return (
        <div id='home'>
          
            <header className="bg-success  text-white text-center py-5" style={{ backgroundColor: 'rgb(26, 189, 156)' }}>
      <div className="container d-flex pt-5 flex-column align-items-center">
        <img src="avataaars.svg" alt="" className='w-25 ' />
        
        
         

        <h1 className="text-uppercase fw-bold mb-3">Start Framework</h1>

        {/* Divider */}
        <div className="d-flex align-items-center justify-content-center mb-3">
          <div className="border-top border-white mx-3" style={{ width: '60px' }}></div>
          <i className="fas fa-star"></i>
          <div className="border-top border-white mx-3" style={{ width: '60px' }}></div>
        </div>

        <p className="fs-5">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </header>
            

           
        </div>
    );
}

export default Home;
