// Code MovieReviews Here
import React from 'react'

const MovieReviews = ({reviews}) => {
  MovieReviews.defaultProps = {
    reviews: []
  }

  return (
    <div className="review-list">
      {reviews.map((review, index) =>  { return <Review review={review} key={index} /> })}
    </div>
  )
}

const Review = ({review}) => {
  let displayImg = () => {
    if (review.multimedia){
      return <img src={review.multimedia.src} alt="review-image" height="200" width="200" />
    } else {
      return ''
    }
  }

  return (
    <div className="review" style={{'border-style': 'solid', 'width': '50%', 'margin-top': "20px"}}>
    <h3> {review.display_title} </h3>
    <h4>{review.headline}</h4>
    {displayImg()}
    <p>{review.summary_short}</p>
    </div>
  )
}


export default MovieReviews
