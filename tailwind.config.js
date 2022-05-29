const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textShadow: '0 0 7px #fff'
    },
    colors: {
      rockColorFirst: '#E99257',
      rockColorSecond: '#EC8845',
      rockColorThird: '#D1735D',
      rockColorFourth: '#884553',
      rockColorFifth: '#763B4D',
      rockColorSixth: '#893242',
      transparent: 'transparent',
      current: 'currentColor',
      rockGray: '#0e1a40',
      rockStakingBg:'#14142b',
      rockStakingBg2:'#222238',
      rockStakingBg3:'#2e2e49',
      rockStakingBg4:'#2f2f4b',
      rockStakingInputBox:'#2c2c45',
     
      gray: colors.trueGray,
      red: colors.red,
      blue: colors.sky,
      yellow: colors.amber,
      black: colors.black,
      white: colors.white,
      grayDark: colors.grayDark,
      grayDarker: colors.grayDarker,
      grayDarkest: colors.grayDarkest,
      grayLight: colors.grayLight,
      grayLighter: colors.grayLighter,
      grayLightest: colors.grayLightest,
      redDark: colors.redDark,
      purple: colors.purple,

     
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/main-bg.jpg')",
       }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
