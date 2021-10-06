import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import useStyle from './styles';

type Props = {
  mobileOpen?: any;
  handleDrawerToggle?: () => void;
};
interface LinkProp {
  path: string;
  name: string;
}
const menu: LinkProp[] = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/explore',
    name: 'Explore',
  },
  {
    path: '/features',
    name: 'Features',
  },

  {
    path: '/about',
    name: 'About',
  },
  {
    path: '/blog',
    name: 'Blog',
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
