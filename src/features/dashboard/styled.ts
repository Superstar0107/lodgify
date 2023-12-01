import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  padding: 32px 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`;

export const Content = styled.div`
  border-radius: 8px;
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;
export const Title = styled.h2`
  color: var(--greyscale-900);
  font-feature-settings:
    'clig' off,
    'liga' off;
  /* Third-title */
  font-family: 'Source Code Pro', monospace;
  font-size: 1.375rem;
  font-style: normal;
  font-weight: 700;
  line-height: 24px; /* 109.091% */
`;

export const ProgressBar = styled.div`
  border-radius: 24px;
  background: var(--color-light);
`;
