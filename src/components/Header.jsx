import React, { useState } from 'react';
import { Menu, TruckIcon, X } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='head'>
        <div className='container'>
            <nav>
                <div className='logo'>
                    <TruckIcon className='logoIcon'/>
                    <span className='logoText'>BharatLoads</span>
                </div>

                <div className='desktopNav'> 
                    <div className='navLinks'>
                        <a href='#' className='link'>Home</a>
                        <a href='#' className='link'>Features</a>
                        <a href='#' className='link'>About</a>
                        <button className='btn'>Download App</button>
                    </div>
                </div>

                <button 
                    className='menuButton'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X/> : <Menu/>}
                </button>
            </nav>

            {isMenuOpen && 
                <div className='mobileNav'>
                    <div className='mobileLinks'>
                        <a href='#' className='link'>Home</a>
                        <a href='#' className='link'>Features</a>
                        <a href='#' className='link'>About</a>
                        <button className='btn'>Download App</button>
                    </div>
                </div>
            }
        </div>
    </header>
  );
};

export default Header;