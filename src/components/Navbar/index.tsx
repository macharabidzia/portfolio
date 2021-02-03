import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';
import { withRouter } from 'react-router-dom';
const Navbar = ({ history, location }: any) => {
  return (
    <S.Container>
      <S.List>
        <S.ListItem>
          <Link to="/">
            <S.HomeIcon active={location.pathname === '/'} />
          </Link>
        </S.ListItem>
        <S.ListItem>
          <Link to="/about">
            <S.AboutIcon active={location.pathname === '/about'} />
          </Link>
        </S.ListItem>
        <S.ListItem>
          <Link to="/projects">
            <S.LibraryIcon active={location.pathname === '/projects'} />
          </Link>
        </S.ListItem>
      </S.List>
    </S.Container>
  );
};

export default withRouter(Navbar);
