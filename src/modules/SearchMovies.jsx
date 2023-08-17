import { useMovies } from "../hooks/useMovies.js"
import {KEY_API} from "../const/KEY_API.js"
import "../styles/searchMovies.css"

const urlBase = `https://api.themoviedb.org/3/search/movie`;

export const SearchMovies = () => {
    const {dataMovies, isLoading, takeMovies} = useMovies();

    const onSubmitMovies = (e) => {
        e.preventDefault();
        if(e.target.searchMovies.value !== ""){
            takeMovies(`${urlBase}?query=${e.target.searchMovies.value}&api_key=${KEY_API}`);
        };
    }

    return (
        <section className="section-movies">
            <h2 className="section-movies-title">Search Movies</h2>
            <form className="section-movies-search" onSubmit={onSubmitMovies}>
                <input type="search" name="searchMovies" placeholder="Enter movie" />
                <button type="submit">Search</button>
            </form>
            {isLoading && <img className="spinner" src="./src/assets/img/spinner.svg" alt="spinner" />}
            {dataMovies && (
                <div className="movies-data container">
                    {dataMovies.results.map(movie => {
                        const {poster_path, title, overview, id} = movie;
                        const srcPoster = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` 
                                                    : `./src/assets/img/no-image.jpg`;

                        return (
                            <div className="movie-card" key={id}>
                                <div className="movie-card-container">                                
                                    <img className="movie-img" src={srcPoster} alt={title} />
                                    <div className="movie-text">
                                        <h3 className="movie-title">{title ? title : "Unknow"}</h3>
                                        <p className="movie-desc">{overview ? overview : "Unknow"}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            )}
        </section>
    )
}