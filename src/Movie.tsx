import {attachFlags} from "./attachFlags.js"
import {useTranslate} from "./useTranslate";
import Loader from "./Loader";

export default function Movie({movie, isShowing, posterImage}: any) {
    const {
        Title: title,
        Poster: poster,
        Year: year,
        Runtime: runtime,
        Genre: genre,
        Director: director,
        Actors: actors,
        Plot: plot,
        Language: language,
        Country: country,
        Type: type,
        totalSeasons,
    } = movie;

    const countryPlusFlag = attachFlags(country.split(", "));

    const [isLoadingPlot, translatedPlot] = useTranslate(plot);
    const [isLoadingGenre, translatedGenre] = useTranslate(genre);
    const [isLoadingLanguage, translatedLanguage] = useTranslate(language);
    //const [isLoadingCountry, translatedCountry] = useTranslate(countryPlusFlag);

    function expanding() {
        isShowing(true);
        posterImage(poster);
    }

    return (
        <div className="card">
            <div className="main-info">
                <img className="main-info__image" src={poster} alt="Movie poster" onClick={expanding}/>
                <div className="main-info-content">
                    <header>
                        <h2>{title}</h2>
                        <p className="main-info-content__term">({type === "series" ? "Serie" : type=== "movie" ? "Película" : type})</p>
                    </header>
                    <p>
                        <span>{year}</span> • <span>{runtime}</span>
                    </p>
                    {isLoadingGenre ? <Loader/> : <p>{translatedGenre}</p>}
                    {isLoadingLanguage ? <Loader/> : <p><span className="main-info-content__term">{translatedLanguage.toString().includes(",") ? "Idiomas" : "Idioma"}:</span> {translatedLanguage.toString().toLowerCase()}</p>}
                    <p>{countryPlusFlag}</p>
                    {/*isLoadingCountry ? <Loader/> : <p>{translatedCountry}</p>*/}
                </div>
            </div>
            <div className="minor-info">
                {isLoadingPlot ? <Loader /> : <p className="minor-info__plot">{translatedPlot}</p>}
                <p>Protagonizan {actors}</p>
                {director === "N/A" ? "" : <p>Dirigida por {director}</p>}
                {totalSeasons && <p>{totalSeasons} {Number(totalSeasons) === 1 ? "Temporada" : "Temporadas"}</p>}
            </div>
        </div>
    )
}
