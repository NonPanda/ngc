import React from "react";
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpg";


export default function Navbar({ user }) {
 const [show,isShow] = useState(false);


    const toggleNavbar = () => {
        isShow(!show);
    }
    

    

    return (


        <>
        <div className="w-full flex items-center justify-between px-4 md:px-6 py-2 bg-primary border-b border-slate-200 md:shadow-sm fixed z-50">
            <div className="flex items-center -space-x-4">
            <button className="rounded-lg" onClick={toggleNavbar}>
                <div className="w-6 h-[3px] bg-text"></div>
                <div className="w-6 h-[3px] bg-text mt-1"></div>
                <div className="w-6 h-[3px] bg-text mt-1"></div>
            </button>
            <Link to="/">
                <img src={logo} alt="logo" className="w-28 h-12" />
            </Link>
            </div>

            
            <div className="hidden sm:flex items-center space-x-4 gap-4">
                <Link to="/link1" className="text-md font-medium text-text hover:text-accent">Link1</Link>
                <Link to="/link2" className="text-md font-medium text-text hover:text-accent">Link2</Link>
                <Link to="/link3" className="text-md font-medium text-text hover:text-accent">Link3</Link>
                <Link to="/link4" className="text-md font-medium text-text hover:text-accent">Link4</Link>
            </div>
                <Link to="/signup" className="text-text px-4 py-2 hover:border-secondary border-2 border-accent rounded-lg font-medium hover:bg-secondary hover:text-primary transition-all duration-700 hidden sm:flex">Login</Link>
            
            <div className="flex sm:hidden">
                <button className="p-2" onClick={toggleNavbar}>
                    <div className="w-6 h-[2px] bg-text"></div>
                    <div className="w-6 h-[2px] bg-text mt-1"></div>
                    <div className="w-6 h-[2px] bg-text mt-1"></div>
                </button>
            </div>
        </div>

        <div className={`fixed top-[40px] left-0 w-full bg-primary shadow-lg transition-all duration-300 transform z-40 
        ${show ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'} sm:hidden`}>
            <div className="flex flex-col p-4 space-y-4">
                <Link to="/link1" className="text-lg font-medium text-text py-2 px-4 hover:bg-blue-50 rounded-md" onClick={toggleNavbar}>Link1</Link>
                <Link to="/link2" className="text-lg font-medium text-text py-2 px-4 hover:bg-blue-50 rounded-md" onClick={toggleNavbar}>Link2</Link>
                <Link to="/link3" className="text-lg font-medium text-text py-2 px-4 hover:bg-blue-50 rounded-md" onClick={toggleNavbar}>Link3</Link>
                <Link to="/link4" className="text-lg font-medium text-text py-2 px-4 hover:bg-blue-50 rounded-md" onClick={toggleNavbar}>Link4</Link>
                <Link to="/signup" className="bg-accent text-white px-4 py-2 rounded font-medium hover:bg-blue-800 transition-all text-center" onClick={toggleNavbar}>Login</Link>
            </div>
        </div>
    </>
    
      
    
    );
}
