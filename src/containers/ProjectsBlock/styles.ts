import styled from 'styled-components';
export const Container = styled.div`
  display: flex;
  width: 100%;
  background: black;
  position: relative;
  font-family: 'Lato';
  background: #fff;
  height:100%;
  flex-direction: column;
  justify-content: center;
  @media only screen and (max-width: 1024px) {
    height: auto;
  }
`;
export const Wrapper = styled.div`
  margin-left: 80px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
`;
export const Image = styled.img`
  width: 350px;
  cursor: pointer;
  margin-left: 95px;
  margin-top:10px;
`;
