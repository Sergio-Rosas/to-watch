import {useState, useEffect} from "react";

const KEY = "e3a77c91";

const ids = [
  "tt4158110",
  "tt2401256",
  "tt7440726",
  "tt3829920",
  "tt10706602",
  "tt1399664",
  "tt8291284",
  "tt12887770",
  "tt13391708",
  "tt14688458",
  "tt6506264",
  "tt15791034",
  "tt0138704",
  "tt5715874",
  "tt6265828",
  "tt6053438",
  "tt2401878",
  "tt5247022",
  "tt0473753",
  "tt1182345",
  "tt2316411",
];

export function useMovies() {
    const [isLoading, setIsLoading] = useState(false);
    const [moviesList, setMoviesList] = useState([]);

    useEffect(
        function () {
            async function getMovieDetails() {

                setIsLoading(true);

                const movieList = [];

                for (let id of ids) {
                    const res = await fetch(
                        `http://www.omdbapi.com/?apikey=${KEY}&i=${id}`
                    );
                    const data = await res.json();
                    //console.log(data);
                    movieList.push(data);
                }
                setIsLoading(false);
                setMoviesList(movieList);
                //console.log(Object.keys(movieList.at(0)));
                //console.log(Object.keys(movieList.at(19)));
            }

            getMovieDetails();
        },
        []
    );

    return [moviesList, isLoading];
}