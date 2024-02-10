import { useState,useEffect } from "react"
import YouTube from "react-youtube"

export default ({ backDropPath, video, videos }) => {

    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    const [deviceHeight, setDeviceHeight] = useState(window.innerHeight);

    useEffect(() => {
      const handleResize = () => {
        setDeviceWidth(window.innerWidth);
        setDeviceHeight(window.innerHeight);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    console.log(video, videos)
    const opts = {
        height: deviceHeight,
        width: deviceWidth,
       
        playerVars: {
            autoplay: 1
        }
    }
    const [trailer, setTrailer] = useState(false);
    return (
        <div className="banner movie-cover" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${backDropPath})` }}>
            
            {trailer && <YouTube className="youtube" videoId={videos[0].key} opts={opts} />}
            <div className="banner-buttons">
                {videos && videos[0] && !trailer && <button className="banner-button z-index" onClick={() => setTrailer(trailer => !trailer)}>Watch Trailer</button>}
             
            </div>
            <div className="banner-fade"></div>
            {trailer && <button className="banner-button z-index" onClick={() => setTrailer(trailer => !trailer)}>Close</button> }
        </div>
    )
}