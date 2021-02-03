import styled from 'styled-components';

interface IButton {
  color: string;
  width: string;
}

export const Button = styled.button<IButton>`
  background: ${({ color }) => color || '#5abc93'};
  color: ${({ color }) => (color ? '#2E186A' : '#fff')};
  font-size: 1rem;
  font-weight: 700;
  width: 100%;
  border: ${(props) => (props.color ? '1px solid #2E186A' : '0px')};
  border-radius: 8px;
  outline: none;
  padding:10px 0px;
  cursor: pointer;
  margin-top: 0.725rem;
  max-width: 130px;

  @media only screen and (max-width: 1024px) {
    width: ${({ width }) => (width ? '160px' : '100%')};
  }

  @media only screen and (max-width: 768px) {
    width: ${({ width }) => (width ? '140px' : '100%')};
  }

  @media only screen and (max-width: 480px) {
    width: ${({ width }) => (width ? '130px' : '100%')};
  }
`;
