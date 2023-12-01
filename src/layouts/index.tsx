import React from 'react';
import { LayoutContainer, ContentSection } from './styled';

interface LayoutProps {
  children?: React.ReactNode;
}

export function LayoutComponent({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <ContentSection>{children}</ContentSection>
    </LayoutContainer>
  );
}

// HOC WithLayout (Higher Order Component)
// eslint-disable-next-line @typescript-eslint/naming-convention
export const WithLayout = (Component: React.FC) => () => {
  return (
    <LayoutComponent>
      <Component />
    </LayoutComponent>
  );
};
