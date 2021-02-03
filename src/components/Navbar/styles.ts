import styled, { css } from 'styled-components';
import {
  Home,
  LibraryBooks,
  PermContactCalendar,
} from '@styled-icons/material-outlined';

interface INavbar {
  active: string;
}
export const Container = styled.div`
  display: flex;
  height: 100%;
  position: fixed;
  bottom: 0;
  background: #fff;
  margin-top: 60px;
  width: 65px;
  z-index: 1000;
  background-color: rgba(90, 188, 147, 0.9);
`;

const activeButtonStyle = css`
  border-right-width: 3px;
s  border-right-color: #fff;
  border-right-style: solid;
  color: #fff;
`;

const sharedIconStyle = css`
  color: #fff;
  width: 100%;
  transition: transform 0.2s ease;
  cursor: pointer;
  padding-right: 14.5px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

export const HomeIcon = styled<any>(Home)`
  ${sharedIconStyle}
  ${({ active }) => active && activeButtonStyle};
`;
export const AboutIcon = styled<any>(PermContactCalendar)`
  ${sharedIconStyle}
  ${({ active }) => active && activeButtonStyle};
`;
export const LibraryIcon = styled<any>(LibraryBooks)`
  ${sharedIconStyle}
  ${({ active }) => active && activeButtonStyle};
`;

export const List = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.p`
  color: #fff;
  text-align: center;
  text-decoration: none;
  border: 0;
`;

export const ListItem = styled.div`
  margin-top: 45px;
  width: 30px;
`;
