import React from 'react';
import { ReactComponent as GithubIcon } from '../../assets/github.svg';
import { GithubLink, HeaderContainer, Title, HeaderIconsContainer, Subtitle } from './styed';
import { useDispatch, useSelector } from 'react-redux';
import DarkModeToggle from 'react-dark-mode-toggle';
import { AppStore } from '../../store/store';
import { toggleDarkMode } from '../../store/reducers/appReducer';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state: AppStore) => state.app.darkMode);

  return (
    <HeaderContainer>
      <Title>SkyCheck</Title>
      <HeaderIconsContainer>
      {/*<Subtitle>Find the warmest spot in your neighborhood.</Subtitle>*/}
      </HeaderIconsContainer>
    </HeaderContainer>
  );
};

export default Header;
