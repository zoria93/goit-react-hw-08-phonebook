import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin-top: 180px;
  font-size: 35px;
  font-weight: 600;
  font-family: fantasy;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const LinkBtn = styled(Link)`
  margin-left: 15px;
`;
