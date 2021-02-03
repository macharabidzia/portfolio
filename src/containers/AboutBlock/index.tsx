import React from 'react';
import * as S from './styles';
import ReactImage from '../../assets/images/reactive.png';
import AngularImage from '../../assets/images/angular.png';
import NodeImage from '../../assets/images/node.png';
import MongoImage from '../../assets/images/mongo.png';
import TypeImage from '../../assets/images/typescript.png';

const AboutBlock = () => {
  return (
    <S.Container>
      <S.Wrapper>
        <h1>
          FRONT-END DEVELOPER
          <br /> FOCUSING ON USER EXPERIENCE, <br /> USER INTERFACE & USER
          STORAGE
        </h1>
        <br />
        <S.Paragraph>
          I have experience in developing web applications and native
          applications in both corporate and startup environments. I'm a
          front-end, polyglot developer who is constantly learning how to make
          web/mobile apps faster, leaner, and perfectly designed.
        </S.Paragraph>
        <S.Paragraph>
          In my spare time I love sharpening my problem solving skills.
        </S.Paragraph>
        <S.Title>previous clients</S.Title>
        <S.Paragraph>
          Wifisher (Tbilisi, GE),&nbsp; Alta Software (Tbilisi, GE),&nbsp; Flat
          Rock Technology (Tbilisi, GE)
        </S.Paragraph>
        <S.Title>specialities:</S.Title>
        <S.Paragraph>
          Languages I typically work with : JavaScript ~ TypeScript ~ HTML/JSX ~
          CSS/SCSS
          <br />
          <br /> Frameworks I specialize in : ~ Angular ~ React ~ React Native ~
          Express
          <br />
          <br />
          Front-end libraries I specialize in : ~ Angular Material (Angular) ~
          Material UI (React) ~ Materialize (Any) ~ Material Design Lite (Any) ~
          Bootstrap 4 (Any) ~ Styled-Components
        </S.Paragraph>
        <S.Title>contact:</S.Title>
        <S.Paragraph>
          If you like my work and find yourself in need of a developer, feel
          free to reach out.
        </S.Paragraph>
      </S.Wrapper>

      <S.Wrapper>
        <S.ImageWrapper>
          <S.Image alt="angular" src={AngularImage} />
          <S.Image alt="react" src={TypeImage} />
        </S.ImageWrapper>
        <S.ImageWrapper>
          <S.Image alt="react" src={ReactImage} />
        </S.ImageWrapper>
        <S.ImageWrapper>
          <S.Image alt="node" src={NodeImage} />
          <S.Image alt="react" src={MongoImage} />
        </S.ImageWrapper>
      </S.Wrapper>
    </S.Container>
  );
};

export default AboutBlock;
