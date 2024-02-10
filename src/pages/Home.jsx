import Banner from "../components/Banner"
import Row from "../components/Row"


import requests from "../requests"
export default () => {
    return (
        <>
            <Banner />
            <Row label="Trending" method={requests.fetchTrending} backdrop={true} />
            <Row label="Top Rated" method={requests.fetchTopRated} />
            <Row label="Action" method={requests.fetchActionMovies} />
            <Row label="Comedy" method={requests.fetchComedyMovies} />
            <Row label="Horror" method={requests.fetchHorrorMovies} />
            <Row label="Romance" method={requests.fetchRomanceMovies} />
            <Row label="Documentaries" method={requests.fetchDocumentaries} />
        </>
    )
}