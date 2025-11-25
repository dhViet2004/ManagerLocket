// src/declarations.d.ts
import type { ComponentType } from 'react';

type ReactComponent = ComponentType<Record<string, unknown>>;

declare module '*.jsx' {
  const content: ReactComponent;
  export default content;
}

declare module './RefundManagement' {
  const component: ReactComponent;
  export default component;
}

declare module './RevenueReport' {
  const component: ReactComponent;
  export default component;
}

declare module './App.jsx' {
  const component: ReactComponent;
  export default component;
}