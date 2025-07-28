import React from 'react';



const Portfolio = () => {
    return (
       <div className='container pt-5 pro'>
        <div className='pt-5'>   <h2 className="text-center pt-5 fw-bold">
        CONATCT SECTION
        <div className="d-flex justify-content-center align-items-center mt-2">
          <hr className="w-25 me-2" />
          <span>★</span>
          <hr className="w-25 ms-2" />
        </div>
      </h2></div>
       
    
      {/* <img src="imgi_2_port2.png" alt="" /> */}
      


       <div className='d-flex g-2 '>
      

      <div className="container pt-5">
        <img src="myimage.jpg.png" alt="Avatar" className="image w-100hh  rounded-2 " />
        
      </div><div className="container pt-5">
        <img  src="imgi_2_port2.png" alt="Avatar" className="image w-100 rounded-2" />
        
      </div><div className="container pt-5">
        <img src="imgi_3_port3.png" alt="Avatar" className="image w-100 rounded-2" />
        
      </div>
    </div>
      <div className='d-flex g-2 pt-5 pb-5'>
      

      <div className="container ">
        <img src="myimage.jpg.png" alt="Avatar" className="image w-100 rounded-2 " />
        
      </div><div className="container ">
        <img  src="imgi_2_port2.png" alt="Avatar" className="image w-100 rounded-2" />
        
      </div><div className="container  ">
        <img src="imgi_3_port3.png" alt="Avatar" className="image w-100 rounded-2" />
        
      </div>
    </div>
    </div>

    );
}

export default Portfolio;
