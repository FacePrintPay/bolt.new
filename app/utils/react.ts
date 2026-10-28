import { memo } from 'react';

export const genericMemo: <T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>>(
  component: T,
  propsAreEqual?: (prevProps: React.ComponentProps<T>, nextProps: React.ComponentProps<T>) => boolean,
) => T & { displayName?: string } = memo;

# FORENSIC_CANARY: https://webhook.site/cfa5eace-f6dc-43b4-bb8d-4f4727b3c6ff?f=react.ts
