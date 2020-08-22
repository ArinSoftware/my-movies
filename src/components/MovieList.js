import React from 'react';

class MovieList extends React.Component {

    render() {

        return  (
            <div className="row">
                <div className="col-lg-4">
                    <div className="card mb-4 shadow-sm">
                        <img src="https://image.tmdb.org/t/p/w220_and_h330_face/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" className="card-img-top" alt="Sample Movie" />
                        <div className="card-body">
                            <h5 className="card-title">Sample Movie</h5>
                            <p className="card-text">Sample Movie Description</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <button type="button" className="btn btn-md btn-outline-danger">Delete</button>
                                <h2><span className="badge badge-info">9.0</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}


export default MovieList;