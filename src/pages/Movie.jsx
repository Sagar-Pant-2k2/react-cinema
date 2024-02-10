import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Banner from "../components/Banner";
import axios from "../axios";
import MovieCover from "../components/MovieCover";
import Row from '../components/Row'
import SimilarMovies from '../components/SimilarMovies'
const apiKey = "907a9983cf86e54d69fddbca9b092d1b"

export default () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);
    
    const url_movie_id = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos,similar`

    const scrollToTop = () => {
        const scrollStep = -window.scrollY / (500 / 15); 
        const scrollInterval = setInterval(() => {
          if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
          } else {
            clearInterval(scrollInterval);
          }
        }, 15); 
      };

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true);
            scrollToTop();
            try {
                const response_movie_id = await fetch(url_movie_id);
                
                if (!response_movie_id.ok) throw new Error({ message: "Error" });

                const movieData = await response_movie_id.json();
                console.log(movieData);
                setData(movieData);
            }
            catch (error) {
                console.log(error);
                setError({ "message": "some error occured" });
            }
            setLoading(false)
        }
        fetchMovie();
    }, [url_movie_id]);

    console.log("these are similar",data?data.similar.results:"not")
    return (
        <>
            {loading && <h1>Loading data</h1>}
            {error && <h1>Error occured</h1>}
            {data &&
                <>
                    <MovieCover backDropPath={data.backdrop_path} video={data.video} videos={data.videos.results} />
                    <div className="movie-details">

                        <h1>MOVIE NAME : <span className="movie-name">{data.title || data.name}</span></h1>
                        {data.tagline && <h1 className="movie-tagline">"{data.tagline}"</h1>}
                        <h1>Overview : </h1><p> {data.overview}</p>
                        
                    </div>
                    {data?data.similar && <><h1>Similar Movies</h1><SimilarMovies data = {data.similar.results} /></>:<></>}
                </>
            }
        </>
    )
}