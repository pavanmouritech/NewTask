import {ThemeColors, ThemeGradients} from './types';

export const COLORS: ThemeColors = {
  // default text color
  text: '#252F40',
  // base colors
  /** UI color for #primary */
  primary: '#006296',
  primarylight: 'rgba(71, 146, 195, 1)',
  primaryOrange: '#F5821F',
  primaryGreen: '#187A00',
  gray65: '#A6A6A6',

  /** UI color for #secondary */
  secondary: '#627594',
  // non-colors
  black: 'rgba(70, 70, 70, 1)',
  
  white: '#FFFFFF',

  dark: '#252F40',
  light: '#E9ECEF',
  lightBlack:'#2D2D2D',

  // gray variationss
  /** UI color for #gray */
  gray: '#A7A8AE',
  grayassent: 'rgba(88, 89, 91, 1)',
  // colors variations
  /** UI color for #danger */
  danger: '#CC0000',
  /** UI color for #warning */
  warning: '#FFC107',
  /** UI color for #success */
  success: '#187A00',
  /** UI color for #info */
  info: '#17C1E8',

  /** UI colors for navigation & card */
  card: '#FFFFFF',
  background: 'rgba(246,246,246,100)',

  /** UI color for shadowColor */
  shadow: '#000000',
  overlay: 'rgba(0,0,0,0.3)',
  shadowOpacity: 'rgba(0, 0, 0, 0.12)',
  backgroundOpacity:'rgba(52, 52, 52, 0.4)',
  /** UI color for input borderColor on focus */
  focus: '#E293D3',
  input: '#252F40',
  inputborder: 'rgba(0, 42, 92, 0.300153)',

  /** UI color for switch checked/active color */
  switchOn: '#3A416F',
  switchOff: '#E9ECEF',

  /** UI color for checkbox icon checked/active color */
  checkbox: ['#3A416F', '#141727'],
  checkboxIcon: '#FFFFFF',

  /** social colors */
  facebook: '#3B5998',
  twitter: '#55ACEE',
  dribbble: '#EA4C89',

  /** icon tint color */
  icon: '#8392AB',

  /** blur tint color */
  blurTint: 'light',

  /** product link color */
  link: '#CB0C9F',
  error: undefined,
  surface: '#f13a59',
  tertiary: '',
  lightgray: '#979797',
  skyblue: '#00BCE4',
  transparent: 'transparent',
};

