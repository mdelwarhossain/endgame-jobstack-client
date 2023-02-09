import React from "react";
import { TypeAnimation } from "react-type-animation";
import banner from "../../../assest/images/Devices-pana.png";
import { useContext } from "react";
import { InfoContext } from "../../../contexts/UserInfoProvider";

const Banner = () => {
  const { userDetails } = useContext(InfoContext);
  console.log(userDetails);

  return (
    <div data-theme="night">
      {/* style={{ backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: 'center center' }} */}
      <div className="hero py-28 hero-overlay bg-opacity-20">
        <div className="hero-content flex-col lg:flex-row">
          <img
            data-aos="fade-right"
            data-aos-duration="2000"
            alt=""
            className="h-[480px] w-[500px] mt-10 rounded-lg shadow-2xl lg:mr-12 ring-2 ring-offset-4  0"
            src={banner}
          />
          <div>
            <h2 className="text-5xl mt-14 text-white">
              Empower Your Career with Jobstack
            </h2>
            <div className="text-orange-400 mt-4">
              <TypeAnimation
                // Same String at the start will only be typed once, initially
                sequence={["Connect", 1000, "Grow", 1000, "Succeed", 1000]}
                speed={50} // Custom Speed from 1-99 - Default Speed: 40
                style={{ fontSize: "2em" }}
                wrapper="span" // Animation will be rendered as a <span>
                repeat={Infinity} // Repeat this Animation Sequence infinitely
              />
            </div>
            <div className="md:w-[650px] mt-6 text-white font-medium">
              <p>
                Jobstack is your ultimate career platform, connecting you with
                job opportunities, professional networks, and the tools you need
                to grow and succeed in your career. Join our community today and
                take control of your future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
