import styled from 'styled-components';

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 100vh;
`;

export const Description = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.YELLOW_500};
`;