export const GRADIENTS: ThemeGradients = {
  primary: ['#FF0080', '#7928CA'],
  secondary: ['#A8B8D8', '#627594'],
  info: ['#21D4FD', '#2152FF'],
  success: ['#98EC2D', '#17AD37'],
  warning: ['#FBCF33', '#F53939'],
  danger: ['#FF667C', '#EA0606'],

  light: ['#EBEFF4', '#CED4DA'],
  dark: ['#3A416F', '#141727'],
  female: ['#da0892', '#8f23ba'],
  male: ['#20b7fe', '#2163fd'],
  sport: ['#f9af33', '#f55139'],
  more: ['#7c7d83', '#565764'],

  white: [String(COLORS.white), '#EBEFF4'],
  black: [String(COLORS.black), '#141727'],

  divider: ['rgba(255,255,255,0.3)', 'rgba(102, 116, 142, 0.6)'],
  menu: [
    'rgba(255, 255, 255, 0.2)',
    'rgba(112, 125, 149, 0.5)',
    'rgba(255, 255, 255, 0.2)',
  ],
};
const Generic = {
  black: 'rgb(0, 0, 0)',
  blackT80: 'rgba(0, 0, 0,0.8)',
  black11: 'rgba(11, 11, 13, 1)',
  black13: 'rgb(13, 13, 15)',
  black13T0: 'rgba(13, 13, 15, 0)',
  black13T66: 'rgba(13, 13, 15, 0.66)',
  black15T60: 'rgba(15, 15, 15, 0.6)',
  black82T1: 'rgba(82, 82, 82, 1)',
  whiteOpa: 'rgba(255, 255, 255, 1)',
  black20: 'rgba(20, 20, 20, 1)',
  black21: 'rgb(21, 21, 21)',
  black22: 'rgb(22, 22, 22)',
  black25: 'rgb(25, 25, 25)',
  black26: 'rgb(26, 26, 28)',
  black27: 'rgb(27, 27, 29)',
  black53: 'rgb(53, 53, 53)',
  black70: 'rgba(70, 70, 70, 1)',
  blackT87: 'rgba(70, 70, 70, 0.87)',
  blackT0: 'rgba(0, 0, 0, 0)',
  blackT05: 'rgba(0, 0, 0, 0.05)',
  blackT2: 'rgba(0, 0, 0, 0.20)',
  blackT5: 'rgba(0, 0, 0, 0.50)',
  blackT6: 'rgba(0, 0, 0, 0.60)',
  blackT10: 'rgba(0, 0, 0, 0.10)',
  blackT25: 'rgba(0, 0, 0, 0.25)',
  blackT30: 'rgba(0, 0, 0, 0.30)',
  blackT40: 'rgba(0, 0, 0, 0.40)',
  blackT45: 'rgba(0, 0, 0, 0.45)',
  blackT55: 'rgba(0, 0, 0, 0.55)',
  blackT60: 'rgba(0, 0, 0, 0.60)',
  blackT65: 'rgba(0, 0, 0, 0.65)',
  blackT70: 'rgba(0, 0, 0, 0.70)',
  blackT90: 'rgba(0, 0, 0, 0.90)',
  blue7: 'rgb(7, 127, 255)',
  blue64: 'rgb(64, 144, 224)',
  blue175: 'rgba(175, 222, 231, 0.3)',
  blue133: 'rgb(133, 166, 197)',
  blue: '#00AEEF',
  bluemid:'#005EAD',
  darkBlue: 'rgba(0, 96, 175, 1)',
  gray: '#777777',
  gray21: 'rgb(21, 21, 21)',
  gray34: 'rgba(34, 34, 34,1)', // #222222
  gray34_3: 'rgba(34, 34, 34,0.3)', // #222222
  gray38: 'rgb(38, 38, 39)',
  gray44: 'rgb(44, 44, 44)',
  gray66: 'rgb(66, 66, 66)',
  gray69: 'rgb(69, 69, 66)',
  gray76: 'rgb(76, 76, 76)',
  gray87: 'rgba(87, 87, 87, 1.0)',
  gray100: 'rgb(100,103,108)',
  gray102: 'rgb(102, 102, 102)',
  gray112: 'rgb(112, 112, 112)',
  gray138: 'rgb(138, 138, 146)',
  gray138T60: 'rgba(138, 138, 146, 0.60)',
  gray140T60: 'rgba(140, 140, 140, 0.60)',
  gray149: 'rgb(149, 147, 131)', // #959383 Stone
  gray149T0: 'rgba(149, 147, 131, 0)',
  gray149T20: 'rgba(149, 147, 131, 0.20)',
  gray149T25: 'rgba(149, 147, 131, 0.25)',
  gray149T40: 'rgba(149, 147, 131, 0.40)',
  gray150: 'rgba(158, 150, 150, 0.20)',
  gray151: 'rgb(151, 151, 151)',
  gray151T180: 'rgb(151, 151, 151, 0.18)',
  gray153: 'rgb(153, 153, 153)',
  gray154: 'rgb(154, 153, 162)',
  gray159T15: 'rgba(159, 159, 159, 0.15)',
  gray170: '#AAAAAA',
  gray170T20: 'rgba(170, 170, 170, 0.20)',
  gray196T20: 'rgba(196, 196, 196, 0.20)',
  gray196T30: 'rgba(196, 196, 196, 0.30)',
  gray196T55: 'rgba(196, 196, 196, 0.55)',
  gray228: 'rgb(228, 228, 228)',
  gray230: 'rgb(230, 231, 234)',
  grayBT10: 'rgba(0, 0, 0, 0.10)',
  grayBT15: 'rgba(0, 0, 0, 0.15)',
  grayBT60: 'rgba(0, 0, 0, 0.60)',
  grayEE: '#F9F9F9',
  grayWT15: 'rgba(255, 255, 255, 0.15)',
  grayWT25: 'rgba(255, 255, 255, 0.25)',
  grayWT50: 'rgba(255, 255, 255, 0.50)',
  grayWT60: 'rgba(255, 255, 255, 0.60)',
  green: '#5DD134',
  green17T80: 'rgba(17, 243, 55, 0.80)',
  green24: 'rgba(24, 235, 9, 1)',
  green110: 'rgb(110,255,177)',
  green110T25: 'rgba(110, 255, 177, 0.25)',
  onboarding: 'rgb(149, 147, 130)',
  red: 'rgb(206, 63, 72)', // #CE3F48
  red212: 'rgba(212, 0, 0,1)', 
  red182: 'rgba(182, 38, 36, 1)',
  red231T80: 'rgba(231,65,89, 0.8)',
  redCC0720: 'rgb(204, 7, 32)', // #CC0720
  redCE3F3F: 'rgb(206, 63, 63)', // #CE3F3F
  redEB3323: 'rgb(235, 51, 35)',
  transparent: 'transparent',
  white: 'rgb(255, 255, 255)',
  white240: 'rgb(240, 240, 243)',
  white246: 'rgb(246, 246, 248)',
  white246T0: 'rgba(246, 246, 248, 0)',
  white246T70: 'rgba(246, 246, 248, 0.70)',
  white255T005: 'rgba(255, 255, 255, 0.05)',
  whiteT0: 'rgba(255, 255, 255, 0)',
  whiteT003: 'rgba(255, 255, 255, 0.03)',
  whiteT005: 'rgba(255, 255, 255, 0.05)',
  whiteT10: 'rgba(255, 255, 255, 0.10)',
  whiteT15: 'rgba(255, 255, 255, 0.15)',
  whiteT20: 'rgba(255, 255, 255, 0.20)',
  whiteT25: 'rgba(255, 255, 255, 0.25)',
  whiteT30: 'rgba(255, 255, 255, 0.30)',
  whiteT35: 'rgba(255, 255, 255, 0.35)',
  whiteT40: 'rgba(255, 255, 255, 0.40)',
  whiteT45: 'rgba(255, 255, 255, 0.45)',
  whiteT50: 'rgba(255, 255, 255, 0.50)',
  whiteT60: 'rgba(255, 255, 255, 0.60)',
  whiteT75: 'rgba(255, 255, 255, 0.75)',
  yellow: 'rgb(255, 222, 0)',
  COLOR_CCCCCC: '#CCCCCC',
  redConnAppbg: 'rgba(237, 28, 36, 0.1)',
  textBorder: 'rgba(0, 42, 92, 0.3)',
  lineColor: 'rgba(245, 130, 31, 0.6)',
  orderColor: 'rgba(2, 48, 99, 0.1)',
  orangeActive:'rgba(245, 130, 31, 0.05)'
};

