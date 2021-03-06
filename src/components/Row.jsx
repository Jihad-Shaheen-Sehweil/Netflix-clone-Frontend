import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../css/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setmovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    // A snippet of code which runs based on a specific condition
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setmovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    //if [(empty)], run once when the row loads, and dont run again
    // console.table(movies);
    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };
    const handleClick = (movie) => {
        console.log(movie);
        if (trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(
                movie?.name || movie?.title || movie?.original_name || ""
            )
                .then((url) => {
                    const urlParams = new URLSearchParams(new URL(url).search);
                    console.log(urlParams);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((err) => console.log(err));
        }
    };

    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row_posters">
                {movies.map((movie) => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${
                            isLargeRow && "row_posterLarge"
                        }`}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    );
}

export default Row;
