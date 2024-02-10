import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Row from "./components/Row"
import requests from "./requests"
export default ()=>{
  return <>
  <Nav/>
  <Banner/>
  <Row label="Trending" method={requests.fetchTrending} backdrop={true}/>
  <Row label="Top Rated" method={requests.fetchTopRated}/>
  <Row label="Action" method={requests.fetchActionMovies}/>
  <Row label="Comedy" method={requests.fetchComedyMovies}/>
  <Row label="Horror" method={requests.fetchHorrorMovies}/>
  <Row label="Romance" method={requests.fetchRomanceMovies}/>
  <Row label="Documentaries" method={requests.fetchDocumentaries}/>
  </>
}

// http://api.themoviedb.org/3/movie/550?api_key=907a9983cf86e54d69fddbca9b092d1b