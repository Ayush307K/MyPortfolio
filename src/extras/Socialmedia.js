import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin , faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Socialmedia.css';

const socialMediaLinks = [
    { href: "https://github.com/Adityasiingh14", icon: faGithub },
    { href: "https://www.instagram.com/", icon: faInstagram },
    { href: "https://www.linkedin.com/in/aditya-kumar-singh-a10901284", icon: faLinkedin },
    { href: "https://x.com/Adityasiingh14", icon: faTwitter }
];
function SocialMedia(){
    return(
        <div className='social-media-links'>
            {socialMediaLinks.map((link) => (
                <a href={link.href} target="_blank" className="icon-link" rel="noreferrer">
                <FontAwesomeIcon icon={link.icon}  />
                </a>
            ))}
        </div>
    )
}

export default SocialMedia;