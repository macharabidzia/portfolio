import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LoadScreen from '../../components/LoadScreen';
import * as S from './styles';

interface IBlock {
  title: string;
  content: string;
}

const IntroBlock = ({ title, content }: IBlock) => {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadScreen />}
      <S.Container>
        <S.Video autoPlay muted loop onLoadedData={() => setIsLoading(false)}>
          <source src="MilkyWay1H264.mov" type="video/mp4" />
          Your browser does not support HTML5 video.
        </S.Video>

        <S.VideoContentWrapper>
          <S.IconsContainer>
            <S.HomeIcon />
            <S.LibraryIcon />
            <S.LibraryIcon />
          </S.IconsContainer>
          <S.Name>Giorgi Matcharashvili</S.Name>
          <S.Title>Front End Developer | React Developer</S.Title>
          <br />

          <S.AboutText>
            I am primarily a <S.SpanText>Front-End</S.SpanText> Developer
            <br />
            <br /> with some experience in Back-End
            <S.SpanText> NodeJs </S.SpanText>
            development
          </S.AboutText>
          <br />
          <span>
            Navigate to View <S.SpanText>More</S.SpanText>
          </span>
        </S.VideoContentWrapper>
      </S.Container>
    </>
  );
};

export default IntroBlock;
