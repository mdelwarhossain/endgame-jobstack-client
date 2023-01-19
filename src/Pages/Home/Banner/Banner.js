import React from 'react';
import banner from '../../../assest/images/Banner.jpg'

const Banner = () => {
    return (
       <div
      className="hero"
      style={{ backgroundImage: `url(${banner})`, height: "700px" }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center">
        <div className="max-w-lg">
          <h1 className="mb-5 text-5xl text-info font-bold">JOBSTACK</h1>
          <p className="text-xl text-white my-6 font-semibold ">Everyone on the app is committed to helping each other in the best way they can. Find your dream job & build your network with professionals.</p>
          <button className="btn mt-4 btn-outline btn-warning  ">Get Started</button>
        </div>
      </div>
    </div>
    );
};

export default Banner;