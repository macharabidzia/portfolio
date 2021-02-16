import styled, { css } from 'styled-components';

// Styles
const gradientStyle = css`
  background: -webkit-linear-gradient(0deg, #7fa5e5 0%, #5abc93 25%);
  background: linear-gradient(90deg, #7fa5e5 0%, #5abc93 25%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;


export const Content = styled.p`
  margin-top: 1.5rem;
`;

export const IconsContainer = styled.div`
  display: flex;
`;

export const LinkedIn = styled.img`
  width: 30px;
  height: 30px;
`;
export const Name = styled.h1`
  font-size: 50px;
  margin: 0;
  padding: 0;
`;
export const Title = styled.h2`
  ${gradientStyle}
`;
export const SpanText = styled.span`
  ${gradientStyle}
`;
export const AboutText = styled.p`
  text-align: center;
`;
export const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  height: 100%;
  font-family: 'Lato';
  background:#151515;
`;

export const Video = styled.video`
  position: absolute;
  right: 0;
  bottom: 0;
  min-width: 100%;
`;
export const VideoContentWrapper = styled.div`
  border-radius: 3rem;
  position: relative;
  color: #fff;
  z-index: 2;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  @media only screen and (max-width: 1024px) {
    margin-left: 75px;
    h1 {
      font-size: 24px;
    }
  }
`;