const Text = {
  black: 'rgb(0, 0, 0)',
  black13: 'rgb(13, 13, 15)',
  blackT60: 'rgba(0, 0, 0, 0.60)',
  bodyGray: '#8C8C8C',
  SECONDARY_DARK_COLOR: '#004C9C',
  gray: '#777777',
  gray149: 'rgb(149, 147, 131)',
  gray151T025: 'rgba(151, 151, 151, 0.25)',
  gray196: 'rgb(196, 196, 203)',
  gray167: 'rgba(167, 167, 167, 1)',
  gray167T150: 'rgba(167, 167, 167, 0.15)',
  gray196T70: 'rgba(196, 196, 203, 0.7)',
  grayBT10: 'rgba(0, 0, 0, 0.10)',
  grayBT60: 'rgba(0, 0, 0, 0.60)',
  grayBT75: 'rgba(0, 0, 0, 0.75)',
  grayWT50: 'rgba(255, 255, 255, 0.50)',
  grayWT60: 'rgba(255, 255, 255, 0.60)',
  gray237: 'rgba(237, 237, 237, 1)',
  red: 'rgb(238, 0, 30)',
  red241: 'rgb(241, 66, 66)',
  white: 'rgb(255, 255, 255)',
  textgray: 'rgba(99, 100, 102, 1.0)',
  white208: 'rgb(208, 208, 208)',
  whiteT6: 'rgba(255, 255, 255, 0.60)',
  whiteT20: 'rgba(255, 255, 255, 0.20)',
  whiteT50: 'rgba(255, 255, 255, 0.50)',
  whiteT75: 'rgba(255, 255, 255, 0.75)',
  yellow: 'rgba(255, 222, 0, 1)',
  branches: 'rgba(198, 22, 141, 1)',
  green3: 'rgba(111, 207, 151, 1)',
  green4: 'rgba(11, 183, 160, 1)',
  green33: 'rgba(33, 150, 83, 1)',
  lightGreen: 'rgba(70, 191, 148, 1)',
  gray1: 'rgba(225, 225, 225, 1)',
  ascent1: 'rgba(146, 39, 143, 1)',
  ascent2: 'rgba(92, 46, 145, 1)',
  naturalWhite: 'rgba(255, 255, 255, 1)',
  naturalWhiteOpacity3: 'rgba(255, 255, 255, 0.3)',
  dark30: 'rgba(30, 30, 30, 1)',
  dark2: 'rgba(40, 40, 40, 1)',
  naturalDark2: 'rgba(29, 34, 38, 1)',
  naturalDark2With8: 'rgba(29, 34, 38, 0.8)',
  primaryBlue: 'rgba(0, 174, 239, 1)',
  dropShadow: 'rgba(29, 34, 38, 0.3)',
  grayLite: 'rgba(238, 238, 238, 1)',
  rankBlue: 'rgba(0, 118, 191, 1)',
  grayDark: 'rgba(99, 100, 102, 1)',
  grayDark2: 'rgba(99, 100, 102, 0.2)',
  primarBlueOpacity: 'rgba(0, 174, 239, 0.1)',
  primarBlueOpacity2: 'rgba(0, 174, 239, 0.4)',
  primaryBlue1: 'rgba(0, 98, 150, 1)',
  popUpErrorText: 'rgba(235, 87, 87, 1)',
  greyText: '#636466',
  hourColor: 'rgba(0, 174, 239, 0.2)',
  separatorBlack: 'rgba(99, 100, 102, 1)',
  blue2: 'rgba(0, 137, 208, 1)',
  orangeColor: 'rgba(221, 88, 40,1)',
  light_gray_bg4: 'rgba(238, 238, 238, 0.4)',
  naturalGray: 'rgba(124, 124, 124, 1)',
  completed: 'rgba(33, 150, 83, 0.2)',
  redConApp: 'rgba(237, 28, 36, 1)',
  borderColor: 'rgba(0, 42, 92, 0.3)',
  blueColor1: 'rgba(0, 94, 173, 1)',
  changePlanCOlor: 'rgba(63, 151, 173, 1)',
  moreServiceColor: 'rgba(241, 174, 70, 1)',
  disConnectColor: 'rgba(222, 84, 53, 1)',
  primarySkyBlueT87: 'rgba(0, 98, 150, 0.87)',
  statusColor: 'rgba(227, 120, 61, 0.8)',
  primaryBlueT87: 'rgba(0, 42, 92, 0.87)',
  
};

