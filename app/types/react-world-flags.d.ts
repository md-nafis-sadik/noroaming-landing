declare module 'react-world-flags' {
  import * as React from 'react';
  
  interface ReactCountryFlagProps {
    code: string;
    className?: string;
    style?: React.CSSProperties;
    svg?: boolean;
    fallback?: React.ReactNode;
    height?: string | number;
    width?: string | number;
    alt?: string;
  }

  const ReactCountryFlag: React.FC<ReactCountryFlagProps>;
  export default ReactCountryFlag;
}