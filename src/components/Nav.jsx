import { useEffect, useState } from 'react';
import logo from '../../public/Images/ReactCinema.png'
export default () => {
    const [flag, setFlag] = useState(false);

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
            <img src={logo} id='logo'></img>
        </nav>
    );
};
