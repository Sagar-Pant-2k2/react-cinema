import { useEffect, useState } from 'react';
import logo from '../../public/Images/ReactCinema.png'
import { useNavigate } from 'react-router-dom';
export default () => {
    const [flag, setFlag] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const handleScroll = () => {
            let dist = window.scrollY;
            if (dist > 200) {
                setFlag(true);
            } else {
                setFlag(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`main-navigation ${flag ? 'scrolled' : ''}`}>
            <img src={logo} id='logo' onClick={() => navigate('/')}></img>
        </nav>
    );
};
