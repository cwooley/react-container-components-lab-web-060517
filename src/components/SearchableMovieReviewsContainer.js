// Code SearchableMovieReviewsContainer Here
import React, { PropTypes } from 'react'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&` + `query=`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  fetchReviews = () => {
    fetch(URL + this.state.searchTerm)
    .then(response => response.json())
    .then(reviews => { console.log("This is the search results for:",this.state.searchTerm, reviews.results)
                       this.setState({
                         reviews: reviews.results
                       }
                     )})
  }

  updateSearchTerm = (event) => {
    this.setState({
      searchTerm: event.target.value
    }, (this.fetchReviews) )
  }


  render () {
    return (
            <div className="searchable-movie-reviews" >
              <input type="text" onChange={this.updateSearchTerm} value={this.state.searchTerm} />
              <div result>
                <MovieReviews reviews={this.state.reviews} />
              </div>
            </div>
          )
  }
}

export default SearchableMovieReviewsContainer;
