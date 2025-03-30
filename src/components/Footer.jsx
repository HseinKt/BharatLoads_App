import { Facebook, Instagram, Linkedin, Mail, Phone, Twitter } from 'lucide-react';
import '../styles/Footer.css'

const Footer = () => {
    return ( 
        <footer className='footer'>
            <div className='container'>
                <div className='grid'>
                    <div>
                        <h3 className='logo'>Hussein Kteish</h3>
                        <p className='description'>Connecting India through efficient and reliable logistics solutions.</p>   
                    </div>

                    <div>
                        <h4 className='title'>Quick Links</h4>
                        <ul className='links'>
                            <li><a href='#home' className='link'>Home</a></li>
                            <li><a href='#features' className='link'>Features</a></li>
                            <li><a href='#about' className='link'>About</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className='title'>Contact Us</h4>
                        <div>
                            <p className='contactItem'> <Mail className='icon' /> hseinkteish21@gmail.com </p>
                            <p className='contactItem'> <Phone className='icon' /> +961 76 626 035 </p>
                        </div>
                    </div>

                    <div>
                        <h4 className='title'>Follow Us</h4>
                        <div className='socialLinks'>
                            <a href='#' className='socialLink'  ><Facebook className="icon"/></a>
                            <a href='#' className='socialLink'  ><Twitter className="icon"/></a>
                            <a href='#' className='socialLink'  ><Instagram className="icon"/></a>
                            <a href='#' className='socialLink'  ><Linkedin className="icon"/></a>
                        </div>
                    </div>
                </div>
            
                <div className='copyright'>
                    <p>&copy; Hussein Kteish. All rights reserved.</p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;