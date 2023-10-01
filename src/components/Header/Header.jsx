import { Header, Link, Logo } from './Header.styled';
import headerLogo from '../../images/movies-logo.png';

export const HeaderWrap = () => {
  return (
    <Header>
      <Logo>
        <img src={headerLogo} alt="Header Logo" />
      </Logo>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
    </Header>
  );
};
