import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    display: block;
    color: ${theme.colors.white};
    text-decoration: none;
    margin-bottom: ${theme.spacings.small};
    font-size: 1.8rem;
    border-right: 0.5rem solid ${theme.colors.primaryColor};
    transition: all 100ms ease-in-out;

    &:hover {
      border-right: 0.5rem solid ${theme.colors.secondaryColor};
      color: ${theme.colors.secondaryColor};
    }
  `}
`;
