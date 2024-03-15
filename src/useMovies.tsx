import {useState, useEffect} from "react";

const KEY = "e3a77c91";

const movies = [
    {'id': 'tt4158110', 'seen': false, 'available': false},
    {'id': 'tt2401256', 'seen': false, 'available': false},
    {'id': 'tt7440726', 'seen': false, 'available': false},
    {'id': 'tt3829920', 'seen': false, 'available': false},
    {'id': 'tt10706602', 'seen': false, 'available': false},
    {'id': 'tt1399664', 'seen': false, 'available': false},
    {'id': 'tt8291284', 'seen': false, 'available': false},
    {'id': 'tt12887770', 'seen': false, 'available': false},
    {'id': 'tt13391708', 'seen': false, 'available': false},
    {'id': 'tt14688458', 'seen': false, 'available': false},
    {'id': 'tt6506264', 'seen': false, 'available': false},
    {'id': 'tt15791034', 'seen': false, 'available': false},
    {'id': 'tt0138704', 'seen': false, 'available': false},
    {'id': 'tt5715874', 'seen': true, 'available': false},
    {'id': 'tt6265828', 'seen': false, 'available': false},
    {'id': 'tt6053438', 'seen': false, 'available': false},
    {'id': 'tt2401878', 'seen': false, 'available': false},
    {'id': 'tt5247022', 'seen': false, 'available': false},
    {'id': 'tt0473753', 'seen': false, 'available': false},
    {'id': 'tt1182345', 'seen': false, 'available': false},
    {'id': 'tt2316411', 'seen': false, 'available': false},
    {'id': 'tt1715853', 'seen': false, 'available': false},
    {'id': 'tt11057302', 'seen': false, 'available': false},
    {'id': 'tt9620288', 'seen': false, 'available': false},
    {'id': 'tt1906426', 'seen': false, 'available': false},
    {'id': 'tt3612616', 'seen': false, 'available': false},
    {'id': 'tt16300962', 'seen': false, 'available': false},
    {'id': 'tt17009710', 'seen': false, 'available': false},
    {'id': 'tt21613384', 'seen': false, 'available': false},
    {'id': 'tt1629377', 'seen': false, 'available': false},
    {'id': 'tt27503384', 'seen': false, 'available': false},
    {'id': 'tt1152758', 'seen': false, 'available': false},
    {'id': 'tt18925334', 'seen': false, 'available': false},
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
                    //console.log(data);
                    let {id, ...rest} = obj;
                    movieList.push({...data, ...rest});
                }
                setIsLoading(false);
                setMoviesList(movieList);
                console.log(movieList[12]);
                //console.log(Object.keys(movieList.at(0)));
                //console.log(Object.keys(movieList.at(19)));
            }

            getMovieDetails();
        },
        []
    );

    return [moviesList, isLoading];
}