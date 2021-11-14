import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LanguageIcon from '@mui/icons-material/Language';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ViewListIcon from '@mui/icons-material/ViewList';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LogoutIcon from '@mui/icons-material/Logout';
import AddTaskIcon from '@mui/icons-material/AddTask';
import {
  Link,
  useRouteMatch
} from 'react-router-dom';
import { Divider } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


const ListItems = () => {
  // const [admin, setAdmin] = React.useState(false)
  const { logout, admin } = useAuth();
  // const email = user.email;
  let { url } = useRouteMatch();

  // React.useEffect(() => {
  //   fetch(`https://desolate-badlands-81980.herokuapp.com/users/${email}`)
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data);
  //       if (data.role) {
  //         setAdmin(true);
  //       }
  //     })
  // }, [email])

  return (
    <div>
      <Link to="/" style={{ textDecoration: 'none', color: '#3a3a3a' }}>
        <ListItem button>
          <ListItemIcon>
            <LanguageIcon />
          </ListItemIcon>
          <ListItemText primary="Back to Site" />
        </ListItem>
      </Link>

      <Divider />

      <Link to={`${url}`} style={{ textDecoration: 'none', color: '#3a3a3a' }}>
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>

      {/* Normal User menu list */}
      <Link to={`${url}/pay`} style={{ textDecoration: 'none', color: '#3a3a3a' }}>
        <ListItem button>
          <ListItemIcon>
            <MonetizationOnIcon />
          </ListItemIcon>
          <ListItemText primary="Pay" />
        </ListItem>
      </Link>


      <Link to={`${url}/myOrders`} style={{ textDecoration: 'none', color: '#3a3a3a' }}>
        <ListItem button>
          <ListItemIcon>
            <ViewListIcon />
          </ListItemIcon>
          <ListItemText primary="My Orders" />
        </ListItem>
      </Link>

      <Link to={`${url}/review`} style={{ textDecoration: 'none', color: '#3a3a3a' }}>
        <ListItem button>
          <ListItemIcon>
            <ReviewsIcon />
          </ListItemIcon>
          <ListItemText primary="Review" />
        </ListItem>
      </Link>

      {/* Admin User Menu List */}
      {admin ?
        <div>
          <Link to={`${url}/manageOrders`} style={{ textDecoration: 'none', color: '#3a3a3a' }}>
            <ListItem button>
              <ListItemIcon>
                <ShoppingCartIcon />
              </ListItemIcon>
              <ListItemText primary="Manage All Orders" />
            </ListItem>
          </Link>

          <Link to={`${url}/addProduct`} style={{ textDecoration: 'none', color: '#3a3a3a' }}>
            <ListItem button>
              <ListItemIcon>
                <AddTaskIcon />
              </ListItemIcon>
              <ListItemText primary="Add A Product" />
            </ListItem>
          </Link>

          <Link to={`${url}/makeAdmin`} style={{ textDecoration: 'none', color: '#3a3a3a' }}>
            <ListItem button>
              <ListItemIcon>
                <AdminPanelSettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Make Admin" />
            </ListItem>
          </Link>

          <Link to={`${url}/manageProducts`} style={{ textDecoration: 'none', color: '#3a3a3a' }}>
            <ListItem button>
              <ListItemIcon>
                <ProductionQuantityLimitsIcon />
              </ListItemIcon>
              <ListItemText primary="Manage Products" />
            </ListItem>
          </Link>
        </div> :
        null
      }

      <ListItem button
        onClick={logout}
      >
        <ListItemIcon>
          <LogoutIcon />
        </ListItemIcon>
        <ListItemText primary="Logout" />
      </ListItem>
    </div>
  )
}
export default ListItems;