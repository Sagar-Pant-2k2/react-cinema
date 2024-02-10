import { useNavigate } from 'react-router-dom';
import axios from '../axios';
import React, { useEffect, useState } from 'react';

export default ({ label, method, backdrop }) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState([]);
    const [active, setActive] = useState(-1);

    useEffect(() => {
        setLoading(true);
        const fetchData = async () => {
            try {
                const response = await axios.get(method);
                if (response.status !== 200) {
                    throw new Error('Failed to load movies');
                }
                setData(response.data.results); // Set the fetched data into the state
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        };
        setTimeout(() => {
            fetchData();
        }, 1000);

    }, [method]);
    const navigate = useNavigate();
    return (
        <div className="movie-row">
            <h1>{label}</h1>
            {loading && <h1>Loading Movies</h1>}
            {error && (
                <>
                    <h1>Could not fetch movies</h1>
                    <p>try again later </p>
                </>
            )}
            {!loading && data &&
                <div className="movie-row-container">
                    {
                        data.map(movie =>
                            <div key={movie.id} className='poster-wrapper'>
                            <img
                                onMouseOver={() => setActive(movie.id)}
                                onMouseLeave={() => setActive(-1)}
                                onClick={()=>navigate(`/movie/${movie.id}`)}
                                key={movie.id}
                                src={"https://image.tmdb.org/t/p/original" + (backdrop ? movie.backdrop_path : movie.poster_path)}
                                className={`movie-row-item ${active === -1 ? '' : ((active !== movie.id)?"notActive":"active")}`}
                            />
                            </div>
                        )
                    }
                </div>
            }

        </div>
    );
};
