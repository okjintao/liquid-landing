import { createContext } from 'react';

export const LiquidModeContext = createContext({
  enabled: false,
  toggle: () => {},
}); 