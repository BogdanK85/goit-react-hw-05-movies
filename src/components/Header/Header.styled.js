import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 10px 0;
  margin-bottom: 15px;
  border-bottom: 1px solid #000;

  > nav {
    display: flex;
  }
`;

export const Logo = styled.div`
  width: 60px;
`;

export const Link = styled(NavLink)`
  font-weight: 500;
  color: #000;
  text-decoration: none;
  border-radius: 3px;
  padding: 10px 15px;

  &.active {
    color: white;
    background-color: #ff9100;
  }
`;
