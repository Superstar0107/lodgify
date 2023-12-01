import styled from 'styled-components';

export const LayoutContainer = styled.main`
  width: 100%;
`;

export const ContentSection = styled.div`
  display: flex;
  padding: 16px;
  width: 820px;
  margin: 40px auto;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid #cccccc;
  background: var(--color-white);
  @media (max-width: 970px) {
    width: 600px;
  }
  @media (max-width: 650px) {
    width: 90%;
    padding: 10px;
    box-sizing: border-box;
  }
`;
