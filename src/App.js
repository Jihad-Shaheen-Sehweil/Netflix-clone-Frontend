import "./css/App.css";
import requests from "./requests";
import Row from "./components/Row";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Banner />
            <Row
                title="NETFLIX ORIGNALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="Trending now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row
                title="Action Movies"
                fetchUrl={requests.fetchTopActionMovies}
            />
            <Row
                title="Comedy Movies"
                fetchUrl={requests.fetchTopComedyMovies}
            />
            <Row
                title="Horror Movies"
                fetchUrl={requests.fetchTopHorrorMovies}
            />
            <Row
                title="Romance Movies"
                fetchUrl={requests.fetchTopRomanceMovies}
            />
            <Row
                title="Documentaries"
                fetchUrl={requests.fetchTopDocumentaries}
            />
        </div>
    );
}

export default App;
