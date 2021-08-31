import { makeStyles } from '@material-ui/core';
const defaultFont = {
  fontWeight: 300,
  lineHeight: '1.5em',
};
export default makeStyles((theme) => ({
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
  navLink: {
    position: 'relative',
    padding: '0.575rem 0.9375rem',
    color: 'white',
    textTransform: 'uppercase',
    lineHeight: '20px',
    textDecoration: 'none',
    margin: '0px',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '18px',
    minWidth: '110px',
    fontWeight: 700,
    background: '#343539',
    borderRadius: '12px',
    display: 'inline-flex',
    '&:hover,&:focus,&:active': {
      "backgroundColor": "#40BDDC",
      "color": "#fff",
      "borderRadius": "12px"
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
  listItemText: {
    padding: '0 !important',
  },

}));
