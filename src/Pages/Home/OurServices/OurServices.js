import React from "react";

const OurServices = () => {
  return (
    <div className="mb-32 mt-14">
      <div className="text-center">
        <h2 className="text-5xl font-bold mb-12">Our Services</h2>
        {/* <h2 className='md:mx-60 italic text-lg my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate nesciunt inventore eaque debitis aperiam laborum nostrum doloribus quia excepturi vitae.</h2> */}
      </div>
      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-20">
        <div>
          <div className="flex">
            <h5 className="text-2xl">&#9748;</h5>
            <p className="ml-4 text-2xl font-semibold italic">NEWSFEED</p>
          </div>
          <p className="ml-2">
            Stay ahead of the game with CareerEdge's personalized newsfeed. Get
            the latest industry news, career tips, and expert insights tailored
            to your interests and profession. Stay informed, stay inspired, and
            stay ahead with CareerEdge's powerful newsfeed.
          </p>
        </div>
        <div>
          <div className="flex">
            <h5 className="text-2xl">&#9749;</h5>
            <p className="ml-4 text-2xl font-semibold italic">JOBS</p>
          </div>
          <p className="ml-2">
            Find your dream job and take the next step in your career journey
            with CareerEdge. Browse thousands of job listings from top companies
            and industries, and find the perfect match for your skills and
            experience. Apply with confidence, and make the move that will shape
            your future, with CareerEdge.
          </p>
        </div>
        <div>
          <div className="flex">
            <h5 className="text-2xl">&#9815;</h5>
            <p className="ml-4 text-2xl font-semibold italic">HIRE</p>
          </div>
          <p className="ml-2">
            Find the best talent for your team with CareerEdge's powerful hiring
            solutions. Post job listings, screen candidates, and manage your
            hiring process with ease. Get access to a vast pool of qualified
            candidates, and make the right hire for your organization, with
            CareerEdge.
          </p>
        </div>
        <div>
          <div className="flex">
            <h5 className="text-2xl">&#9876;</h5>
            <p className="ml-4 text-2xl font-semibold italic">COURSE</p>
          </div>
          <p className="ml-2">
            Advance your skills and knowledge with CareerEdge's comprehensive
            online courses. Choose from a wide range of subjects, taught by
            experienced professionals and industry experts. Learn at your own
            pace, and build the skills you need to succeed in today's
            competitive job market. Empower your career with CareerEdge's online
            courses.
          </p>
        </div>
        <div>
          <div className="flex">
            <h5 className="text-2xl">&#9981;</h5>
            <p className="ml-4 text-2xl font-semibold italic">QUIZ</p>
          </div>
          <p className="ml-2">
            Test your skills and knowledge with CareerEdge's engaging quizzes.
            From aptitude tests to industry-specific challenges, our quizzes
            provide a fun and interactive way to assess your strengths and
            identify areas for improvement. Boost your confidence and take your
            career to the next level with CareerEdge's quizzes.
          </p>
        </div>
        <div>
          <div className="flex">
            <h5 className="text-2xl">&#9832;</h5>
            <p className="ml-4 text-2xl font-semibold italic">NETWORK</p>
          </div>
          <p className="ml-2">
            Expand your professional network and connect with like-minded
            individuals with CareerEdge. Build meaningful relationships, share
            knowledge and experiences, and explore new opportunities with a
            diverse community of professionals. Grow your network and advance
            your career with CareerEdge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
