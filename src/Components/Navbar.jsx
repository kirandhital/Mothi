import React from 'react';
import { FcHome, FcMenu, FcAbout, FcContacts } from "react-icons/fc";
import {
    Navbar as MTNavbar,
    MobileNav,
    Typography,
    Button,
    IconButton,
} from "@material-tailwind/react";

export default function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    
    const navItems = [
        { name: 'Home', icon: <FcHome className="text-xl" /> },
        { name: 'Menu', icon: <FcMenu className="text-xl" /> },
        { name: 'About', icon: <FcAbout className="text-xl" /> },
        { name: 'Contact', icon: <FcContacts className="text-xl" /> },
    ];

    const navList = (
        <ul className="flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:gap-8 mt-4 lg:mt-0">
            {navItems.map((item) => (
                <Typography
                    key={item.name}
                    as="li"
                    variant="small"
                    className="list-none group"
                >
                    <a
                        href="#"
                        className="flex items-center gap-1 text-gray-700 hover:text-violet-600 transition-colors duration-300 relative font-medium"
                    >
                        {item.icon}
                        <span>{item.name}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-violet-600 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                </Typography>
            ))}
        </ul>
    );

    return (
        <MTNavbar className="sticky top-0 z-50 max-w-full rounded-none bg-white/80 backdrop-blur-md px-4 py-3 lg:px-8 lg:py-4 shadow-md border border-gray-100">
            <div className="container mx-auto flex items-center justify-between">
               
                <Typography
                    as="a"
                    href="#"
                    className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-blue-500 bg-clip-text text-transparent"
                >
                    MOTHI
                </Typography>

                
                <div className="hidden lg:flex items-center gap-8">
                    {navList}

                    <div className="flex items-center gap-3">
                        <Button
                            size="sm"
                            variant="outlined"
                            className="rounded-full px-6 border-violet-600 text-violet-600 hover:bg-violet-50 transition"
                        >
                            Log In
                        </Button>
                        <Button
                            size="sm"
                            className="rounded-full px-6 bg-gradient-to-r from-violet-600 to-blue-500 text-white shadow-md hover:shadow-lg transition"
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>

                
                <IconButton
                    variant="text"
                    className="lg:hidden text-gray-800 focus:outline-none"
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </IconButton>
            </div>

            
            <MobileNav open={openNav}>
                <div className="container mx-auto pt-4 pb-6">
                    {navList}
                    <div className="flex flex-col gap-3 mt-4">
                        <Button
                            fullWidth
                            variant="outlined"
                            className="rounded-full border-violet-600 text-violet-600 hover:bg-violet-50"
                        >
                            Log In
                        </Button>
                        <Button
                            fullWidth
                            className="rounded-full bg-gradient-to-r from-violet-600 to-blue-500 text-white"
                        >
                            Sign Up
                        </Button>
                    </div>
                </div>
            </MobileNav>
        </MTNavbar>
    );
}
