import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';

class App extends React.Component {

    state = {
        movies: [
            {
                "id": 1,
                "name": "The Flash",
                "rating": 8.3,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/wHa6KOJAoNTFLFtp7wguUJKSnju.jpg"
            },
        
            {
                "id": 2,
                "name": "Interstellar",
                "rating": 6.8,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            },
        
            {
                "id": 3,
                "name": "Arrow",
                "rating": 7.9,
                "overview": "This is a wider card with supporting text below as a natural lead-in to additional content.",
                "imageURL": "https://image.tmdb.org/t/p/w220_and_h330_face/gKG5QGz5Ngf8fgWpBsWtlg5L2SF.jpg"
            }
        ]
    }


    deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );

/*         this.setState ({
            movies: newMovieList
        }) */

        this.setState(state => ({
            movies: newMovieList
        }))
    }

    render() {

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar />
                    </div>
                </div>

                <MovieList
                    movies={this.state.movies}
                    deleteMovieProp={this.deleteMovie} />
            </div>
        )

    }


}

export default App;