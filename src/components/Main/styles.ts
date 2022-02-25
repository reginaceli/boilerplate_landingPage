import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${() => css`
    max-width: 117rem;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: 100vh;
  `}
`;

export const Wrapper = styled.div`
  ${() => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.7rem;
  `}
`;

export const Logo = styled.div`
  ${() => css`
    margin-top: 5rem;
  `}
`;

export const Title = styled.h1`
  ${() => css`
    font-size: 3rem;
    padding: 1rem;
  `}
`;

export const Description = styled.article`
  ${() => css`
    flex: 1;
    margin: 3rem 0;
    width: 60%;
    padding: 2rem;
    text-align: justify;
    line-height: 1.3;
  `}
`;

export const Contact = styled.div``;

export const Link = styled.div`
  ${() => css`
    display: flex;
    justify-items: center;
    margin-top: 5rem;
    font-size: 1.5rem;
    background-color: #e91e63;
    padding: 1rem;
    color: white;
    border-radius: 0.3rem;
    cursor: pointer;
    margin-bottom: 5rem;
  `}
`;
