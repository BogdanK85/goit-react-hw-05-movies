const { getMoviesReviews } = require('Api/API');
const { useState, useCallback, useEffect } = require('react');
const { useParams } = require('react-router-dom');
const {
  ReviewsWrap,
  ReviewsItem,
  ReviewsTitle,
  ReviewsText,
} = require('./Reviews.styled');

const Reviews = () => {
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const { moviesID } = useParams();

  const fetchMoviesReviews = useCallback(async () => {
    try {
      const data = await getMoviesReviews(moviesID);
      setReviewsInfo(data);
    } catch (error) {
      console.log(error.message);
    }
  }, [moviesID]);

  useEffect(() => {
    fetchMoviesReviews();
  }, [fetchMoviesReviews]);

  return (
    <ReviewsWrap>
      <ul>
        {reviewsInfo.length === 0 ? (
          <ReviewsText>There are no reviews</ReviewsText>
        ) : (
          reviewsInfo.map(reviewsInfo => (
            <ReviewsItem key={reviewsInfo.id}>
              <ReviewsTitle>Autor: {reviewsInfo.author}</ReviewsTitle>
              <ReviewsText>{reviewsInfo.content}</ReviewsText>
            </ReviewsItem>
          ))
        )}
      </ul>
    </ReviewsWrap>
  );
};

export default Reviews;
