import Movie from "./Movie";
import {useMovies} from "./useMovies";
import {useState} from "react";

export default function Movies() {
    const [movies, isLoading] = useMovies();
    const [_isShowing, setIsShowing] = useState(false);
    const [_posterImage, setPosterImage] = useState("");

    return (
        <main>
            {
                isLoading ?
                    <h1>Cargando contenido...</h1> :
                    <>
                        <h1>🎥 Para Ver</h1>
                        <section className="content">
                            {movies instanceof Array && movies.map((movie) => <Movie movie={movie} isShowing={setIsShowing} posterImage={setPosterImage} key={movie.imdbID}/>)}
                        </section>
                        {/*
                            {isShowing && <ImageExpanded>
                                <img className="main-info__image" src={posterImage} alt="Movie poster big" onClick={() => setIsShowing(false)}/>
                                <img src="assets/icon-close.svg" alt="Close button" className="image-wrapper__close-button"/>
                            </ImageExpanded>}

                        */}
                    </>
            }
        </main>
    )
}