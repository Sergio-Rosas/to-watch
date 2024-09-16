import {useState, useEffect} from "react";

const KEY = "e3a77c91";

const movies = [
    {'id': 'tt4158110', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt2401256', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt7440726', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt3829920', 'seen': false, 'available': true, "netflix": true},
    {'id': 'tt10706602', 'seen': false, 'available': true, "netflix": false},
    {'id': 'tt1399664', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt8291284', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt12887770', 'seen': true, 'available': true, "netflix": false},
    {'id': 'tt13391708', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt14688458', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt6506264', 'seen': false, 'available': true, "netflix": false},
    {'id': 'tt15791034', 'seen': true, 'available': true, "netflix": true},
    {'id': 'tt0138704', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt5715874', 'seen': true, 'available': true, "netflix": false},
    {'id': 'tt6265828', 'seen': false, 'available': true, "netflix": false},
    {'id': 'tt6053438', 'seen': false, 'available': true, "netflix": false},
    {'id': 'tt2401878', 'seen': false, 'available': true, "netflix": true},
    {'id': 'tt5247022', 'seen': false, 'available': true, "netflix": false},
    {'id': 'tt0473753', 'seen': false, 'available': true, "netflix": false},
    {'id': 'tt1182345', 'seen': false, 'available': true, "netflix": false},
    {'id': 'tt2316411', 'seen': true, 'available': true, "netflix": false},
    {'id': 'tt1715853', 'seen': false, 'available': true, "netflix": false},
    {'id': 'tt11057302', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt9620288', 'seen': false, 'available': true, "netflix": false},
    {'id': 'tt1906426', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt3612616', 'seen': false, 'available': true, "netflix": false},
    {'id': 'tt16300962', 'seen': true, 'available': true, "netflix": false},
    {'id': 'tt17009710', 'seen': false, 'available': true, "netflix": false},
    {'id': 'tt21613384', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt1629377', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt27503384', 'seen': true, 'available': true, "netflix": false},
    {'id': 'tt1152758', 'seen': true, 'available': true, "netflix": false},
    {'id': 'tt18925334', 'seen': false, 'available': true, "netflix": false},
    {'id': 'tt15679400', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt17279496', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt26736843', 'seen': true, 'available': true, "netflix": false},
    {'id': 'tt21874760', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt23468450', 'seen': true, 'available': true, "netflix": false},
    {'id': 'tt3099498', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt8372298', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt29268110', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt7670212', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt27726262', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt33050454', 'seen': false, 'available': false, "netflix": false},
    {'id': 'tt12584954', 'seen': true, 'available': true, "netflix": false},
    {'id': 'tt13433802', 'seen': false, 'available': false, "netflix": false},
]

export function useMovies() {
    const [isLoading, setIsLoading] = useState(false);
    const [moviesList, setMoviesList] = useState<any[]>([]);

    useEffect(
        function () {
            async function getMovieDetails() {

                setIsLoading(true);

                const movieList = [];

                for (let obj of movies) {
                    const res = await fetch(
                        `https://www.omdbapi.com/?apikey=${KEY}&i=${obj.id}`
                    );
                    const data = await res.json();
                    let {id, ...rest} = obj;
                    movieList.push({...data, ...rest});
                }
                setIsLoading(false);
                setMoviesList(movieList);
            }

            getMovieDetails();
        },
        []
    );

    return [moviesList, isLoading];
}