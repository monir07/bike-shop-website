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
import { Link } from 'react-router-dom';
import { Divider } from '@mui/material';
import useAuth from '../../../hooks/useAuth';


const ListItems = () => {
  const { logout } = useAuth();

  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <LanguageIcon />
        </ListItemIcon>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <ListItemText primary="Back to Site" />
        </Link>
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>

      {/* Normal User menu list */}
      <ListItem button>
        <ListItemIcon>
          <MonetizationOnIcon />
        </ListItemIcon>
        <ListItemText primary="Pay" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <ViewListIcon />
        </ListItemIcon>
        <ListItemText primary="My Orders" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <ReviewsIcon />
        </ListItemIcon>
        <ListItemText primary="Review" />
      </ListItem>

      {/* Admin User Menu List */}
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="Manage All Orders" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <AddTaskIcon />
        </ListItemIcon>
        <ListItemText primary="Add A Product" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <AdminPanelSettingsIcon />
        </ListItemIcon>
        <ListItemText primary="Make Admin" />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <ProductionQuantityLimitsIcon />
        </ListItemIcon>
        <ListItemText primary="Manage Products" />
      </ListItem>

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