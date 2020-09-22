import React from 'react';
import axios from 'axios';

class EditMovie extends React.Component {

    state = {
        name: "",
        rating: "",
        overview: "",
        imageURL: ""
    }

    async componentDidMount() {

        const id = this.props.match.params.id;
        //console.log(id)

        const response = await axios.get(`http://localhost:3002/movies/${id}`);
        //console.log(response.data);

        const movie = response.data;

        this.setState({
            name: movie.name,
            rating: movie.rating,
            overview: movie.overview,
            imageURL: movie.imageURL
        })

    }


    handleFormSubmit = (e) => {
        e.preventDefault();

    }


    render() {

        return  (
            <div className="container">
            <form className="mt-5" onSubmit={this.handleFormSubmit}>
            <input className="form-control" id="disabledInput" type="text" placeholder="EDIT The Form To UPDATE A Movie.." disabled/>
                <div className="form-row">
                    <div className="form-group col-md-10">
                        <label htmlFor="inputName">Name</label>
                        <input  type="text" 
                                className="form-control" 
                                name="name"
                                value={this.state.name}/>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputRating">Rating</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="rating"
                                value={this.state.rating}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="inputImage">Image URL</label>
                        <input 
                                type="text" 
                                className="form-control" 
                                name="imageURL"
                                value={this.state.imageURL}/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="form-group col-md-12">
                        <label htmlFor="overviewTextarea">Overview</label>
                        <textarea 
                                className="form-control" 
                                name="overview" 
                                rows="5"
                                value={this.state.overview}></textarea>
                    </div>
                </div>
                <input type="submit" className="btn btn-danger btn-block" value="Add Movie" />
            </form>
        </div>
        )

    }
}


export default EditMovie;