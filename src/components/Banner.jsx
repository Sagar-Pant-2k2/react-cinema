import { useEffect, useState } from 'react';
import bannerImage from '../../public/Images/banner-Image.webp';
import './banner.css'
import axios from '../axios'
import requests from '../requests';
import { useNavigate } from 'react-router-dom';

export default () => {
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPopular = async () => {
            setLoading(true);
            try {
                const res = await axios.get(requests.fetchPopular);
                if (res.status === 200) {
                 
                    const randIndex = Math.floor(Math.random() * res.data.results.length);

                    setResponse(res.data.results[randIndex]); // Set response data, not the whole response object

                } else {
                    throw new Error('Error occurred'); // Throw an error for non-200 status codes
                }
            } catch (err) {
                setError(err.message); // Set error message received from the API response
            }
            setLoading(false);
        };
        fetchPopular();

    }, []);
    const navigate = useNavigate();

    return (<>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {response &&
            <div className="banner" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${response.backdrop_path})` }}>
                <div className="banner-box">
                    <h1 className="banner-title">{response.title}</h1>
                    <h2 className="banner-description">{response.overview.length < 200 ? response.overview : response.overview.slice(0, 200) + '...'}
                    </h2>
                    <div className="banner-buttons">
                        <button className="banner-button" onClick={() => navigate(`/movie/${response.id}`)}>More</button>
                    </div>
                </div>
                <div className="banner-fade"></div>
            </div>}
    </>
    );
}
