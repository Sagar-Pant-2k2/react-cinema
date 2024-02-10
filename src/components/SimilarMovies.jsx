import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default ({ data, backdrop }) => {
    const [active, setActive] = useState(-1);
    const navigate = useNavigate();
    return (
        <div className="movie-row-container">
            {
                data.map(movie =>
                    <div key={movie.id} className='poster-wrapper'>
                        <img
                            onMouseOver={() => setActive(movie.id)}
                            onMouseLeave={() => setActive(-1)}
                            onClick={() => navigate(`/movie/${movie.id}`)}
                            key={movie.id}
                            src={"https://image.tmdb.org/t/p/original" + (backdrop ? movie.backdrop_path : movie.poster_path)}
                            className={`movie-row-item ${active === -1 ? '' : ((active !== movie.id) ? "notActive" : "active")}`}
                        />
                    </div>
                )
            }
        </div>
    )
}