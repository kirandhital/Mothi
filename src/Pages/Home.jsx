import React from 'react';
import Navbar from "../Components/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from '../Components/Footer';

const Home = () => {
  const location = useLocation();

  const isHome = location.pathname === '/'; // show hero only on "/"

  return (
    <>
      <Navbar />


      {isHome && (
        <div className="relative w-full h-screen overflow-hidden bg-gradient-to-r from-blue-100 to-indigo-100 ">
          <img
            src="/cocktal.jpg"
            alt="background"
            className="absolute top-0 left-0 w-full h-full object-cover opacity-100 bg-no-repeat"
          />
          <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-24 py-16 text-left max-w-3xl">
            <p className="text-xl text-pink-500 font-semibold mb-2">Sip the Sparkle</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-4">
              Taste The Joy
            </h1>
            <p className="text-lg text-white mb-6">
              Discover the ultimate refreshment in every bubble. Natural flavor, pure fizz,
              and a splash of happiness in every sip.
            </p>
            <button className="bg-pink-500 text-white px-6 py-3 rounded-full text-lg hover:bg-pink-600 transition duration-300 shadow-lg">
              Explore Flavors
            </button>
          </div>
        </div>
      )}

      <Outlet />
      <Footer />
    </>
  );
};

export default Home;
