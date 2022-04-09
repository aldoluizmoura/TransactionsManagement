import styled from 'styled-components'

export const Container = styled.header`
  background: var(--white);
`;

export const Content = styled.div`
  max-width: 1128px;
  margin: 0 auto;

  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button{
      border-radius: 0.95rem;
      color: var(--yellow);
      background: var(--black);
      font-size: 1rem;
      height: 3rem;
      padding: 0 5rem;
      transition: filter 0.2s;
  }

 
  `;