import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import useStyle from './styles';

type Props = {
  mobileOpen?: any;
  handleDrawerToggle?: () => void;
};
interface Link {
  path: string;
  name: string;
}
const menu: Link[] = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/videos',
    name: 'Browse',
  },
  {
    path: '/collections',
    name: 'Collections',
  },
  {
    path: '/creators',
    name: 'Creators',
  },
];

const HeaderLinks: React.FC<Props> = ({handleDrawerToggle}) => {
  const classes = useStyle();

  return (
    <List className={classes.list}>
      {menu.map((link) => (
        <ListItem key={link.name} className={classes.listItem}>
          <Link to={link.path} color="transparent" onClick={handleDrawerToggle} className={classes.navLink}>
            {link.name}
          </Link>
        </ListItem>
      ))}
    </List>
  );
};

export default HeaderLinks;
