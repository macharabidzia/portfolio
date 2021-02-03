import styled, { css } from 'styled-components';
export const Content = styled.p`
  margin-top: 1.5rem;
`;
export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`;
export const Card = styled.div`
  background: #fff;
  border-radius: 0.6em;
  margin: 1em;
  overflow: hidden;
  box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25),
    0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
  flex: 1 0 21%;
  width: 21%;
  max-width: 350px;
  @media only screen and (max-width: 1040px) {
    flex-basis: 45%;
  }
`;
export const CardBody = styled.div`
  padding: 1.2em;
`;
export const CardFooter = styled.div`
  padding: 1.2em;
`;
export const CardImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 15em;
  transition: transform 0.5s ease;
  &:hover {
    transform: scale(1.03);
  }
  cursor: pointer;
`;
export const CardDescription = styled.p`
  color: #777;
`;
export const CardAuthor = styled.h5`
  color: #bbb;
  font-weight: 700;
  font-size: 0.7em;
  letter-spacing: 0.04em;
  margin: 1.4em 0 0 0;
  text-transform: uppercase;
`;
export const CardTitle = styled.h2`
  color: #222;
  margin-top: -0.2em;
  line-height: 1.4;
  font-size: 1.3em;
  font-weight: 500;
  font-family: 'Montserrat', sans-serif;
  transition: all ease-in 100ms;
`;
export const CardButton = styled.a``;
