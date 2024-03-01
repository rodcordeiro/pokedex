import { DefaultTheme as StyledDefault } from 'styled-components';

const DefaultTheme: StyledDefault = {
  title: 'light',
  color: {
    primary: '#0099FF',
    secondary: '#71C558',
    background: '#f4f4f4',
    text: '#999591', //#999591
    button: '#181818',
    title: '#33333',
    subtitle: '#666666',
  },
};
const DarkTheme: StyledDefault = {
  title: 'dark',
  color: {
    primary: '#0099FF',
    secondary: '#71C558',
    background: '#181818',
    text: '#f4f4f4',
    button: '#242424',
    title: '#666666',
    subtitle: '#444',
  },
};

// theme.color.defaultBase#999591

export { DefaultTheme, DarkTheme };
