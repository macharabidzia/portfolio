import styled from 'styled-components';
export const Content = styled.p`
  margin-top: 1.5rem;
`;
export const Container = styled.div`
  display: flex;
  width: 100%;
  background: black;
  position: relative;
  font-family: 'Lato';
  background: #f7f7f7;
  align-items: center;
  height: auto !important;
  min-height: 100%;
  flex-wrap: wrap;
`;
export const Wrapper = styled.div`
  flex: 1;
  padding: 25px;
  margin-left: 75px;
  @media only screen and (max-width: 1024px) {
    padding: 0;
  }
`;
export const Paragraph = styled.p`
  font-size: 17px;
  color: #1d2543;
  margin-bottom: 15px;
`;
export const Title = styled.h4`
  text-transform: uppercase;
  margin-bottom: 5px;
`;
export const ImageWrapper = styled.div`
  display: flex;
  margin-bottom: 15px;
  &:nth-child(1) {
    justify-content: space-evenly;
  }
  &:nth-child(2) {
    justify-content: center;
  }
  &:nth-child(3) {
    justify-content: space-evenly;
  }
`;
export const Image = styled.img`
  height: 150px;
`;
