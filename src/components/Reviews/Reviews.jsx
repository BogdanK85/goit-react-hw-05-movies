import { getMoviesReviews } from 'Api/API';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  ReviewsItem,
  ReviewsText,
  ReviewsTitle,
  ReviewsWrap,
} from './Reviews.styled';

const Reviews = () => {
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const fetchMoviesReviews = async () => {
      try {
        const response = await getMoviesReviews(moviesId);
        setReviewsInfo(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchMoviesReviews();
  }, [moviesId]);

  return (
    <ReviewsWrap>
      <ul>
        {reviewsInfo.length === 0 ? (
          <ReviewsText>There are no reviews</ReviewsText>
        ) : (
          reviewsInfo.map(reviewsInf => (
            <ReviewsItem key={reviewsInf.id}>
              <ReviewsTitle>Autor: {reviewsInf.author}</ReviewsTitle>
              <ReviewsText>{reviewsInf.content}</ReviewsText>
            </ReviewsItem>
          ))
        )}
      </ul>
    </ReviewsWrap>
  );
};

export default Reviews;
