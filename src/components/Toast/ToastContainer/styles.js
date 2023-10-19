import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  z-index: 2;
  bottom: 48px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
`;
