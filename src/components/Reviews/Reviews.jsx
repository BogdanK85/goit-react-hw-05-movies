import { getMoviesReviews } from 'Api/API';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReviewsItem,
  ReviewsText,
  ReviewsTitle,
  ReviewsWrap,
} from './Reviews.styled';

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
