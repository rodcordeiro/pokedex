/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './index.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#0099FF',
        secondary: '#71C558',
        accent: '#D92B2B',

        background: {
          DEFAULT: '#F4F4F4',
          dark: '#181818',
          mist: '#E8EEF2',
        },

        surface: {
          DEFAULT: '#FFFFFF',
          muted: '#EEF0F3',
        },

        ink: {
          DEFAULT: '#14181F',
          title: '#333333',
          subtitle: '#666666',
          muted: '#999591',
          soft: '#6B7380',
        },

        border: {
          DEFAULT: '#C9D2DB',
          strong: '#14181F',
        },

        type: {
          bug: '#94BC4A',
          dark: '#736C75',
          dragon: '#6A7BAF',
          electric: '#E5C531',
          fairy: '#E397D1',
          fighting: '#CB5F48',
          fire: '#EA7A3C',
          flying: '#7DA6DE',
          ghost: '#846AB6',
          grass: '#71C558',
          ground: '#CC9F4F',
          ice: '#70CBD4',
          normal: '#AAB09F',
          poison: '#B468B7',
          psychic: '#E5709B',
          rock: '#B2A061',
          steel: '#89A1B0',
          water: '#539AE2',
        },
      },
      fontFamily: {
        heading: 'Quicksand_700Bold',
        body: 'Quicksand_400Regular',
        light: 'Quicksand_300Light',
        mono: 'PTMono_400Regular',
      },
    },
  },
  plugins: [],
};
