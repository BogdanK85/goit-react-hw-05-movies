import { styled } from 'styled-components';

export const MovieDetailsStyle = styled.section`
  .back-link {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 17px;
    width: 160px;
    height: 45px;
    border-radius: 45px;
    border: 2px solid #fff;
    font-weight: 600;
    font-size: 18px;
    cursor: pointer;
    outline: none;
    color: red;
    background-color: antiquewhite;
    transition: backgrond-color 0.25s, color 0.25s;

    &:hover {
      background-color: #fff;
      color: #grey;
    }
  }

  .main-content {
    display: flex;
    gap: 18px;
  }

  .main-img {
    width: 100%;
    height: auto;
    max-width: 340px;
  }

  .main-dscription {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .card-title {
    font-weight: 700;
    margin-bottom: 18px;
  }

  .card-score {
    margin-bottom: 18px;
  }

  .card-overview {
    margin-bottom: 8px;
  }

  .text-overview {
    margin-bottom: 18px;
  }

  .genres-title {
    margin-bottom: 8px;
  }
  .informatin-title {
    margin-bottom: 8px;
  }

  .info-link {
    display: inline-block;
    border-radius: 14px;
    text-decoration: none;
    color: dimgrey;
    background-color: antiquewhite;
    margin-bottom: 8px;
    padding: 5px 15px;
    text-align: center;
    transition: backgrond-color 0.25s, color 0.25s;

    &:hover {
      background-color: #fff;
      color: #grey;
    }
  }
  .last-link {
    margin-bottom: 0;
  }
`;