export const Categories = {
  other: {
    borderColor: '#A7A7A7',
    background: '#E9E9E9',
    foreground: '#939399',
    violet: '#5C2E91',
    primaryBlue1: '#0098BA',
    sky_blue: '#00AEEF',
    dark_pink: '#92278F',
    light_violet: '#6C439C',
    light_pink: '#872996',
    gray: '#636466',
    darkGrey: 'rgba(0,0,0,0.4)',
    darkBlue: 'rgba(0, 0, 0,1)',
    blue_light: '#00B9F2',
    blue_dark: '#005DB2',
    blue_dark2: '#402795',
    light_gray: '#FDFDFD',
    dark_blue: '#0060AF',
    light_blue: 'rgba(41, 121, 188, 1)',
    voilet: '#C6168D',
    green: '#01A490',
    yellow: 'rgba(252, 175, 23, 1)',
    red: 'rgba(237, 28, 36, 1)',
    light_gray_bg: '#EEEEEE',
    dis_color: '#F4792033',
    dis_color_text: '#F47920',
    light_blue_goal: '#00A1E41A',
    light_blue_goal_text: '#00AEEF',
    green_goal_finish_text: '#219653',
    green_goal_finish: '#21965333',
    red_goal_finish_text: '#ED1C24',
    red_goal_finish: '#ED1C2433',
    single_line: '#1D2226',
    yellowColor: 'rgba(244, 121, 32, 1)',
    yellowColor3: 'rgba(244, 121, 32, 0.3)',
    boxShadow: 'rgba(88, 89, 91, 0.2)',
    naturalDark: '#1F2023',
    primarySkyBlue: '#002A5C',
    primaryBlue: '#006296',
    grey: '#464646',
    brightgrey: '#58595B',
    gray31: '#4F4F4F',
    fordgray: '#979797',
    whitesmoke: '#F2F2F2',
    schiavablue: '#192F5B',
    spanishgray: '#939598',
    buttonOrange: 'rgba(245, 130, 31, 0.2)',
    seprator: 'rgba(151,151,151,0.2)',
    DarkGrey: 'rgba(159, 159, 159, 0.5)',
    lightBlue: '#0099C7',
    secBlue: '#006296',
    grayshade: '#807F83',
    backg: '#AFDEE74D',
    gray167: 'rgba(167, 167, 167, 1)',
    primaryBlue2: '#009AC9',
   greyDark:'rgba(166, 166, 166, 1)',
   dark: '#444',
   bottomBorder: '#C5C5C5',
   placeholder:'rgba(128, 127, 131, 0.5)',
   buttonBlue: 'rgba(0, 98, 150, 1)',
   black: 'rgba(70, 70, 70, 1)',
   darkBlue1:'rgba(0, 42, 92, 1)',
   black1: 'rgba(0, 0, 0, 0.8)',
  },
};

const MemberCheckIn = {
  lightColors: [
    '#FFB530',
    '#4ACBD3',
    '#CD2D98',
    '#FF561D',
    '#00AEEF',
    '#4ACBD3',
  ],
  darkColors: [
    '#FF7322',
    '#0A9276',
    '#402795',
    '#B22A20',
    '#0060AF',
    '#0A9276',
  ],
};

export default {
  Categories,
  Generic,
  Text,
  MemberCheckIn,
};
