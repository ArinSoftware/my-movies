import React from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import axios from 'axios';

class App extends React.Component {

    state = {
        movies: [],

        searchQuery: ""
    }

/*     async componentDidMount() {
        const baseURL = "http://localhost:3002/movies";
        const response = await fetch(baseURL);
        console.log(response)
        const data = await response.json();
        console.log(data)
        this.setState({movies: data})
    } */

    async componentDidMount() {
        const response = await axios.get("http://localhost:3002/movies");
        //console.log(response);
        this.setState({movies: response.data})
    }


/*     deleteMovie = (movie) => {
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState(state => ({
            movies: newMovieList
        }))
    }  */

// FETCH API
/*     deleteMovie =  async (movie) => {

        const baseURL = `http://localhost:3002/movies/${movie.id}`
        await fetch(baseURL, {
            method: "DELETE"
        })

        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState(state => ({
            movies: newMovieList
        }))
    }  */

    // AXIOS API
    deleteMovie =  async (movie) => {

        axios.delete(`http://localhost:3002/movies/${movie.id}`)
        const newMovieList = this.state.movies.filter(
            m => m.id !== movie.id
        );
        this.setState(state => ({
            movies: newMovieList
        }))
    } 


    searchMovie = (event) => {
        //console.log(event.target.value)
        this.setState({searchQuery: event.target.value })
    }

    render() {

        let filteredMovies = this.state.movies.filter(
            (movie) => {
                return movie.name.toLowerCase().indexOf(this.state.searchQuery.toLowerCase()) !== -1
            }
        )

        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <SearchBar searchMovieProp={this.searchMovie} />
                    </div>
                </div>

                <MovieList
                    movies={filteredMovies}
                    deleteMovieProp={this.deleteMovie} />
            </div>
        )

    }


}

export default App;