import { makeStyles } from '@material-ui/core';

const drawerWidth = 260;
const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: 300,
  lineHeight: '1.5em',
};
const primaryColor = '#FFBC20';
const infoColor = '#00acc1';
const roseColor = '#e91e63';
const warningColor = '#ff9800';
const dangerColor = '#f44336';
const successColor = '#4caf50';
export default makeStyles((theme) => ({
  title: {
    ...defaultFont,
    lineHeight: '30px',
    fontSize: '18px',
    borderRadius: '3px',
    textTransform: 'none',
    color: 'inherit',
    padding: '8px 16px',
    letterSpacing: 'unset',
    '&:hover,&:focus': {
      color: 'inherit',
      background: 'transparent',
    },
  },
  black: {},

  appBar: {
    maxHeight: '88px',
    left: '0.65px',
    top: '0px',
    display: 'flex',
    border: '1px solid #FCFCFC',
    borderRadius: '3px',
    padding: '0.625rem 0',
    marginBottom: '20px',
    color: '#555',
    width: '100%',
    backgroundColor: '#fff',
    transition: 'all 150ms ease 0s',
    alignItems: 'center',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    zIndex: 'unset',
  },
  headerShadow: {},
  absolute: {
    position: 'absolute',
    zIndex: 550,
  },
  fixed: {
    position: 'fixed',
    zIndex: 550,
  },
  unset: {
    position: 'unset',
  },
  container: {
    minHeight: '50px',
    flex: '1',
    alignItems: 'unset !important',
    justifyContent: 'space-between',
    display: 'flex',
    flexWrap: 'nowrap',
    '@media (min-width: 576px)': {
      maxWidth: '540px',
    },
    '@media (min-width: 768px)': {
      maxWidth: '90%',
    },
    '@media (min-width: 992px)': {
      maxWidth: '90%',
    },
    '@media (min-width: 1200px)': {
      maxWidth: '90%',
    },
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%',
  },
  flex: {
    display: 'flex',
    alignItems: 'center',
  },
  appResponsive: {
    margin: '20px 10px',
  },
  primary: {
    backgroundColor: primaryColor,
    color: '#FFFFFF',
    boxShadow:
      '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(156, 39, 176, 0.46)',
  },
  info: {
    backgroundColor: infoColor,
    color: '#FFFFFF',
    boxShadow:
      '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(0, 188, 212, 0.46)',
  },
  success: {
    backgroundColor: successColor,
    color: '#FFFFFF',
    boxShadow:
      '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(76, 175, 80, 0.46)',
  },
  warning: {
    backgroundColor: warningColor,
    color: '#FFFFFF',
    boxShadow:
      '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(255, 152, 0, 0.46)',
  },
  danger: {
    backgroundColor: dangerColor,
    color: '#FFFFFF',
    boxShadow:
      '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(244, 67, 54, 0.46)',
  },
  rose: {
    backgroundColor: roseColor,
    color: '#FFFFFF',
    boxShadow:
      '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(233, 30, 99, 0.46)',
  },
  transparent: {
    backgroundColor: 'transparent !important',
    boxShadow: 'none',
    paddingTop: '25px',
    color: '#FFFFFF !important',
  },
  dark: {
    color: '#FFFFFF',
    backgroundColor: '#212121 !important',
    boxShadow:
      '0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 12px -5px rgba(33, 33, 33, 0.46)',
  },
  white: {
    border: '0',
    color: '#555',
  },
  drawerPaper: {
    border: 'none',
    bottom: '0',
    background: '#1F232B',
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    width: '100%',
    boxShadow:
      '0 10px 30px -12px rgba(0, 0, 0, 0.42), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)',
    position: 'fixed',
    display: 'block',
    top: '0',
    height: '100vh',
    right: '0',
    left: 'auto',
    visibility: 'visible',
    overflowY: 'visible',
    borderTop: 'none',
    textAlign: 'left',
    paddingRight: '0px',
    paddingLeft: '0',
    transition: 'all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)',
  },
  navLink: {
    position: 'relative',
    padding: '0.575rem 0.9375rem',
    fontWeight: 400,
    fontSize: '12px',
    color: 'inherit',
    textTransform: 'uppercase',
    borderRadius: '3px',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
    '&:hover,&:focus': {
      color: 'inherit',
      background: 'rgba(200, 200, 200, 0.2)',
    },
    [theme.breakpoints.down('sm')]: {
      width: 'calc(100% - 30px)',
      marginLeft: '15px',
      marginBottom: '8px',
      marginTop: '8px',
      textAlign: 'left',
      '& > span:first-child': {
        justifyContent: 'flex-start',
      },
    },
  },
  img: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
  },
  imageDropdownButton: {
    padding: '0px',
    top: '4px',
    borderRadius: '50%',
    marginLeft: '5px',
  },

  list: {
    ...defaultFont,
    fontSize: '14px',
    margin: 0,
    paddingLeft: '0',
    listStyle: 'none',
    paddingTop: '0',
    paddingBottom: '0',
    color: 'inherit',
  },
  listItem: {
    float: 'left',
    color: 'inherit',
    position: 'relative',
    display: 'block',
    width: 'auto',
    margin: '0',
    padding: '0',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      '&:after': {
        width: 'calc(100% - 30px)',
        content: '""',
        display: 'block',
        height: '1px',
        marginLeft: '15px',
        backgroundColor: '#e5e5e5',
      },
    },
  },
  listItemText: {
    padding: '0 !important',
  },
  notificationNavLink: {
    color: 'inherit',
    padding: '0.9375rem',
    fontWeight: 400,
    fontSize: '12px',
    textTransform: 'uppercase',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
    top: '4px',
  },
  registerNavLink: {
    top: '3px',
    position: 'relative',
    fontWeight: 400,
    fontSize: '12px',
    textTransform: 'uppercase',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    display: 'inline-flex',
  },
  navLinkActive: {
    color: 'inherit',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  icons: {
    width: '20px',
    height: '20px',
    marginRight: '3px',
  },
  socialIcons: {
    position: 'relative',
    fontSize: '20px !important',
    marginRight: '4px',
  },
  dropdownLink: {
    '&,&:hover,&:focus': {
      color: 'inherit',
      textDecoration: 'none',
      display: 'block',
      padding: '10px 20px',
    },
  },
  tooltip: {
    padding: '10px 15px',
    minWidth: '130px',
    color: '#555555',
    lineHeight: '1.7em',
    background: '#FFFFFF',
    border: 'none',
    borderRadius: '3px',
    boxShadow:
      '0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.2)',
    maxWidth: '200px',
    textAlign: 'center',
    fontFamily: '"Helvetica Neue",Helvetica,Arial,sans-serif',
    fontSize: '0.875em',
    fontStyle: 'normal',
    fontWeight: 400,
    textShadow: 'none',
    textTransform: 'none',
    letterSpacing: 'normal',
    wordBreak: 'normal',
    wordSpacing: 'normal',
    wordWrap: 'normal',
    whiteSpace: 'normal',
    lineBreak: 'auto',
  },
  marginRight5: {
    marginRight: '5px',
  },
  closeIcon: {
    position: 'absolute',
    right: '20px',
    top: '20px',
    WebkitFilter: 'drop-shadow(1px 1px 3px rgba(64, 189, 220,0.584))',
    filter: 'drop-shadow(1px 1px 3px rgba(64, 189, 220,0.584))',
  },
}));
