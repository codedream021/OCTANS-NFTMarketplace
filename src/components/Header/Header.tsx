import React from 'react';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import useStyle from './style';
import * as S from './styles';
import logo from './assets/logo.png';
import logo2x from './assets/logo@2x.png';
import NavBar from './NavBar';
import ProfileBlock from './ProfileBlock';
import HeaderLinks from './HeaderLinks/HeaderLinks';
import CloseIcon from '@material-ui/icons/Close';
import SearchBar from './SearchBar';

type Props = {
  color:
    | 'title'
    | 'flex'
    | 'transparent'
    | 'white'
    | 'dark'
    | 'absolute'
    | 'tooltip'
    | 'appBar'
    | 'black';
  fixed: boolean;
  changeColorOnScroll: {
    height: number;
    color:
      | 'title'
      | 'flex'
      | 'transparent'
      | 'white'
      | 'dark'
      | 'absolute'
      | 'tooltip'
      | 'appBar'
      | 'black';
  };
  absolute?: boolean;
};
const Header: React.FC<Props> = ({
  color,
  fixed,
  changeColorOnScroll,
  absolute,
}) => {
  let enabled = React.useRef(true);
  const classes = useStyle();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [q, setQ] = React.useState('');
  const headerColorChange = React.useCallback(
    (event) => {
      const windowsScrollTop = event.detail.scrollTop;
      const headers = document.body.getElementsByTagName('header');
      if (headers[0]) {
        for (let i = 0; i < headers.length; i++) {
          if (windowsScrollTop > changeColorOnScroll.height) {
            headers[i].classList.remove(classes[color]);
            headers[i].classList.add(classes[changeColorOnScroll.color]);
          } else {
            headers[i].classList.add(classes[color]);
            headers[i].classList.remove(classes[changeColorOnScroll.color]);
          }
        }
      }
    },
    [changeColorOnScroll, classes, color]
  );

  if (changeColorOnScroll) {
    window.document.body.addEventListener('scroll', headerColorChange);
  }
  React.useEffect(() => {
    window.document.body.addEventListener('scroll', (event: any) => {
      if (enabled.current) {
        if (event.detail.scrollTop > 50) setIsScrolled(true);
        else setIsScrolled(false);
      }
    });

    return () => {
      enabled.current = false;

      window.removeEventListener('scroll', function (event: any) {
        if (enabled.current) {
          if (event.detail.scrollTop > 50) setIsScrolled(true);
          else setIsScrolled(false);
        }
      });
    };
  }, [enabled]);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const logo1 = (
    <Link to="/">
      <S.Logo>
        <img
          style={{
            maxHeight: '70px',
            maxWidth: '210px',
            verticalAlign: 'middle',
            height: "17px",
          }}
          src={logo}
          srcSet={`${logo2x} 2x`}
          alt="Octa NFT"
        />
      </S.Logo>
    </Link>
  );

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed,
    [classes.unset]: true,
    [classes.headerShadow]: !isScrolled,
  });
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>
          {logo1}
          <Hidden mdUp>
            <IconButton
              color={color === 'black' ? 'secondary' : 'inherit'}
              aria-label="open drawer"
              onClick={handleDrawerToggle}
            >
              <Menu />
            </IconButton>
          </Hidden>
        </div>

        <Hidden smDown implementation="css">
          <div className={classes.flex}>
            <SearchBar onSearch={setQ} isFetching={false} />
            <NavBar />
          </div>
        </Hidden>
        <ProfileBlock />
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor="left"
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            <IconButton
              className={classes.closeIcon}
              onClick={handleDrawerToggle}
            >
              <CloseIcon color="primary" />
            </IconButton>

            <div style={{ marginTop: '50px' }}>
              <HeaderLinks handleDrawerToggle={handleDrawerToggle} />
            </div>
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

export default Header;
