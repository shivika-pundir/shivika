import React from "react";
import Photo from "../../assets/profile.png";

import {
  FaGoogleScholar,
  FaBookAtlas,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdContact } from "react-icons/io";

const Profile = () => {
  return (
    <div className="flex flex-col items-center p-5 bg-amber-800 rounded-lg shadow-lg h-full">
      {/* Profile Picture */}
      <div className="mb-5">
        <img
          src={Photo}
          alt="profile picture"
          width="200px"
          className="rounded-md object-cover"
        />
      </div>

      {/* Name */}
      <h2 className="text-2xl font-semibold mb-4 text-white text-left px-2">
        Shivika Pundir
      </h2>

      {/* Links */}
      <div className="space-y-3 px-2">
      <a
          href="https://www.linkedin.com/in/shivika-pundir/"
          className="flex items-center justify-center space-x-2 text-white hover:text-blue-700"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>
        
        <a
          href="mailto: shivika@es.iitr.ac.in"
          className="flex items-center justify-center space-x-2 text-white hover:text-red-500"
        >
          <MdEmail />
          <span>Email</span>
        </a>

        <a
          href="tel:+91 8979926686"
          className="flex items-center justify-center space-x-2 text-white hover:text-green-600"
        >
          <IoMdContact />
          <span>Contact</span>
        </a>

        <a
          href="https://github.com/shivika-pundir"
          className="flex items-center justify-center space-x-2 text-white hover:text-gray-800"
        >
          <FaGithub />
          <span>Github</span>
        </a>

        <a
          href="https://orcid.org/0009-0002-4801-7613"
          className="flex items-center justify-center space-x-2 text-white hover:text-green-500"
        >
          <FaBookAtlas />
          <span>ORCID</span>
        </a>

        {/* <a
          href="https://scholar.google.com/citations?hl=en&user=VaoQmPUAAAAJ"
          className="flex items-center justify-center space-x-2 text-gray-700 hover:text-blue-500"
        >
          <FaGoogleScholar />
          <span>Google Scholar</span>
        </a> */}
        
      
       
       
        
      </div>
    </div>
  );
};

export default Profile;
