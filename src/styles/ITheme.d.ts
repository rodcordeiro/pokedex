import type { DefaultTheme } from 'styled-components/native';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    color: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      button: string;
      title: string;
      subtitle: string;
    };
  }
}

declare module 'styled-components/native' {
  export interface DefaultTheme {
    title: string;
    color: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
      button: string;
      title: string;
      subtitle: string;
    };
  }
}

export type ITheme = DefaultTheme;
